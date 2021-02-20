var name="Chaitanya Khiratkar";
var cllg="Third Year Chemical Engineering<br>IIT KHARAGPUR <br>";
var i=0;


function starting() {
	console.log(1);
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
var Naming=setInterval(function(){ starting();},200);
