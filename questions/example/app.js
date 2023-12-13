// traversing the dom
// const btns = document.querySelectorAll('.question-btn')
// btns.forEach(btn=>{
//  btn.addEventListener('click', e=>{
//   const question = e.currentTarget.parentElement.parentElement
//   question.classList.toggle("show-text");
//  })
// })

//other ways of traversing the dom

const questions = document.querySelectorAll('.question')

questions.forEach((question)=>{
  
  question.querySelectorAll('.question-btn')[0].addEventListener('click',(e)=>{
    questions.forEach((text)=>{
      if(text !== question){
        text.classList.remove("show-text")
      }
    })
    question.classList.toggle("show-text")
    
   
  })
})