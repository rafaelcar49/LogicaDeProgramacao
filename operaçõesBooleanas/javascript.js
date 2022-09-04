function numero() {
  var numeroUm = document.getElementById('numeroUm').value;
  var stringUm = document.getElementById('stringUm').value;
  var numeroTrinta = document.getElementById('numeroTrinta').value;
  var stringTrinta = document.getElementById('stringTrinta').value;
  var numeroDez = document.getElementById('numeroDez').value;
  var stringDez = document.getElementById('stringDez').value;

  numeroUm = prompt("Digite o número 1: ");
  stringUm = prompt("Digite a string 1: ");
  numeroTrinta = prompt("Digite o número 30: ");
  stringTrinta = prompt("Digite a string 30: ");
  numeroDez = prompt("Digite o número 10: ");
  stringDez = prompt("Digite a string 10: ");

  if (numeroUm == stringUm) {
    alert('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } else {
    alert('As variáveis numeroUm e stringUm não tem o mesmo valor')
  };

  if (numeroTrinta === stringTrinta) {
    alert('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    alert('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  };

  if (numeroDez == stringDez) {
    alert('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    alert('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }
}