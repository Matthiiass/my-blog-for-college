const input = document.getElementById('search')
const posts = document.getElementsByClassName('validPost')
const nothing = document.querySelector('.nothingHere')

input.addEventListener('input', filterBlogs)

function filterBlogs(e) {
    var postsShown = 0
    for (var i = 0; i < posts.length; i++) {
        const title = posts[i].querySelector('.blogTitle').textContent
        if (title.toLowerCase().search(e.target.value) == -1) {
            posts[i].style.display = "none"
            continue
        }
        posts[i].style.display = "flex"
        postsShown++;
    }
    if (postsShown == 0) {
        nothing.style.display = 'flex'
    }
    else {
        nothing.style.display = "none"
    }
}
