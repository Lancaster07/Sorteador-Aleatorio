const sortearBotao = document.querySelector("button");

function numeroSorteado() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  const visual = document.querySelector("p");

  if (min >= max) {
    alert("O número mínimo deve ser menor que o número máximo.");
  } else {
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    visual.innerHTML = resultado;
  }
}

sortearBotao.addEventListener("click", numeroSorteado);
