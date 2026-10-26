/*
var - Permite que o valor seja atualizado em qualquer momento do código.
let - Permite que o valor altere somente quando está fora de um bloco de código. 
const - Não permite que o valor seja alterado.

var nome = "Ana";
var idade = 17; 
// Tudo que é uma STRING (TEXTO) precisa de aspas. Número não precisa. //

console.log(nome); //Testa se o código está funcionando //
console.log(idade);

{ // Dentro de chaves "{}" é um bloco de código //
let nome = "Jonatas";
let idade = 30;

console.log(nome);
console.log(idade);
}

console.log(nome);

let curso ="";
console.log(curso);
*/

function cadastrar(){
    let nome = document.getElementById("nome").value; //"value" atribui o valor do ID//
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;

    if(nome == "" || idade == "" || curso == "" ) {
    alert("Cadastro Inválido 😕");    
    }
    else{
    alert("Cadastro realizado com sucesso! 🙃")
    document.getElementById("resultado").innerHTML = 
    "Nome do(a) aluno(a) é " + nome + "<br> Idade: " + idade + " anos" + "<br> Curso: " + curso;

    document.querySelector(".descricao").textContent = "Informações do Aluno:";

    //display e none = serve para ocultar um elemento HTML.//
    document.getElementById("nome").style.display = "none";
    document.getElementById("idade").style.display = "none";
    document.getElementById("curso").style.display = "none";
    document.getElementById("cadastro").style.display = "none";

    //dsiplay = block: serve para exibir um elemento HTML.//
    document.getElementById("resultado").style.display = "block";
    document.getElementById("novoAluno").style.display = "block";
    }
}

function novoAluno(){
    document.getElementById("nome").style.display = "block";
    document.getElementById("idade").style.display = "block";
    document.getElementById("curso").style.display = "block";
    document.getElementById("cadastro").style.display = "block";

    document.getElementById("resultado").style.display = "none";
    document.getElementById("novoAluno").style.display = "none";

    document.querySelector(".descricao").textContent = "Preencha os dados abaixo:";

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("curso").value = "";

}

/* || = ou
alert = usado para dar um aviso para o usuário em uma caixa do navegador

if (se)= caso seja verdadeira a condição
else (senão)= caso seja falsa a condição

= sinal de atribuição de valor
== sinal de comparação entre dois valores ou elementos

+ concatenar (juntar informações)
*/
