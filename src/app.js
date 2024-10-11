/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import { GenerarValorCarta, GenerarCartaHTML } from "./funciones";

window.onload = function() {
  let valoresCartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    cartasJugador = [],
    cartasComputadora = [],
    simbolos = ["♦", "♥", "♠", "♣"],
    simbolosEspeciales = ["K", "Q"];

  GenerarCartaHTML(GenerarValorCarta(valoresCartas, simbolos));
};
