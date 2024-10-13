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
  RestringirPuntuajeUsuario,
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
    // generamos el valor de la carta
    let cartaJugador = GenerarValorCarta(valoresCartas, simbolos);

    // generamos el html de la carta
    GenerarCartaHTML(cartaJugador, `carta-${NumCartaHtmlJugador}`);
    //
    // insertamos los valores en un array para consultar el puntuaje
    CartasJugador.push(`${ConseguirValorCarta(cartaJugador)}`);

    // sumamos uno para que el htlm tome como referencia la carta de al lado
    NumCartaHtmlJugador += 1;

    PuntuajeJugaHTML.textContent = `${ConsultarPuntuaje(CartasJugador)}`;

    // consultamos si hemos ganado o perdido
    RestringirPuntuajeUsuario(
      ConvertirStringANumber(PuntuajeJugaHTML.textContent)
    );
  });

  botonParar.addEventListener("click", () => {
    //agregamos una condicion para realizar un bucle
    while (ConsultarPuntuaje(CartasJugador) > ConsultarPuntuaje(CartasRival)) {
      //creamos la carta
      let cartaRival = GenerarValorCarta(valoresCartas, simbolos);

      //generamos el html
      GenerarCartaHTML(cartaRival, `computadora-carta-${NumCartaHtmlRival}`);
      CartasRival.push(ConseguirValorCarta(cartaRival));

      // consultamos las condiciones de la computadora
      TurnoComputadora(
        CartasRival,
        ConsultarPuntuaje(CartasJugador),
        ConsultarPuntuaje(CartasRival)
      );

      console.log(
        ConsultarPuntuaje(CartasRival),
        ConsultarPuntuaje(CartasJugador)
      );
      PuntuajeRivaHTML.textContent = `${ConsultarPuntuaje(CartasRival)}`;
      NumCartaHtmlRival += 1;
    }
  });

  botonReiniciar.addEventListener("click", () => {
    location.reload();
  });
};
