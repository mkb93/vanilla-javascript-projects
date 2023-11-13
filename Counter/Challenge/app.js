const btn1 = document.getElementById('front')
const btn2 = document.getElementById('back')
const card = document.querySelector('.container')

btn1.addEventListener('click',()=>{
  card.style.transform = 'rotateY(180deg)';
})
btn2.addEventListener('click',()=>{
  card.style.transform = 'rotateY(0deg)';
})
let count = 0;
const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
      count--;
    }
    else if (styles.contains('increase')){
      count++;
    }
    else {
      count = 0;
    }
    value.textContent = count;
  })
})
