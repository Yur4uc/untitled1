let vsiTitle = document.getElementsByClassName("item-grid-card__title")

let vsiTitleArray = Array.from(vsiTitle)

var mapT = vsiTitleArray.map(t => {return t.innerText})

console.log(mapT)