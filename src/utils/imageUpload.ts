type dataURL = {
    dataUrl: string,
    additionalData: string,
    coded: string
}
function getDataURL(inputImage: Blob, compress: number, width: number, height: number): Promise<dataURL> {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(inputImage)
        reader.onload = function (this: FileReader, event: ProgressEvent<FileReader>): void {
            const imageDataUrl = (event.target as FileReader).result as string
            const imageElement: HTMLImageElement = document.createElement('img')
            imageElement.src = imageDataUrl
            imageElement.onload = function (this: GlobalEventHandlers, e: Event) {
                const ratio = width / (e.target as HTMLImageElement).width,
                    canvas: HTMLCanvasElement = document.createElement('canvas'),
                    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
                canvas.width = width
                if(!height) canvas.height = (e.target as HTMLCanvasElement).height * ratio
                else canvas.height = height
                
                ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height)
                const newImageDataUrl = ctx.canvas.toDataURL('image/jpeg', compress)
                console.log({
                    dataUrl: newImageDataUrl,
                    additionalData: newImageDataUrl.split(',')[0],
                    coded: newImageDataUrl.split(',')[1]
                })
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
export { getDataURL, getGeneratedAvatar, URLtoFile }