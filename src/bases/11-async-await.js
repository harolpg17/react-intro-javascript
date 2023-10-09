const getImagen = async() => {

    try {
        const apiKey = 'rIbOBn1UcFPDjFuHZOBh04CCI5WrMA7H';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}

getImagen();