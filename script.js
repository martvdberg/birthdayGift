// Add confettie blast
const kaboem = document.createElement('img');
kaboem.setAttribute('src', './assets/gif/kaboem.gif');
kaboem.classList.add('confettie')

window.addEventListener('load',()=>{
    document.querySelector('.card__imgContainer').appendChild(kaboem);
})