document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('.editButton').addEventListener('click', openModal)
  document.querySelector('.close').addEventListener('click', closeModal)
  document.querySelector('.exit').addEventListener('click', closeModal)
  document.querySelectorAll('.delete').forEach((deleted => {deleted.addEventListener('click', deletePost)}))
})

const openModal = () => {
  document.querySelector('.modal').style.display = 'block'
}

const closeModal = () => {
  document.querySelector('.modal').style.display = 'none'
}

const deletePost = (event) => {
  const post = JSON.parse(event.target.value)
  if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
    fetch(`/posts/delete/${post.id}`, {method: 'post'})
    .then(response => { location.reload() })
  }
}
