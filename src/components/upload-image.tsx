import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, FileImage, GalleryThumbnails, Upload, X } from 'lucide-react'
import { SetStateAction, useCallback, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form';
import z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from './ui/button';
import { DialogFooter } from './ui/dialog';
import { useHandleInputFile } from '@/hooks/use-handle-input';
import { upload } from '@imagekit/next';
import { useUploadImageKit } from '@/hooks/use-upload-imagekit';

const MAX_FILE_SIZE = 20 * 1024 * 2014; // -> 20MB
const FILE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

const imageSchema = z.object({
  file: z.instanceof(File)
    .refine(file => file.size <= MAX_FILE_SIZE, "File exceeded max size (20MB)")
    .refine(file => FILE_TYPES.includes(file.type), "Please add image files only")
})

type ImageSchemaType = z.infer<typeof imageSchema>

type Props = {
  onFileSelect: (file: string) => void,// use this function to change the resource form field
  setShowUpload: React.Dispatch<SetStateAction<boolean>>
}


export default function UploadImage({ onFileSelect, setShowUpload }: Props) {

  const [progress, setProgress] = useState(0)

  const form = useForm<ImageSchemaType>({
    resolver: zodResolver(imageSchema)
  })

  const {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    formatFileSize,
    removeFile,
    handleFileInput,
    uploadedFile,
    preview,
    isDragging
  } = useHandleInputFile(form)

  const { handleUpload } = useUploadImageKit((num: number) => setProgress(num), onFileSelect)

  const onSubmit = (data: ImageSchemaType) => {
    console.log("Valid file:", data.file);
    handleUpload(data.file)
  };

  const hasError = !!form.formState.errors.file;
  const isValid = uploadedFile && !hasError;

  return (
    <>
      <div className='h-full max-h-[calc(100%-(22*0.3rem))] pt-2 w-full  gap-2'>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-4 w-full">
                      {!uploadedFile ? (
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          className={`
                          relative border-2 border-dashed rounded-lg p-6 w-full text-center
                          transition-all duration-200 cursor-pointer
                          ${isDragging
                              ? "border-primary bg-accent scale-[1.02]"
                              : hasError
                                ? "border-destructive bg-destructive/5"
                                : "border-border hover:border-primary hover:bg-accent/50"
                            }
                        `}
                        >
                          <input
                            type="file"
                            accept={FILE_TYPES.join(",")}
                            onChange={handleFileInput}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div className="flex flex-col items-center gap-4">
                            <div className={`
                            p-4 rounded-full transition-colors
                            ${isDragging
                                ? "bg-primary text-primary-foreground"
                                : hasError
                                  ? "bg-destructive/10 text-destructive"
                                  : "bg-accent text-accent-foreground"
                              }
                          `}>
                              <Upload className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                              <p className="text-lg font-medium text-foreground">
                                {isDragging ? "Drop your image here" : "Drag & drop your image"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                or click to browse from your device
                              </p>
                            </div>
                            <div className="text-xs text-muted-foreground space-y-1">
                              <p>Supported formats: JPEG, PNG, GIF, WEBP</p>
                              <p>Maximum size: 20MB</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={`
                        relative border-2 rounded-lg p-6 transition-all duration-200
                        ${isValid
                            ? "border-success bg-success/5"
                            : "border-destructive bg-destructive/5"
                          }
                      `}>
                          <div className="flex items-start gap-4">
                            {preview && (
                              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                                <img
                                  src={preview}
                                  alt="Preview"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0 space-y-2">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2 min-w-0">
                                  <FileImage className={`
                                  w-5 h-5 flex-shrink-0
                                  ${isValid ? "text-success" : "text-foreground"}
                                `} />
                                  <div className="min-w-0">
                                    <p className="font-medium text-foreground truncate">
                                      {uploadedFile.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {formatFileSize(uploadedFile.size)}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={removeFile}
                                  className="flex-shrink-0 h-8 w-8"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                              {isValid && (
                                <div className="flex items-center gap-2 text-success">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span className="text-sm font-medium">File validated successfully</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {uploadedFile && isValid && (
              <Button type="button" onClick={() => form.handleSubmit(onSubmit)()} className="w-full">
                Upload File
              </Button>
            )}
          </form>
        </Form>
      </div>
      <DialogFooter className='w-full h-10 flex items-center justify-between'>
        <Button
          variant="outline"
          className='h-7 font-content tracking-wide flex items-center gap-2'
          onClick={() => setShowUpload(false)}
        >
          <GalleryThumbnails />
          Back to Gallery
        </Button>
        {/* UI for progress */}
      </DialogFooter>
    </>
  )
}

