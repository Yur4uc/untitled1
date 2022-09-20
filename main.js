let vsiTitle = document.getElementsByClassName("item-grid-card");
let res = Array.from(vsiTitle).map(elem => {
    return  {
        name: elem.querySelector('.item-grid-card__title').innerText,
        src: elem.querySelector('[data-controller="audio-player"]').getAttribute('data-audio-player-waveform-url-value')
    }
})
console.log(res)
