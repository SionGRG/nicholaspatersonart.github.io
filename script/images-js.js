// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closees the modal
var span = document.getElementsByClassName("close")[0];
// When The User clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
// Get the <span> element that rotate the modal image right
var span = document.getElementsByClassName("rot-right")[0];
// When The User clicks on <span> (rot_right), rotate the modal image to the right
span.onclick = function() {
	modal.style.display = "none";
}
// Get the <span> element that rotate the modal image left
var span = document.getElementsByClassName("rot-left")[0];
// When The User clicks on <span> (rot_right), rotate the modal image to the left
span.onclick = function() {
	modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("ImgMD");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
	images [i].onclick = function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		madalImg.alt = this.alt;
		captionText.innerHTML = this.nextElementSibling.innerHTML;
	}
}
