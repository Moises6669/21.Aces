/**
 * 2C = tow of Clubs (treboles)
 * 2D = tow of diamonds (diamantes)
 * 2H = tow of Hearts (corazones)
 * 2s = toe of Spades (Espadas)
 */

let deck = [];

const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

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

const valor = valorCarta("kD");
console.log(valor);
crearDeck();
