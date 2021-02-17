var name="Chaitanya Khiratkar";
var cllg="Third Year Chemical Engineering<br>IIT KHARAGPUR <br>";
var i=0,j=0;

function starting() {
	if(i>=19 && i<23){
		document.getElementById("i-name").innerHTML=name;
		i++;
	}
	else if(i==23){
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
	if(j>3){
		j=0;
	}
	if(j<0){
		j=4;
	}
	var img=document.getElementById("images");
	img.src="images/pic"+ (j%4) +".jpeg";
	
}

var dropdown=false;

function loading() {
	console.log("00099999888888");
	if(!dropdown){
		document.getElementById("main-page").setAttribute("style","visibility: visible;");
		document.getElementById("page").setAttribute("style","overflow-y:scroll;");
		document.getElementById("p-header").setAttribute("style","visibility: visible;");
		document.getElementById("scroller").setAttribute("href","#p");
		document.getElementById("i").setAttribute("style","min-height:500px;");
		document.getElementById("dd-img").setAttribute("src","images/dropup.jpg");
		dropdown=true;
	}
	else{
		document.getElementById("main-page").setAttribute("style","visiblity:hidden;");
		document.getElementById("page").setAttribute("style","overflow-y:hidden;");
		document.getElementById("p-header").setAttribute("style","visibility: hidden;");
		document.getElementById("scroller").setAttribute("href","#");
		document.getElementById("i").setAttribute("style","min-height:1200px;");
		document.getElementById("dd-img").setAttribute("src","images/dropdown.jpg");
		dropdown=false;
	}
}


function Checking() {
	var nav=document.getElementById("nav-p");
}
function Messaging() {
	var x=document.getElementsByClassName("input");
	var y=document.getElementsByClassName("textarea");
	if(x[0]==""){
		alert("Enter e-mail id");
	}
	else if(x[1]==""){
		alert("Enter Message");
	}
	else{
		alert("Your Message has been send");
	}
}
var Imaging=setInterval(function(){ sliding(0);},5000);
var Naming=setInterval(function(){ starting();},200);


