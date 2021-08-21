/**
 * 2C = tow of Clubs (treboles)
 * 2D = tow of diamonds (diamantes)
 * 2H = tow of Hearts (corazones)
 * 2s = toe of Spades (Espadas)
 */

let deck = [];

const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

//referencias HTML
const btnPedir = document.querySelector("#btnPedir");
const btnNuevo = document.querySelector("#btnNuevo");
const btnDetener = document.querySelector("#btnDetener");

const divCartasJugador = document.querySelector("#jugador-cartas");

let small = document.querySelectorAll("small");

//puntos jugador
let puntosjugador = 0,
  puntosComputadora = 0;

/**Crea una nueva baraja */
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (const tipo of tipos) {
    for (const especial of especiales) {
      deck.push(especial + tipo);
    }
  }

  deck = _.shuffle(deck);

  console.log(deck);
};

/**Funcion para pedir carta */
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
crearDeck();
//Eventos
btnPedir.addEventListener("click", (e) => {
  const carta = pedirCarta();
  puntosjugador = puntosjugador + valorCarta(carta);
  small[0].innerText = puntosjugador;

  const imgCarta = document.createElement("img");
  imgCarta.classList.add("carta");
  imgCarta.src = `assets/img/cartas/${carta}.png`;
  divCartasJugador.append(imgCarta);

  if (puntosjugador > 21) {
    console.warn("lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnPedir.style.backgroundColor = "#6d6875";
    btnPedir.style.borderColor = "#6d6875";
  } else if (puntosjugador === 21) {
    console.warn("21,genial!");
  }
});
