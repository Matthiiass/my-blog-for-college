const blogData = window.blogData

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
};

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

var blogID = getUrlParameter('blog') // Index of blog in the data arrays
const blogInfor = blogData[blogID.slice(2)]

document.querySelector('#blogTitle').innerHTML = blogInfor.title
document.querySelector('#blogTags').innerHTML = toTitleCase(blogInfor.category) + ((blogInfor.subCategory != "") ? ", " + toTitleCase(blogInfor.subCategory) : "")
document.querySelector('#blogDate').innerHTML = new Date(blogInfor.date * 1000).toLocaleDateString('en-UK')