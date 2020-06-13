var nomes = ["Sarah", "Bruno", "Julia", "Rafael"];
// quantidade - 1        2        3        4
// posição -   [0]      [1]      [2]      [3]
nomes.push("Heitor");
console.log("Quantidade de nomes é: " + nomes.length);
console.log("Nomes dentro do ARRAY: " + nomes);
console.log("O segundo nome no ARRAY é : " + nomes[1]);

console.log("");
for (i = 0; i < nomes.length; i++) {
  console.log(i + 1 + "º nome na lista: " + nomes[i]);
}

console.log("");
var p = 4;
while (p >= 0) {
  console.log(nomes[p]);
  p--;
}

console.log("");
console.log("Exibir dados com o Do + While");
var s = 0;
do {
  console.log(nomes[s]);
  s++;
} while (s < nomes.length);

console.log("");
console.log("Abaixo os nomes com ForEach");
//O foreach utiliza uma estrutura de função para fazer a sua
//execução de leitura do array
nomes.forEach(function(valor, e) {
  console.log(valor + " está na posição " + e);
});

console.log("");
console.log("Abaixo os nomes com Map");
nomes.map((valor, e) => {
  console.log(valor + " está na posição " + e);
});
