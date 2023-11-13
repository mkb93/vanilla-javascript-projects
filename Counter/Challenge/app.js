const btn1 = document.getElementById('front')
const btn2 = document.getElementById('back')
const card = document.querySelector('.container')

btn1.addEventListener('click',()=>{
  card.style.transform = 'rotateY(180deg)';
})
btn2.addEventListener('click',()=>{
  card.style.transform = 'rotateY(0deg)';
})