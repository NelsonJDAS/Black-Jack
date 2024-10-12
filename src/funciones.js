import { arrow } from "@popperjs/core";

export const botonPedir = document.querySelector(".btn-pedir"),
  botonParar = document.querySelector(".btn-parar"),
  botonReiniciar = document.querySelector(".btn-reiniciar");

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
      : (carta = [`${valorAleatorio}`, `${valorAleatorio}`]);
  return carta;
};

//introducir carta html junto los dos valores de la funcion de generar valor junto a la clase de la carta
export const GenerarCartaHTML = (ValoresCarta, numcarta) => {
  const carta = document.querySelector(`.${numcarta}`);
  carta.innerHTML = ` <div class="row">
                <div
                  class="col-12 contenedor-carta rounded-3 bg-white text-danger"
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
    alert("Has superado de 21");
    DesactivasBotones(botonParar, botonPedir);
  } else if (puntuajeRival > 21) {
    alert("Has ganado la computadora se ha pasado");
    DesactivasBotones(botonParar, botonPedir);
  } else if (puntuajeJugador === 21 && puntuajeRival === 21) {
    alert("Empate");
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
