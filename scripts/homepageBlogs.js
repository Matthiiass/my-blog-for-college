const data = window.blogData
const blogTemplate = document.querySelector('.blogpost')
const categoryColours = {
    "programming": '#e3d736',
    "content areas": '#3681e3',
    "projects": '#b652de',
    "industry": '#de5233'
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

for (var loop = 1; loop < 4; loop++) {
    if (loop > data.length) {
        break
    }
    var newBlog = blogTemplate.cloneNode(true);

    newBlog.href = `./pages/blog.html?blog=id${data.length-loop}`

    newBlog.style.display = 'flex'
    newBlog.querySelector('.blogTitle').innerHTML = data[data.length - loop].title
    newBlog.querySelector('.blogDesc').innerHTML = data[data.length - loop].desc
    newBlog.querySelector('.category').innerHTML = toTitleCase(data[data.length - loop].category)
    if (data[data.length - loop].subCategory == "") {
        newBlog.querySelector('.sub-category').style.display = 'none'
        newBlog.querySelector('.categorySplit').style.display = 'none'
    }
    else {
        newBlog.querySelector('.sub-category').innerHTML = toTitleCase(data[data.length - loop].subCategory)
    }
    newBlog.querySelector('.bar').style.backgroundColor = categoryColours[data[data.length - loop].category]
    newBlog.querySelector('.cat').style.color = categoryColours[data[data.length - loop].category]
    newBlog.querySelector('.dates').innerHTML = new Date(data[data.length - loop].date * 1000).toLocaleDateString('en-UK')
    document.querySelector('.latestposts').appendChild(newBlog)
}