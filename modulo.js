export const peticionApi = async()=>{
    let peticion = await fetch("config.json");
    let peticionJson = await peticion.json();
    let listContainer = document.querySelector('#list-container')
    console.log(listContainer);
    console.log(peticionJson.contents);
    peticionJson.contents.map((informacion, id)=>{
        console.log(informacion)
        console.log(informacion.video)
        console.log(informacion.video.title)
        console.log(informacion.video.videoId)
        console.log(informacion.video.publishedTimeText)
 /*        console.log(id) */
        listContainer.insertAdjacentHTML('beforeend', /* html */ `
        <div class="vid-list">
                <a href="playVideo.html"> <img src="images/thumbnail1.png" class="thumbnail"></a>
                <div class="flex-div">
                    <img src="images/Jack.png">
                    <div class="vid-info">
                        <a href="playVideo.html">${informacion.video.title}</a>
                        <p>Esay tutorials</p>
                        <p>15k views &bull; ${informacion.video.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        
        `)

    
    })
} 
