const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("card-btn");
const btn2 = document.getElementById("background-btn");
const color = document.querySelector('.color');
const cardColor = document.querySelector('.card-color');
const smallBackground = document.querySelector(".profile-card")

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length)
}
btn.addEventListener('click', () => {
  let randomNumber = '#'
  for (let i = 0; i < 6; i++) {
    randomNumber += hex[getRandomNumber()]
  }
  cardColor.textContent = randomNumber;
  smallBackground.style.background = randomNumber;
})
btn2.addEventListener('click', () => {
  let randomNumber = '#'
  for (let i = 0; i < 6; i++) {
    randomNumber += hex[getRandomNumber()]
  }
  color.textContent = randomNumber;
  document.body.style.background = randomNumber;
})


// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById('btn')
// const color = document.querySelector(".color")

// const getRandomNumber =()=>{
//   return Math.floor(Math.random()*hex.length);
// }

// btn.addEventListener('click', ()=>{
//   let randomNumber = '#'
//   for (let i=0; i<6;i++){
//     randomNumber += hex[getRandomNumber()]
//   }
//   console.log(randomNumber)
//   color.textContent = randomNumber;
//   document.body.style.background = randomNumber;
// })