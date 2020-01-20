const leftContent = document.getElementById('leftContent')

var request = new XMLHttpRequest()

request.open('GET', 'https://picsum.photos/v2/list', true)

request.onload = function() {
  var data = JSON.parse(this.response)

  data.forEach(image => {
    const picture = document.createElement('img')
    picture.style.width = "200px"
    picture.style.height = "200px"
    picture.src = image.download_url
    picture.name = image.author
    picture.setAttribute('onclick', 'imgClick(this)')

    leftContent.appendChild(picture)
  })
}

request.send()

function imgClick(img){
  const imgText = document.getElementById("imgText").innerHTML =
  "Author of this image is " + img.name + " image height is " + img.naturalHeight + " and width is "
  + img.naturalWidth
  var expandImg = document.getElementById("expandedImg")
  expandImg.src = img.src
  expandImg.parentElement.style.display = "block"
}
