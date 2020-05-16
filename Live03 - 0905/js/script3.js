//while - teste antes de executar qualquer operação, se ou não permite executar..
//do-while -  executa o problema e vê se pode continuar executando;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function() {
  var x = 0;

  while (x < 10) {
    console.log(x);
    x++;
  }
};

btn2.onclick = function() {
  var x = 0;

  do {
    console.log(x);
    x++;
  } while (x < 10);
};
