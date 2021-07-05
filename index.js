var theImage = document.getElementById("theImage")
var theButton = document.getElementById("theButton")

var images = ["a.jpg", "b.jpg"]
var currentImage = 0

theButton.addEventListener('click', () => {
    currentImage = currentImage + 1
    theImage.src = "imgs/" + images[currentImage % 2]
})