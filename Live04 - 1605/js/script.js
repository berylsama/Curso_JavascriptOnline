var nomes = ["Sarah", "Bruno", "Julia", "Rafael"];
// quantidade - 1        2        3        4
// posição -   [0]      [1]      [2]      [3]
nomes.push("Heitor");
console.log("Quantidade de nomes é: " + nomes.length);
console.log("Nomes dentro do ARRAY: " + nomes);
console.log("O segundo nome no ARRAY é : " + nomes[1]);

for (i = 0; i < nomes.length; i++) {
  console.log(i + 1 + "º nome na lista: " + nomes[i]);
}

var p = 4;
while (p >= 0) {
  console.log(nomes[p]);
  p--;
}
