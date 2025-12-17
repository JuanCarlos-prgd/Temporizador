// Contador de 60 segundos en pantalla con inicio manual
const countdownEl = document.getElementById("countdown");
const btnIniciar = document.getElementById("btn-iniciar");
const mensajeDeAlertaEl = document.getElementById("mensaje-final");
const coheteEl = document.getElementById("cohete");
const fuegoEl = document.getElementById("fuego");
const humoEl = document.getElementById("humo");
const segundosInput = document.getElementById("segundos");

let tiempo = 60;
let intervalo;

function actualizarColor() {
  countdownEl.classList.remove("verde", "amarillo", "rojo");
  if (tiempo > 40) countdownEl.classList.add("verde");
  else if (tiempo > 20) countdownEl.classList.add("amarillo");
  else countdownEl.classList.add("rojo");
}

function reiniciarEstado() {
  tiempo = 60;
  countdownEl.textContent = tiempo;
  countdownEl.classList.remove("verde", "amarillo", "rojo");
  mensajeDeAlertaEl.textContent = "";   
  segundosInput.value = 60;

  coheteEl.classList.remove("lanzar");
  fuegoEl.classList.remove("fuego-activo");
  humoEl.classList.remove("humo-activo");
}

function iniciarCuenta() {
  let valor = parseInt(segundosInput.value);

  if (valor > 60) {
    mensajeDeAlertaEl.textContent = "⚠️ Haz excedido el límite permitido. Máximo 60 segundos.";
    return;
  }

  tiempo = valor;
  countdownEl.textContent = tiempo;
  mensajeDeAlertaEl.textContent = ""; 
  actualizarColor();

  clearInterval(intervalo);

  intervalo = setInterval(() => {
    tiempo--;
    countdownEl.textContent = tiempo;
    actualizarColor();

    if (tiempo <= 0) {
      clearInterval(intervalo);
      mensajeDeAlertaEl.textContent = "🚀 ¡Cohete lanzado con éxito!";  
      countdownEl.textContent = "0";

      coheteEl.classList.add("lanzar");
      fuegoEl.classList.add("fuego-activo");
      humoEl.classList.add("humo-activo");

      setTimeout(() => {
        reiniciarEstado();
      }, 3000);
    }
  }, 1000);
}
btnIniciar.addEventListener("click", iniciarCuenta);

