const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const contador = document.querySelector(".numero");

function inicia() {
  for (let a = 0; a < 26; a++) {
    setTimeout(() => {
      orange.classList.toggle("ativo-o");
    }, 1000 * a);
  }
  clearTimeout();
}
inicia();

function semaforo() {
  green.classList.add("ativo-g");

  for (let j = 10; j >= 0; j--) {
    setTimeout(() => {
      if (j === 0) {
        contador.innerHTML = "--";
      } else {
        contador.innerHTML = j;
      }
    }, 1000 * (10 - j));
  }

  setTimeout(() => {
    green.classList.remove("ativo-g");
    orange.classList.add("ativo-o");
  }, 10000);

  setTimeout(() => {
    orange.classList.remove("ativo-o");
    red.classList.add("ativo-r");
    for (let i = 15; i >= 1; i--) {
      setTimeout(() => {
        contador.innerHTML = i;
      }, 1000 * (15 - i));
    }
  }, 11000);

  setTimeout(() => {
    red.classList.remove("ativo-r");
  }, 26000);
}
const contarIntervalo = setInterval(() => {
  semaforo();
}, 26000);

