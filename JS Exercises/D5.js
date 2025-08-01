/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log(pets);

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];

  console.log(pet);
}
console.log("%===============================%");
/* ESERCIZIO 2
Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

console.log(pets);

console.log("%===============================%");
/* ESERCIZIO 3
Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length - 1; i >= 0; i--) {
  const pet = pets[i];

  console.log(pet);
}
console.log("%===============================%");
/* ESERCIZIO 4
Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let moveEnd = pets.shift(0);

pets.push(moveEnd);

console.log(pets);

console.log("%===============================%");
/* ESERCIZIO 5
Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  let randomPlate = `AB${Math.floor(Math.random() * 1000)}CD`;
  car.LicensePlate = randomPlate;
}
console.log(cars);

console.log("%===============================%");
/* ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newCar = { brand: "Toyota", model: "Yaris", color: "white", trims: ["active", "hybrid", "gr-sport"] };

cars.push(newCar);

console.log(cars);
console.log("%===============================%");

for (let i = 0; i < cars.length; i++) {
  const removeTrim = cars[i];
  removeTrim.trims.pop();
}

console.log(cars);

console.log("%===============================%");
/* ESERCIZIO 7
Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  let extraction = car.trims[0];
  justTrims.push(extraction);
}
console.log(justTrims);

console.log("%===============================%");
/* ESERCIZIO 8
Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
"color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const car = cars[i].color[0];
  if (car === "b") {
    console.log("Fizz!");
  } else if (car !== "b") {
    console.log("Buzz!");
  }
}
console.log("%===============================%");
/* ESERCIZIO 9
Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 32, 31, 2, 8, 23, 100, 66, 313, 321, 105];

let i = 0;
while (i < numericArray.length) {
  console.log(numericArray[i]);
  if (numericArray[i] === 32) {
    break;
  }
  i++;
}

console.log("%===============================%");
/* ESERCIZIO 10
Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
dell'alfabeto italiano.
es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const characterPos = [];

for (let i = 0; i < charactersArray.length; i++) {
  let letterPos;

  switch (charactersArray[i]) {
    case "a":
      letterPos = 1;

      break;
    case "b":
      letterPos = 2;

      break;
    case "c":
      letterPos = 3;

      break;
    case "d":
      letterPos = 4;

      break;
    case "e":
      letterPos = 5;

      break;
    case "f":
      letterPos = 6;

      break;
    case "g":
      letterPos = 7;

      break;
    case "h":
      letterPos = 8;

      break;
    case "i":
      letterPos = 9;

      break;
    case "l":
      letterPos = 10;

      break;
    case "m":
      letterPos = 11;

      break;
    case "n":
      letterPos = 12;

      break;
    case "o":
      letterPos = 13;

      break;
    case "p":
      letterPos = 14;

      break;
    case "q":
      letterPos = 15;

      break;
    case "r":
      letterPos = 16;

      break;
    case "s":
      letterPos = 17;

      break;
    case "t":
      letterPos = 18;

      break;
    case "u":
      letterPos = 19;

      break;
    case "v":
      letterPos = 20;

      break;
    case "z":
      letterPos = 21;

      break;
  }
  characterPos.push(letterPos);
}
console.log(characterPos);

console.log("%===============================%");
