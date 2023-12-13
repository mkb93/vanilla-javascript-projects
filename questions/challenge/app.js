const listItems = document.querySelectorAll('ul')[0].querySelectorAll('li')

listItems.forEach(item=>{
  item.addEventListener('click',e=>{
    listItems.forEach(otherItem =>{
      if(item !== otherItem){
        otherItem.classList.remove('selected')
      }
    })
    item.classList.toggle('selected')

  })
})