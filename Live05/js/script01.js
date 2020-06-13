function carregar(numeroPagina) {
  var url =
    "https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=" +
    numeroPagina;

  var img = "https://image.tmdb.org/t/p/w500";
  /*
    Para recepcionar e tratar os dados no formato json que vem da url.
    Iremos usar uma estrutura em AJAX -> Assincronum JavaScript XML

    assincrona -> uma tarefa após a oura
    Objeto que iremos utilizar para carregar os dados será o 
    XMLHTTPRequest
    */

  //Vamos passar todas as propriedades de XMLHTTPResquest para a
  //variavel xmlhttp
  var xmlhttp = new XMLHttpRequest();

  /*
    Quando houver a mundaça de estado do conteúdo da variável 
    xmlhttp(onreadystatechange). Nós iremos verificar em qual estado
     ela está. Se for igual a 200, significa que está tudo carregado
    corretamente;
    Caso contrário pode ter havido um erro
    */
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var dados = JSON.parse(this.responseText);

      var filmes = "";
      for (var i = 0; i <= 19; i++) {
        filmes += "<div>";
        filmes += "<img src=" + img + dados.results[i].poster_path + ">";
        filmes += "<h2>" + dados.results[i].title + "</h2>";
        filmes += "<p>" + dados.results[i].overview + "</p>";
        filmes += "</div>";
      }

      document.getElementById("saida").innerHTML = filmes;

      console.log(dados);
    } else {
      console.log("Erro ao tentar carregar os dados");
    }
  };
  xmlhttp.open("GET", url, true);
  //Executar toda a estrutura do código acima
  xmlhttp.send();
}

window.onload = function() {
  for (var p = 1; p <= 20; p++) {
    document.getElementById("paginas").innerHTML +=
      "<a href=# onclick='carregar(" + p + ")'>" + p + "</a>";
  }

  this.carregar(1);
};
