/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import {
  GenerarValorCarta,
  GenerarCartaHTML,
  ConseguirValorCarta,
  ConsultarPuntuaje,
  DesactivasBotones,
  ElegirGanador,
  botonParar,
  botonPedir,
  ConvertirStringANumber,
  TurnoComputadora,
  PuntuajeJugaHTML,
  PuntuajeRivaHTML,
  botonReiniciar
} from "./funciones";

window.onload = function() {
  let valoresCartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    simbolos = ["♦", "♥", "♠", "♣"],
    NumCartaHtmlJugador = 1,
    NumCartaHtmlRival = 2,
    CartasJugador = [],
    CartasRival = [],
    PrimeraCartaRival = GenerarValorCarta(valoresCartas, simbolos);

  // Generamos la primera carta

  GenerarCartaHTML(PrimeraCartaRival, `computadora-carta-1`);
  CartasRival.push(`${ConseguirValorCarta(PrimeraCartaRival)}`);
  PuntuajeRivaHTML.textContent = `${ConsultarPuntuaje(CartasRival)}`;

  // Boton para pedir carta
  botonPedir.addEventListener("click", () => {
    // generamos los valores de las cartas
    let cartaJugador = GenerarValorCarta(valoresCartas, simbolos);

    // generamos el html de cada carta
    GenerarCartaHTML(cartaJugador, `carta-${NumCartaHtmlJugador}`);
    //
    // insertamos los valores en un array para consultar el puntuaje
    CartasJugador.push(`${ConseguirValorCarta(cartaJugador)}`);
    console.log(CartasJugador);
    // CartasRival.push(`${ConseguirValorCarta(cartaRival)}`);
    console.log(CartasRival);

    // sumamos uno para que el htlm tome como referencia la carta de al lado
    NumCartaHtmlJugador += 1;

    PuntuajeJugaHTML.textContent = `${ConsultarPuntuaje(CartasJugador)}`;

    ElegirGanador(
      ConvertirStringANumber(PuntuajeJugaHTML.textContent),
      ConvertirStringANumber(PuntuajeRivaHTML.textContent)
    );
  });

  botonParar.addEventListener("click", () => {
    let cartaRival = GenerarValorCarta(valoresCartas, simbolos);

    GenerarCartaHTML(cartaRival, `computadora-carta-${NumCartaHtmlRival}`);

    CartasRival.push(`${ConseguirValorCarta(cartaRival)}`);
    TurnoComputadora();

    PuntuajeRivaHTML.textContent = `${ConsultarPuntuaje(CartasRival)}`;
    NumCartaHtmlRival += 1;
  });

  botonReiniciar.addEventListener("click", () => {
    location.reload();
  });
};
