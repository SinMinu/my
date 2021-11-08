const moreBtn = document.querySelector('.info .metadata .moreBtn');
const p = document.querySelector('.info .metadata .p')

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    p.classList.toggle('clamp');
});
