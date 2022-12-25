const nome = "Mateus Oliveira";
let nome2 = "";
let pessoaDefault = {
    nome: "Mateus Oliveira",
    idade: "25",
    trabalho: "Pintor"
}

let nomes = ["Mateus oliveira", "Maria Silva", "Pedro Silva"];

let pessoas = [
    {
        nome: "Mateus Oliveira",
        idade: "25",
        trabalho: "Pintor"
    },
    {
        nome: "Maria SiLva",
        idade: "26",
        trabalho: "Cantora"
    }   
];


function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:")
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2= novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("--------IMPRIMIR PESSOAS--------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);
    
        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho);
       
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
   // nome: "Maria Silva ",
   // idade: "26",
   // trabalho: "Cantora"
//});


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();