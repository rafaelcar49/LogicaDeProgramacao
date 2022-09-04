// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   var escolha = select.value;

//   if (escolha === 'Front-End') {
//     // para.textContent = 'Você quer aprender React ou aprender Vue?';
//     pergunta1 = prompt('Você quer aprender React ou Vue?');
//     respostaReact = 'React';
//     respostaVue = 'Vue';
//     if (pergunta1 == respostaReact || pergunta1 == respostaVue) {
//       prompt('Voce quer seguir se especializando na área de ' + pergunta1 + ' ou seguir se desenvolvendo para se tornar Fullstack?');
//     } else {
//       alert('Você deve responder React ou Vue obdecendo letras maiúsculas e minúsculas e a resposta não pode ser em branco.');
//     }

//   } else if (escolha === 'Back-End') {
//     // para.textContent = 'Você quer aprender C# ou Java?';
//     pergunta2 = prompt('Você quer aprender C# ou Java?');
//     respostaC = 'C#';
//     respostaJava = 'Java';
//     if (pergunta2 == respostaC || pergunta2 == respostaJava) {
//       prompt('Voce quer seguir se especializando na área de ' + pergunta2 + ' ou seguir se desenvolvendo para se tornar Fullstack?');
//     } else {
//       alert('Você deve responder C# ou Java obdecendo letras maiúsculas e minúsculas e a resposta não pode ser em branco.');
//     }

//   } else {
//     alert('Você não digitou nenhuma resposta.');
//   }
// }
// Flata terminar.

// Abaixo uma maneira melhor de fazer, usando apenas javascript.


const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}

