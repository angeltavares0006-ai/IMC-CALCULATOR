document.getElementById('btnCalcular').addEventListener('click', function() {
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var resultado = document.getElementById('resultado');

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = 'Ingresa peso y altura válidos.';
    return;
  }

  var imc = peso / (altura * altura);
  var categoria = '';

  if (imc < 18.5) {
    categoria = 'Bajo peso';
  } else if (imc < 25) {
    categoria = 'Normal';
  } else if (imc < 30) {
    categoria = 'Sobrepeso';
  } else {
    categoria = 'Obesidad';
  }

  var imagen = '';
  if (categoria === 'Bajo peso') imagen = 'img/IMC bajo.png';
  else if (categoria === 'Normal') imagen = 'img/IMC normal.png';
  else if (categoria === 'Sobrepeso') imagen = 'img/IMC sobrepeso.png';
  else imagen = 'img/IMC obesidad.png';

  resultado.innerHTML = 'Tu IMC: ' + imc.toFixed(2) + ' (' + categoria + ')<br>';
  resultado.innerHTML += '<img src="' + imagen + '" alt="' + categoria + '" width="100">';
});
