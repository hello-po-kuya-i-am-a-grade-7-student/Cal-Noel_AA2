var x=1;
while(x<52){
	document.getElementById("footer").innerHTML += "line"+(x);
	x+=2;

}

var z=0;
while(z<51){
	z+=2;
	document.getElementById("footer1").innerHTML += "line"+(z);
}
for (var i = 1; i <4097; i=i*2) {
	document.getElementById("footer2").innerHTML += "line"+(i);
}