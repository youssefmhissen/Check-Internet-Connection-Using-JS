let title=document.querySelector(".title")
let Reload=document.querySelector(".Reload")
let ul=document.querySelector("ul")
window.onload =function(){
    if(window.navigator.online){
        online()
    } else {
        offline()
         }
}
window.addEventListener('online',function(){
    online()
})
window.addEventListener('offline',function(){
    offline()
})
Reload.onclick=function(){
    window.location.reload()
}
function online(){
title.innerHTML='Online Now'
title.style.color='green'
ul.classList.add('hide')
Reload.classList.add('hide')
}

function offline(){ 
title.innerHTML='Offline Now'
title.style.color='red'
ul.classList.remove('hide')
Reload.classList.remove('hide')
}