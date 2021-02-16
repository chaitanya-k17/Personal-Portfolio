var name="Chaitanya Khiratkar";
var cllg="Third Year Chemical Engineering<br>IIT KHARAGPUR <br>";
var i=0,j=0;

function starting() {
	if(i==20){
		document.getElementById("i-name").innerHTML=name;
		document.getElementById("i-clg").innerHTML=cllg;
		console.log("1");
		clearInterval(Naming);
	}
	else{
		var n=document.getElementById("i-name");
		var x=name.slice(0,i);
		i++;
		n.innerHTML=x+"_";
	}
}

function sliding(x) {
	if(x==1){
		j--;
	}
	if(x==0){
		j++;
	}
	if(j==4){
		j=0;
	}
	if(j<0){
		j=4;
	}
	var img=document.getElementById("images");
	img.src="images/pic"+ (j%4) +".jpeg";
	
}


function Checking() {
	var nav=document.getElementById("nav-p");
}
var Imaging=setInterval(function(){ sliding(0);},5000);
var Naming=setInterval(function(){ starting();},400);


