import { arrow } from "@popperjs/core";

//referencias html

export const botonPedir = document.querySelector(".btn-pedir"),
  botonParar = document.querySelector(".btn-parar"),
  botonReiniciar = document.querySelector(".btn-reiniciar"),
  alertaGenerada = document.querySelector(".alerta"),
  PuntuajeJugaHTML = document.querySelector(".puntuaje-j"),
  PuntuajeRivaHTML = document.querySelector(".puntuaje-r");

// funcion para convertir string a number
export const ConvertirStringANumber = string => {
  return parseInt(string, 10);
};

// numero aleatorio
const NumeroAleatorio = arr => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return randomNumber;
};

// generar el valor y el simbolo de la carta
export const GenerarValorCarta = (valores, simbolos) => {
  let valorAleatorio = valores[NumeroAleatorio(valores)];

  let carta =
    typeof valorAleatorio === "number"
      ? (carta = [
          `${valorAleatorio}`,
          `${simbolos[NumeroAleatorio(simbolos)]}`
        ])
      : (carta = [
          `${valorAleatorio}`,
          `${simbolos[NumeroAleatorio(simbolos)]}`
        ]);
  return carta;
};

//introducir carta html junto los dos valores de la funcion de generar valor junto a la clase que da la referencia html a la carta
export const GenerarCartaHTML = (ValoresCarta, numcarta) => {
  const color =
    ValoresCarta[1] != "♣" && ValoresCarta[1] != "♠"
      ? "text-danger"
      : "text-dark";

  const carta = document.querySelector(`.${numcarta}`);
  carta.innerHTML = ` <div class="row">
                <div
                  class="col-12 contenedor-carta rounded-3 bg-white ${color}"
                >
                  <div class="row">
                    <div class="col-12">
                      <span class="fw-bold">${ValoresCarta[1]}</span>
                    </div>
                  </div>
                  <div class="row contenedorNumero">
                    <div class="col-12">${ValoresCarta[0]}</div>
                  </div>
                  <div class="row">
                    <div class="col-12 icono-abajo">
                      <span class="fw-bold">${ValoresCarta[1]}</span>
                    </div>
                  </div>
                </div>
              </div>`;
};

// funcion para sacar el valor de cada carta
export const ConseguirValorCarta = arr => {
  if (arr[0] > 0) {
    return arr[0];
  } else if (arr[0] === "K") {
    return 10;
  } else if (arr[0] === "J") {
    return 10;
  } else if (arr[0] === "Q") {
    return 10;
  } else {
    return "A";
  }
};

// funcion para desactivar los botones menos el de actualizar pagina
export const DesactivasBotones = () => {
  botonPedir.disabled = true;
  botonParar.disabled = true;
};

//funcion para ver si el usuario se ha perdido
export const RestringirPuntuajeUsuario = puntuajeJugador => {
  if (puntuajeJugador > 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-danger text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">PERDISTES</p>
                <p>Te pasastes de 21</p>
              </div>`;
    DesactivasBotones();
  }
};

// verficar el puntuaje de cada jugador

export const ConsultarPuntuaje = arr => {
  let letra = "";
  let puntuaje = 0;
  for (let i = 0; i < arr.length; i++) {
    let tipo =
      arr[i] === "A"
        ? (letra = arr[i] + letra)
        : (puntuaje += ConvertirStringANumber(arr[i]));
  }

  return puntuaje;
};

//turno de la computadora que se ejecuta al quedarte con las cartas ya dadas

export const TurnoComputadora = (arrComputadora, PuntuajeJug, PuntuajeRiv) => {
  if (PuntuajeRiv > PuntuajeJug && PuntuajeRiv <= 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-danger text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">Perdistes</p>
                <p>Han sacado mejor puntuaje que tu</p>
              </div>`;
    DesactivasBotones();
  } else if (PuntuajeJug === 21 && PuntuajeRiv === 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-warning text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">Empate</p>
                <p>Te ha empatado con un blackjack</p>
              </div>`;
    DesactivasBotones();
  } else if (PuntuajeRiv > 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-success text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">Ganastes</p>
                <p>La maquina se ha pasado</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  } else if (PuntuajeJug === 21 && PuntuajeRiv > 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-success text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">Ganastes con BlackJack!</p>
                <p>Has tenido mucha suerte</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  } else if (PuntuajeJug === 21 && PuntuajeRiv === 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-warning text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3"> Empate </p>
                <p>Por una vez que tienes suerte y te empatan :(</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  }
};
