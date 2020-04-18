var cx = document.getElementById("caixa");
var sd = document.getElementById("saida");
var bt = document.getElementById("btn");

bt.onclick = function() {
  cx.innerHTML = "<h1>Foi adicionada uma imagem a tela!!</h1>";
  sd.innerHTML = "<img src=img/rua.jpg>";
};
