import { ImagekitResponse } from '@/app/api/imagekit/route'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import UploadImage from '@/components/upload-image'
import { cn } from '@/lib/utils'
import { Upload } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  trigger: React.ReactNode,
  currentSelection: string,
  onSelect: (url: string) => void
}

export default function ImageGalleryOrUploadDialog({ trigger, currentSelection, onSelect }: Props) {

  const [images, setImages] = useState<ImagekitResponse[]>([])

  const [showUpload, setShowUpload] = useState(false)

  const [selection, setSelection] = useState<string | undefined>(currentSelection)

  const fetchImages = useCallback(async () => {
    try {
      const res = await fetch("/api/imagekit");
      const data = await res.json();
      setImages(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className='w-full md:w-[70vw] h-[85vh] !max-w-7xl'>
        <DialogTitle className='sr-only'>Images</DialogTitle>
        <div className='size-full flex flex-col gap-1'>
          <div className='w-full flex items-center justify-between h-12'>
            <h3 className='text-2xl font-header tracking-wide font-semibold'>Choose Image</h3>
          </div>
          {showUpload
            ? <UploadImage onFileSelect={(file: string) => {
              fetchImages()
              onSelect(file)
              setSelection(file)
            }} setShowUpload={setShowUpload} />
            : <>
              <div className='h-full max-h-[calc(100%-(22*0.3rem))] pt-2 w-full columns-1 md:column-2 xl:columns-4 gap-2'>
                {images.map(image => (
                  <Image
                    className={cn("rounded-md cursor-pointer",
                      selection === image.url && "ring-2 ring-green-500 dark:ring-green-700")}
                    src={image.url}
                    key={image.name}
                    alt={image.name}
                    width="500" height="200"
                    onClick={() => setSelection(prev => {
                      if (prev === image.url) {
                        return undefined;
                      } return image.url
                    })}
                  />
                ))}
              </div>
              <DialogFooter className='w-full h-10 flex items-center justify-between'>
                <Button
                  type="button"
                  variant="outline"
                  className='h-7 font-content tracking-wide flex items-center gap-2'
                  onClick={() => setShowUpload(prev => !prev)}
                >
                  <Upload />
                  Upload Image
                </Button>
                <DialogClose
                  type="button"
                  disabled={!selection || showUpload}
                  className='h-7 cursor-pointer bg-green-500 dark:bg-green-700 px-3 py-2 rounded-md flex items-center justify-center font-content tracking-wide'
                  onClick={() => {
                    if (selection) {
                      onSelect(selection)
                    }
                  }}>Confirm Selection
                </DialogClose>
              </DialogFooter>
            </>
          }
        </div>
      </DialogContent>
    </Dialog>
  )
}

