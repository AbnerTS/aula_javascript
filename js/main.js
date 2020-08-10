function clicou(){
  //alert("Obrigado por clicar");
  document.getElementById("agradecimento").innerHTML = "<b>Novo título</b>"; //Injeta texto ou html na página

}

function redirecionar(){
  window.open("https://www.google.com"); //Abre o link numa nova janela
  //window.location.href = "https://www.google.com"; //Abre o link na mesma janela
}

function trocar(){
  document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){
  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function trocarThis(elemento){
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltarThis(elemento){
  elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("Página Carregada")
}

function change(elemento){
  console.log(elemento.value);
}

/*
var nome = "Abner Teodoro de Souza";
var idade = 25;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!"
//alert(nome + " tem " + idade + " anos")
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(idade*idade2);
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

//Trabalhando com Array
var lista = ["maça","pêra","laranja"];
console.log(lista);
lista.push("uva"); //Adiciona mais um item a lista
console.log(lista[1]);
console.log(lista);
lista.pop(); //Remove o ultimo item da lista
console.log(lista);
console.log("A lista tem " + lista.length + " elementos."); //Qtde de elementos da lista
console.log(lista.reverse()); //Trás os elementos ao contrário da lista.
console.log(lista.toString()); //Retorna os elementos em string.
console.log(lista.join(" | ")); //Substitui o caracter de separação da lista 
//-----------------------------
//Trabalhando com dicionário
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
//----------------------------
//Trabalhando com lista de dicionário
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
//----------------------------
//Condicionais
var idade = 18;
//var idade = prompt("Qual sua idade?");

if(idade >= 18){
  console.log("Maior de idade"+"ioo"+"");
  //alert("Maior de idade")
} else {
  console.log("Menor de idade");
  //alert("Menor de idade")
}
//-----------------------------
//Laços
var count = 0;
while (count <= 5)
{
  console.log(count);
  count ++;
}

var c;
for(c = 0; c <=5; c++)
{
  console.log(c);
}
//_____________________________
//Trabalhando com data
var d = new Date();
console.log(d);

console.log(d.getMonth()+1);
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getDate());
console.log(d.getDate() + "/" + (d.getMonth()+1));

function soma(n1, n2)
{
  return n1+n2;
}

//alert(soma(5,10));

function setReplace(frase, nome, novo_nome)
{
  return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

var validar = 0;
function validarIdade(idade)
{
  if(idade >= 18)
  {
    validar = true;
  }
  else
  {validar = false;}
  return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));
*/