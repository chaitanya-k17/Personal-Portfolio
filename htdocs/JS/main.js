var name="Chaitanya Khiratkar";
var cllg="Third Year Chemical Engineering<br>IIT KHARAGPUR <br>";
var i=0,j=0;

console.log("1");
function starting() {
	if(i>=19 && i<23){
		document.getElementById("i-name").innerHTML=name;
		i++;
	}
	else if(i==23){
		document.getElementById("i-clg").innerHTML=cllg;
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
		j++;
	}
	else if(x==0){
		j--;
	}

	if(j>3){
		j=0;
	}
	if(j<0){
		j=4;
	}
		var img=document.getElementById("image0");
		img.src="Images/pic"+ (j%4) +".jpeg";
		var img=document.getElementById("image1");
		img.src="Images/pic"+ ((j+1)%4) +".jpeg";
		var img=document.getElementById("image2");
		img.src="Images/pic"+ ((j+2)%4) +".jpeg";
}

var Naming=setInterval(function(){ starting();},200);
