UPLOADCARE_PUBLIC_KEY="6b5326acd4ea5f65a9c3"

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector(".carousel-item").classList.add("active");
})

window.onload = function(event) {
  document.querySelectorAll('.delete').forEach((deleted => {deleted.addEventListener('click', deletePost)}))

  function deletePost(event) {
    const post = JSON.parse(event.target.value)
    if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
    fetch(`/posts/delete/${post.id}`, {
        method: 'post'
      }).then(success => {      
        event.target.parentNode.parentNode.parentNode.parentNode.remove()
      }).catch(console.log)
    }
  }
}
