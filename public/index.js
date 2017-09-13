document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('.editButton').addEventListener('click', openModal)
  document.querySelector('.close').addEventListener('click', closeModal)
  document.querySelector('.exit').addEventListener('click', closeModal)
  document.querySelector('.delete').addEventListener('click', deletePost)
});

const openModal = () => {
  console.log('getting to the modal');
  document.querySelector('.modal').style.display = 'block'
}

const closeModal = () => {
  document.querySelector('.modal').style.display = 'none'
}

const deletePost = (event) => {
  const post = JSON.parse(event.target.value)
  if (confirm('Are you sure you want to delete ' + post.title +'?')) {
    fetch(`/cities/delete/${post.pid}`, {
      method: 'post',
      redirect: 'follow',
      headers: new Headers({
        'content-type': 'application/json'
      })
    }).then(response => {
      location.reload()
    })  
  }
}