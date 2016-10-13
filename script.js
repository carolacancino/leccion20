// tu codigo va aca
function callbackPromedio(a,b,c,callback){
	var prom = (a+b+c)/3;
	return callback(prom);
}

var tiempo = 1;

function segundero(){
	
	document.getElementById("titulo").innerHTML = tiempo;
	tiempo++;
}
setInterval(segundero,800);

