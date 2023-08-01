const kits=["tonback","Tar","setar","Santoor"];
const containerEl=document.querySelector(".container");
kits.forEach(kit=>{
    const btnEl=document.createElement("butten")
    btnEl.classList.add("btn");
    btnEl.innerText=kit;
    btnEl.style.backgroundImage="url(images/"+kit+".jpg)"
    containerEl.appendChild(btnEl);
    const audioEl=document.createElement("audio");
    audioEl.src="sounds/"+kit+".mp3";
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click",()=>{
        audioEl.play();
    });
    window.addEventListener("keydown",(event)=>{
        if(event.key===kit.slice(0,1)){
            audioEl.play()
            btnEl.style.tranform="scale(.9)";
            setTimeout(()=>{
                btnEl.style.transform="scale(.9)"
            },100)
        };
    });
});