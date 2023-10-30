function clickMe(){
console.log('open a new window');
alert('click for more options');


const element = document.getElementById("pTagId");
document.getElementById("pTagId2").innerHTML = 'here is change' + element.innerHTML;

const ele2 = document.getElementsByTagName('p');
document.getElementById('pTagId2').innerHTML = 'some' + ele2[0].innerHTML;

const ele3 = document.getElementsByClassName('yourClassName');
document.getElementById('pTagId2').innerHTML = 'some' + ele3[0].innerHTML;
}