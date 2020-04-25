var placa = document.getElementById("placa");
var btn = document.getElementById("verifica");

btn.onclick = function() {
  var ult = placa.value.substring(6, 7); //Posição,Caractere
  console.log(ult);
  switch (ult) {
    case "1":
      alert("Este veículo não pode rodar nas segundas...");
      break;
    case "2":
      alert("Este veículo não pode rodar nas segundas...");
      break;
    case "3":
      alert("Este veículo não pode rodar nas terças...");
      break;
    case "4":
      alert("Este veículo não pode rodar nas terças...");
      break;
    case "5":
      alert("Este veículo não pode rodar nas quartas...");
      break;
    case "6":
      alert("Este veículo não pode rodar nas quartas...");
      break;
    case "7":
      alert("Este veículo não pode rodar nas quintas...");
      break;
    case "8":
      alert("Este veículo não pode rodar nas quintas...");
      break;
    case "9":
      alert("Este veículo não pode rodar nas sextas...");
      break;
    case "0":
      alert("Este veículo não pode rodar nas sextas...");
      break;
    default:
      alert("Este final de placa não existe...");
      break;
  }
};
