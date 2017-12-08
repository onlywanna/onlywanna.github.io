document.querySelector('p').onclick=function() {
alert('ouch! Stop poking me!');}


var myImage=document.querySelector('img');
myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if (mySrc==='images/firefox.png') {
		myImage.setAttribute('src','images/firefox3.png');
	}
	else{
		myImage.setAttribute('src','images/firefox.png');
	}
}



var myHeading=document.querySelector('h1');
var myButton=document.querySelector('button');
function setUserName(){
	var myName=prompt('Please enter your name.')
	localStorage.setItem('name',myName);
	myHeading.innerHTML="this page is cool,"+myName;
}
if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML='this page is cool'+storedName;
}
myButton.onclick=function(){
	setUserName();
}