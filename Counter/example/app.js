let count = [0,0,0,0]

const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const value3 = document.querySelector('#value3');
const value4 = document.querySelector('#value4');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease1')){
      count[0]--;
    }
    else if (styles.contains('increase1')){
      count[0]++;
    }
    else if (styles.contains('reset1')){
      count[0] = 0;
    }
    else if (styles.contains('decrease2')){
      count[1]--;
    }
    else if (styles.contains('decrease3')){
      count[2]--;
    }
    else if (styles.contains('decrease4')){
      count[3]--;
    }
    else if (styles.contains('increase2')){
      count[1]++;
    }
    else if (styles.contains('increase3')){
      count[2]++;
    }
    else if (styles.contains('increase4')){
      count[3]++;
    }
    else if (styles.contains('reset2')){
      count[1] = 0;
    }
    else if (styles.contains('reset3')){
      count[2] = 0;
    }
    else if (styles.contains('reset4')){
      count[3] = 0;
    }
   if(count[0]>0){
    value1.style.color="green"
   }
   if(count[1]>0){
    value2.style.color="green"
   }
   if(count[2]>0){
    value3.style.color="green"
   }
   if(count[3]>0){
    value4.style.color="green"
   }
   if(count[0]<0){
    value1.style.color="red"
   }
   if(count[1]<0){
    value2.style.color="red"
   }
   if(count[2]<0){
    value3.style.color="red"
   }
   if(count[3]<0){
    value4.style.color="red"
   }
   if(count[0]===0){
    value1.style.color="#000"
   }
   if(count[1]===0){
    value2.style.color="#000"
   }
   if(count[2]===0){
    value3.style.color="#000"
   }
   if(count[3]===0){
    value4.style.color="#000"
   }
    value1.textContent = count[0];
    value2.textContent = count[1];
    value3.textContent = count[2];
    value4.textContent = count[3];
  })
})