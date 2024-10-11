import { arrow } from "@popperjs/core";

const NumeroAleatorio = arr => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return randomNumber;
};

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

export const GenerarCartaHTML = arr => {
  const cartas = document.querySelectorAll(".carta");

  cartas.forEach(function(carta) {
    carta.innerHTML = ` <div class="row">
                <div
                  class="col-12 contenedor-carta rounded-3 bg-white text-danger"
                >
                  <div class="row">
                    <div class="col-12">
                      <span class="fw-bold">${arr[1]}</span>
                    </div>
                  </div>
                  <div class="row contenedorNumero">
                    <div class="col-12">${arr[0]}</div>
                  </div>
                  <div class="row">
                    <div class="col-12 icono-abajo">
                      <span class="fw-bold">${arr[1]}</span>
                    </div>
                  </div>
                </div>
              </div>`;
  });
};
