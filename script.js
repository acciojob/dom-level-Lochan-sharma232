var mymsg=document.getElementById("level");
var level=0;
while(mymsg.parentNode){
	level++;

mymsg=mymsg.parentNode;
}
var display ="The level of the element is"  +level;
alert(display);