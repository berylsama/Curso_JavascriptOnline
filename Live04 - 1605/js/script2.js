function soma(n1, n2) {
  console.log(n1 + n2);
}

function somaGeral(numeros) {
  var rs = 0;
  for (x = 0; x < numeros.length; x++) {
    rs += numeros[x];
  }
  return rs;
}

document.getElementById("btn").onclick = function() {
  var valores = [10, 13, 20];
  console.log(somaGeral(valores));
};
var rs = function(a, b) {
  return a / b;
};
console.log(rs(10, 40));
