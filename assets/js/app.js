/**
 * 2C = tow of Clubs (treboles)
 * 2D = tow of diamonds (diamantes)
 * 2H = tow of Hearts (corazones)
 * 2s = toe of Spades (Espadas)
 */

let deck = [];

const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

//puntos jugador
let puntosjugador = 0,
  puntosComputadora = 0;

//referencias HTML
const btnPedir = document.querySelector("#btnPedir");
const btnNuevo = document.querySelector("#btnNuevo");
const btnDetener = document.querySelector("#btnDetener");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

let small = document.querySelectorAll("small");



/**Crea una nueva baraja */
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let especial of especiales) {
      deck.push(especial + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};

crearDeck();

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

const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    small[1].innerText = puntosComputadora;

    const imgCarta = document.createElement("img");
    imgCarta.classList.add("carta");
    imgCarta.src = `assets/img/cartas/${carta}.png`;
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie Gana");
    } else if (puntosMinimos > 21) {
      alert("la computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    }else{
      alert('Computadora gana')
    }
  }, 10);
};


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
    btnDetener.disabled = true;
    btnPedir.style.backgroundColor = "#6d6875";
    btnPedir.style.borderColor = "#6d6875";
    turnoComputadora(puntosjugador);
  } else if (puntosjugador === 21) {
    console.warn("21,genial!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosjugador);
  }
});




btnDetener.addEventListener("click", (e) => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosjugador);
});

btnNuevo.addEventListener("click",(e)=>{ 
  console.clear();
  deck = [];
  deck = crearDeck();
  puntosjugador = 0;
  puntosComputadora = 0;
  small[0].innerText = 0;
  small[1].innerText = 0;
  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';
  btnPedir.disabled = false;
  btnDetener.disabled = false;
})
 