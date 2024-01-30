const listItems = document.querySelectorAll('ul')[0].querySelectorAll('li')
const modalBtn = document.querySelector('.close-modal')




listItems.forEach(item=>{
  item.addEventListener('click',e=>{
    listItems.forEach(otherItem =>{
      if(item !== otherItem){
        otherItem.classList.remove('selected')
        otherItem.querySelector('div').classList.add('question-text')
      }  
})
    modalBtn.addEventListener('click',e=>{
      modalBtn.parentElement.parentElement.classList.remove('visible');
      document.querySelector('.overlay').classList.remove('visible');
      document.querySelector('body').classList.toggle('active-modal')
      item.classList.remove('selected')
    })
    item.classList.toggle('selected')
    // item.querySelector('div').classList.toggle('question-text')
  //  document.querySelector('body').classList.toggle('active-modal')
   modalBtn.parentElement.parentElement.classList.toggle('visible');
   document.querySelector('.overlay').classList.toggle('visible');
  })
})