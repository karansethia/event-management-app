import {  useCallback, useState } from 'react'
import { UseFormReturn } from 'react-hook-form';


export const useHandleInputFile = (form: UseFormReturn<{
  file: File;
}, any, {
  file: File;
}>) => {

  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedFile, setuploadedFile] = useState<File | null>(null);

  const handleFile = useCallback((file: File) => {
    form.setValue("file", file, { shouldValidate: true })
    setuploadedFile(file)

    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl)

    return () => {
      URL.revokeObjectURL(previewUrl)
    }

  }, [form])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const removeFile = useCallback(() => {
    form.setValue("file", undefined as any);
    setuploadedFile(null);
    setPreview(null);
  }, [form]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };
  return {
    isDragging,
    preview,
    uploadedFile,
    handleFileInput,
    removeFile,
    formatFileSize,
    handleDrop,
    handleDragOver,
    handleDragLeave
  }
}
