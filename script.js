const container = document.querySelector('.container')
const imgURL = 'https://source.unsplash.com/random/'
const rows = 3

for (let i = 0; i < rows * 3; i++) {
   const img = document.createElement('img')
   img.src = `${imgURL}${randomSize()}`
   container.appendChild(img)
}

function randomSize() {
   return `${randomNm()}x${randomNm()}`
}

function randomNm() {
   return Math.floor(Math.random() * 10) + 300
}