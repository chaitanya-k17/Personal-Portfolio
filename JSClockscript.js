var wakeup,nap,lunch,hours,second;


function formsubmit() {
	wakeup=document.getElementById("waketime").value;
	lunch=document.getElementById("lunch").value;
	nap=document.getElementById("nap").value;
	return true;
}

function changeImg() {
	if(hours==0){
		hours+=24;
	}
	var img=document.getElementById("catsImg");
	if(wakeup==hours){
		img.src="images/wcat.jpg";
	}
	else if(nap==hours){
		img.src="images/scat.jpg";
	}
	else if(lunch==hours){
		img.src="images/lcat.jpg";
	}
	else{
		img.src="images/pcat.jpg";
	}
}

function time(){
		var date = new Date(); 
		hours=date.getHours();
		var time = date.toLocaleTimeString();
		document.getElementById('time').innerHTML = time;
	}
setInterval(function(){ time();changeImg()},1000);