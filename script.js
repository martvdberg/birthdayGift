// Add confettie blast
const kaboem = document.createElement('img');
kaboem.setAttribute('src', './assets/gif/kaboem.gif');
kaboem.classList.add('confettie');

// When everyrhing is loaded add kaboem to the page and start the animation timeline
window.addEventListener('load',()=>{
    document.querySelector('.card__imgContainer').appendChild(kaboem);
})