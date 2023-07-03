import { uploadBytes, ref, getDownloadURL, StorageReference } from "firebase/storage"
import { storage } from "@/firebase/config";
function getImageRatio(HTMLImage: HTMLImageElement, containerPixelWidth: number) {
    console.log(containerPixelWidth / HTMLImage.naturalWidth)
    return containerPixelWidth / HTMLImage.naturalWidth
}
async function onImagePaste(e): Promise<dataURL | null>{
    const item = (e.clipboardData || e.originalEvent.clipboardData).items[0];
    if (item.kind === 'file') {
            const blob = item.getAsFile();
            return await getDataURL(blob, 1, 800, 800)
        }
        return null
    }
    function changeImageSize(imageElement:HTMLImageElement, width: number, height?: number): string {
        const canvas: HTMLCanvasElement = document.createElement('canvas'),
            ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            canvas.width = width
        if(!height) canvas.height = imageElement.height * getImageRatio(imageElement, width)
        else canvas.height = height
        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height)
        return ctx.canvas.toDataURL('image/jpeg')
        
    }
    function getDataURL(inputImage: Blob, compress: number, width: number, maxHeight?: number, height?: number,): Promise<dataURL> {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(inputImage)
        reader.onload = function (this: FileReader, event: ProgressEvent<FileReader>): void {
            const imageDataUrl = (event.target as FileReader).result as string
            const imageElement: HTMLImageElement = document.createElement('img')
            imageElement.src = imageDataUrl
            imageElement.onload = function (this: GlobalEventHandlers, e: Event) {
                
                const width_ratio = width / (e.target as HTMLImageElement).width,
                canvas: HTMLCanvasElement = document.createElement('canvas'),
                ctx = canvas.getContext('2d') as CanvasRenderingContext2D
                canvas.width = width
                if(!height) canvas.height = (e.target as HTMLCanvasElement).height
                else canvas.height = height
                
                
                canvas.height *= width_ratio
                
                
                ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height)
                const newImageDataUrl = ctx.canvas.toDataURL('image/jpeg', compress)
                resolve({
                    dataUrl: newImageDataUrl,
                    additionalData: newImageDataUrl.split(',')[0],
                    coded: newImageDataUrl.split(',')[1]
                })            
            }            
        }
    })   
}
async function URLtoFile(url: string): Promise<File | null>{
    try {
        if(url.includes('firebasestorage')) return null
        const blobbed_response: Blob = await (await fetch(url))?.blob(),
        file = new File([blobbed_response], 'File', {type: blobbed_response.type})
        return file
    }
    catch(e) {
        console.warn("Failed to fetch an image URL, this may be a CORS")
        throw(e)
    }
}
async function getGeneratedAvatar(q = ''): Promise<string> {
    if(!q) {
        for(let i = 0; i < 6; i++) {
            q += Math.floor(Math.random() * 47).toString()
        }
    }
    const res = await fetch(`https://api.multiavatar.com/${q}.png?apikey=2xi9ve1j34EPd8`)
    if(res.status != 200) throw(new Error())
    else return res.url
}
async function sendImageToRoom(dataURL: string, messageId: string, room_hash: string): Promise<string | null> {
    const message_url = `rooms/${room_hash}/${messageId}`
    return await sendImageToServer(dataURL, message_url)
}
async function sendImageToServer(dataURL: string, url: string): Promise<string | null> {
    const file = await URLtoFile(dataURL),
          storageReference: StorageReference = ref(storage, url)
    if(file) {
        await uploadBytes(storageReference, file)
        return await getDownloadURL(storageReference)
    }
    else {
        console.warn('Unable to parse dataURL in URLtoFile method in sendImageToServer method of imageUpload ')
        return null
    }
}
export { getDataURL, getGeneratedAvatar, URLtoFile, onImagePaste, changeImageSize, sendImageToRoom }

export interface dataURL {
    dataUrl: string,
    additionalData: string,
    coded: string
}