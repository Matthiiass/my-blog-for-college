const data = window.blogData
const blogTemplate = document.querySelector('.blogpost')

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

var blogCount = 0

for (var loop = 1; loop <= data.length; loop++) {
    const blog = data[data.length - loop]
    if (blog.category != "industry") {
        continue
    }
    blogCount++;
    var newBlog = blogTemplate.cloneNode(true);
    
    newBlog.href = `blog.html?blog=id${data.length-loop}`
    newBlog.className += " validPost"
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
    newBlog.querySelector('.bar').style.backgroundColor = '#de5233'
    newBlog.querySelector('.cat').style.color = '#de5233'
    newBlog.querySelector('.dates').innerHTML = new Date(data[data.length - loop].date * 1000).toLocaleDateString('en-UK')
    document.querySelector('.latestposts').appendChild(newBlog)
}


if (blogCount == 0) {
    document.querySelector('.nothingHere').style.display = "flex"
}