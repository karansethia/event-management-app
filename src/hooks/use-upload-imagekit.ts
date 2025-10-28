import { upload } from "@imagekit/next";

export const useUploadImageKit = (handleProgress: (num: number) => void, onSuccess: (url: string) => void): { handleUpload: (fileInput: File) => Promise<void> } => {

  const authenticator = async () => {
    try {
      // Perform the request to the upload authentication endpoint.
      const response = await fetch("/api/upload-auth");
      if (!response.ok) {
        // If the server response is not successful, extract the error text for debugging.
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }

      // Parse and destructure the response JSON for upload credentials.
      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
    } catch (error) {
      // Log the original error for debugging before rethrowing a new error.
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };


  const handleUpload = async (fileInput: File) => {

    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error("Failed to authenticate for upload:", authError);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;

    try {
      const uploadResponse = await upload({
        // Authentication parameters
        expire,
        token,
        signature,
        publicKey,
        file: fileInput,
        folder : "/sprout-society-uploads/",
        fileName: fileInput.name, // Optionally set a custom file name
        onProgress: (event) => {
          handleProgress((event.loaded / event.total) * 100);
        },
      });
      console.log("Upload response:", uploadResponse);

      if(uploadResponse.url){
        onSuccess(uploadResponse.url)
      }

    } catch (error) {
      // Handle specific error types provided by the ImageKit SDK.
      // if (error instanceof ImageKitAbortError) {
      //     console.error("Upload aborted:", error.reason);
      // } else if (error instanceof ImageKitInvalidRequestError) {
      //     console.error("Invalid request:", error.message);
      // } else if (error instanceof ImageKitUploadNetworkError) {
      //     console.error("Network error:", error.message);
      // } else if (error instanceof ImageKitServerError) {
      //     console.error("Server error:", error.message);
      // } else {
      // Handle any other errors that may occur.
      console.error("Upload error:", error);
      // }
    }
  };

  return {
    handleUpload
  }
}
