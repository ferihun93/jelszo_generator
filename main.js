import { betuk } from "./karakterek.js";
import { specialisKarakterek } from "./karakterek.js";

const kertkarakterSzam = document.getElementById("karakter-szam");
const kiirtJelszo = document.getElementById("jelszo");
const betukSzama = document.getElementById("betuk-szama");
const specialKarakterekSzama = document.getElementById("speckarakterek-szama");

let kezdoKarakterekSzama = 0;
let kezdoBetukSzama = 0;
let kezdoSpeckarakterekSzama = 0;
let jelszoKarakterek = [];

const randomSzamGeneralo = function () {
  while (kezdoKarakterekSzama < kertkarakterSzam.value) {
    const randomSzam = Math.floor(Math.random() * 9 + 1);
    jelszoKarakterek.push(randomSzam);
    kezdoKarakterekSzama++;
  }
  tombFeltoltes();
};

const randomBetukGeneralo = function () {
  while (kezdoBetukSzama < betukSzama.value) {
    const randomIndex = Math.floor(Math.random() * betuk.length);
    const randomBetuk = betuk[randomIndex];
    jelszoKarakterek.push(randomBetuk);
    kezdoBetukSzama++;
  }
};

const randomSpecialisKarakterGeneralo = function () {
  while (kezdoSpeckarakterekSzama < specialKarakterekSzama.value) {
    const randomIndex = Math.floor(Math.random() * specialisKarakterek.length);
    const randomSpecBetuk = specialisKarakterek[randomIndex];
    jelszoKarakterek.push(randomSpecBetuk);
    kezdoSpeckarakterekSzama++;
  }
};

const jelszoRandomizalo = function () {
  for (let i = jelszoKarakterek.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [jelszoKarakterek[i], jelszoKarakterek[randomIndex]] = [
      jelszoKarakterek[randomIndex],
      jelszoKarakterek[i],
    ];
  }
};

const tombFeltoltes = function () {
  randomBetukGeneralo();
  randomSpecialisKarakterGeneralo();
  jelszoRandomizalo();
  let ujJelszo = jelszoKarakterek.join("");
  kiirtJelszo.value = ujJelszo;
};

const reset = function () {
  kezdoKarakterekSzama = 0;
  kezdoBetukSzama = 0;
  kezdoSpeckarakterekSzama = 0;
  jelszoKarakterek = [];
  kiirtJelszo.value = "";
};

document
  .getElementById("jelszo-generalo")
  .addEventListener("click", function () {
    reset();
    randomSzamGeneralo();
  });
