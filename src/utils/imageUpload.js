function getDataURL(inputImage, compress, width, height) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(inputImage)
        reader.onload = event => {
            const imageDataUrl = event.target.result
            const imageElement = document.createElement('img')
            imageElement.src = imageDataUrl
            imageElement.onload = e => {
                const ratio = width / e.target.width,
                    canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d')
    
                canvas.width = width
                if(!height) canvas.height = e.target.height * ratio
                else canvas.height = height
                
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
async function URLtoFile(url){
    try {
        if(url.includes('firebasestorage')) return null
        const blobbed_response = await (await fetch(url))?.blob(),
          file = new File([blobbed_response], 'File', {type: blobbed_response.type})
        return file
    }
    catch(e) {
        console.warn("Failed to fetch an image URL, this may be a CORS")
        throw(e)
    }
}
async function getGeneratedAvatar(q = '') {
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