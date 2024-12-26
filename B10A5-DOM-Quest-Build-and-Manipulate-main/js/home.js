const blog = document.getElementById('blog')
blog.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("home clicked")
    window.location.href="index.html"
})