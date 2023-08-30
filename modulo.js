export const baner = async()=>{
    let peticion = await fetch("infoCanal.json");
    let peticionJson = await peticion.json();
    let baner = peticionJson.banner
    let listContainer = document.querySelector('.banner')
    
    console.log(baner.tv[4].url);

    listContainer.innerHTML = `
    <img src="${baner.tv[4].url}">
    `
    
} 

export const peticionApi = async()=>{
    let peticion = await fetch("config.json");
    let peticionJson = await peticion.json();
    let listContainer = document.querySelector('#list-container')
    console.log(listContainer);
    console.log(peticionJson.contents);
    peticionJson.contents.map((informacion, id)=>{
    
        
 /*        console.log(id) */
    listContainer.insertAdjacentHTML('beforeend', /* html */`
        <div class="vid-list">
                <a href="playVideo.html" id="${informacion.video.videoId}" class="id"> 
                    <img src="${informacion.video.thumbnails[3].url} " class="thumbnail">
                </a>
                <div class="flex-div">
                    <img src="Images/Jack.png">
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




