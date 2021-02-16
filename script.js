var i=0;

function sliding(argument) {
	var img=document.getElementById("myImages");
	img.src="images/pic"+ (i%2) +".jpg";
	var img1=document.getElementById("myImages1");
	img1.src="images/pics"+ (i%2) +".jpeg";
	i++;
}
function Checking() {
	var nav=document.getElementById("nav-p");
}
setInterval(function(){ sliding();},1500);