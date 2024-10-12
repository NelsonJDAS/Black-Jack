import { arrow } from "@popperjs/core";

export const botonPedir = document.querySelector(".btn-pedir"),
  botonParar = document.querySelector(".btn-parar"),
  botonReiniciar = document.querySelector(".btn-reiniciar"),
  alertaGenerada = document.querySelector(".alerta"),
  PuntuajeJugaHTML = document.querySelector(".puntuaje-j"),
  PuntuajeRivaHTML = document.querySelector(".puntuaje-r");

// numero aleatorio
export const ConvertirStringANumber = string => {
  return parseInt(string, 10);
};

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

//introducir carta html junto los dos valores de la funcion de generar valor junto a la clase de la carta
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

export const DesactivasBotones = (btnParar, botonPedir) => {
  btnParar.disabled = true;
  botonPedir.disabled = true;
};

export const ElegirGanador = (puntuajeJugador, puntuajeRival) => {
  if (puntuajeJugador > 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-danger text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">PERDISTES</p>
                <p>Te pasastes de 21</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  } else if (puntuajeJugador === 21 && puntuajeRival != 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-success text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">BLACKJACK!</p>
                <p>Tienes mucha suerte</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  } else if (puntuajeRival === 21 && puntuajeJugador != 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-danger text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">PERDISTES</p>
                <p>No es tu dia, te han sacado blackjack</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  } else if (puntuajeRival > 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-success text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">GANASTES</p>
                <p>La maquita se paso de 21</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  } else if (puntuajeJugador === 21 && puntuajeRival === 21) {
    alertaGenerada.innerHTML = `
    <div
                class="alert alert-warning text-center fw-bold w-100"
                role="alert"
              >
                <p class="fs-3">EMPATE</p>
                <p>Los dos sacaron 21 WOW</p>
              </div>`;
    DesactivasBotones(botonParar, botonPedir);
  }
};

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

// export const TurnoComputadora = () => {
//   for (let i = 0; i < 5; i++) {
//     if (
//       ConvertirStringANumber(PuntuajeRivaHTML.textContent) >
//       ConvertirStringANumber(PuntuajeRivaHTML.textContent) && < 21
//     ) {
//       alertaGenerada.innerHTML = `
//       <div
//                   class="alert alert-warning text-center fw-bold w-100"
//                   role="alert"
//                 >
//                   <p class="fs-3">EMPATE</p>
//                   <p>Los dos sacaron 21 WOW</p>
//                 </div>`;
//       DesactivasBotones(botonParar, botonPedir);
//     } else if (ConvertirStringANumber(PuntuajeRivaHTML.textContent) > 21) {
//       alertaGenerada.innerHTML = `
//       <div
//                   class="alert alert-warning text-center fw-bold w-100"
//                   role="alert"
//                 >
//                   <p class="fs-3">EMPATE</p>
//                   <p>Los dos sacaron 21 WOW</p>
//                 </div>`;
//     }
//   }
// };
