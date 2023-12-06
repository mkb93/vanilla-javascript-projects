let something = []
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:5000/profiles');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
};
//select
const img =document.getElementById('person-img');
const author =document.getElementById('author');
const job =document.getElementById('job');
const info =document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')
// set starting value
let currentItem=0;
//load intial item
const showPerson =  async (person) => {
  let data = await fetchData()
  something = data
  console.log(something)
  const item = something[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent =item.job;
  info.textContent = item.text;
}
window.addEventListener("DOMContentLoaded", ()=>{
 showPerson(currentItem);
})
prevBtn.addEventListener('click', ()=>{
  if(currentItem > 0 && currentItem< something.length ){
    currentItem--;
  }
  else if(currentItem == 0){
    currentItem = something.length-1
  }
  showPerson(currentItem)
})
nextBtn.addEventListener('click', ()=>{
  if(currentItem >= 0 && currentItem< something.length-1 ){
    currentItem++;
  }
  else if(currentItem == something.length-1){
    currentItem = 0
  }
  showPerson(currentItem)
})
randomBtn.addEventListener('click', ()=>{
  currentItem = Math.floor(Math.random()*something.length)
  showPerson(currentItem)
})
