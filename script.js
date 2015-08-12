function sumOfCubes(a){
	return a*a*a + a*a*a;
}

function multiplyNum(a){
	return a*a;		
}

function divideNum(a) {
	return a/a;

}
function total(a) {
	return sumOfCubes(a)*multiplyNum(a)*divideNum(a);
}

var a = Number(prompt("Pick a number", ""));
alert ("After a bunch of very complicated calculations on your number \"" +a+ "\" we get "+total(a)+".");