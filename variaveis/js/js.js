function resposta(){
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var linguagem = document.getElementById('linguagem').value;
    
    document.getElementById('dados').innerHTML = "Olá "+nome+", você tem "+idade+" anos e já está aprendendo "+linguagem+"!";
    }