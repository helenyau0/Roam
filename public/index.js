console.log('JS WORKS!!')
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('.editButton').addEventListener('click', openModal)
  document.querySelector('.close').addEventListener('click', closeModal)
  document.querySelector('.exit').addEventListener('click', closeModal)
});

const openModal = () => {
  console.log('getting to the modal');
  document.querySelector('.modal').style.display = 'block'
}

const closeModal = () => {
  document.querySelector('.modal').style.display = 'none'
}