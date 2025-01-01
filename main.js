import { betuk } from "./karakterek.js";
import { specialisKarakterek } from "./karakterek.js";

const kertSzamKarakterekSzama = document.getElementById("karakter-szam");
const kiirtJelszo = document.getElementById("jelszo");
const kertBetuKarakterekSzama = document.getElementById("betuk-szama");
const kertSpecialisKarakterekSzama = document.getElementById(
  "speckarakterek-szama"
);
const kertRandomJelszoKarakterekSzama = document.querySelector(
  "#random-jelszo-karakterek"
);

// let jelszoKarakterekTomb = [];

const valtozok = {
  jelszoKarakterekTomb: [],
};

const randomSzamGeneralo = function () {
  let kezdoErtek = 0;
  while (kezdoErtek < kertSzamKarakterekSzama.value) {
    const randomSzam = Math.floor(Math.random() * 9 + 1);
    valtozok.jelszoKarakterekTomb.push(randomSzam);
    kezdoErtek++;
  }
};

const randomBetuGeneralo = function () {
  let kezdoErtek = 0;
  while (kezdoErtek < kertBetuKarakterekSzama.value) {
    const randomIndex = Math.floor(Math.random() * betuk.length);
    const randomBetuk = betuk[randomIndex];
    valtozok.jelszoKarakterekTomb.push(randomBetuk);
    kezdoErtek++;
  }
};

const randomSpecialisKarakterGeneralo = function () {
  let kezdoErtek = 0;
  while (kezdoErtek < kertSpecialisKarakterekSzama.value) {
    const randomIndex = Math.floor(Math.random() * specialisKarakterek.length);
    const randomSpecBetuk = specialisKarakterek[randomIndex];
    valtozok.jelszoKarakterekTomb.push(randomSpecBetuk);
    kezdoErtek++;
  }
};

const jelszoRandomizalo = function () {
  for (let i = valtozok.jelszoKarakterekTomb.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [
      valtozok.jelszoKarakterekTomb[i],
      valtozok.jelszoKarakterekTomb[randomIndex],
    ] = [
      valtozok.jelszoKarakterekTomb[randomIndex],
      valtozok.jelszoKarakterekTomb[i],
    ];
  }
};

const reset = function () {
  valtozok.jelszoKarakterekTomb = [];
  kiirtJelszo.value = "";
};

const jelszoKeszito = function () {
  randomSzamGeneralo();
  randomBetuGeneralo();
  randomSpecialisKarakterGeneralo();
  jelszoRandomizalo();
  const formataltJelszo = valtozok.jelszoKarakterekTomb.join("");
  kiirtJelszo.value = formataltJelszo;
};

document
  .getElementById("jelszo-generalo")
  .addEventListener("click", function () {
    reset();
    jelszoKeszito();
  });

//Full random jelszó lehetőség

const randomJelszoGeneralo = function () {
  let kezdoErtekSzamok = 0;
  let kezdoErtekBetuk = 0;
  let kezdoErtekSpec = 0;

  const jelszo1 = Math.floor(kertRandomJelszoKarakterekSzama.value / 2) - 2;
  const jelszo2 = (kertRandomJelszoKarakterekSzama.value % 2) + 4;

  while (kezdoErtekSzamok < jelszo1) {
    const randomSzam = Math.floor(Math.random() * 9 + 1);
    valtozok.jelszoKarakterekTomb.push(randomSzam);
    kezdoErtekSzamok++;
  }
  while (kezdoErtekBetuk < jelszo1) {
    const randomIndex = Math.floor(Math.random() * betuk.length);
    const randomBetuk = betuk[randomIndex];
    valtozok.jelszoKarakterekTomb.push(randomBetuk);
    kezdoErtekBetuk++;
  }
  while (kezdoErtekSpec < jelszo2) {
    const randomIndex = Math.floor(Math.random() * specialisKarakterek.length);
    const randomSpecBetuk = specialisKarakterek[randomIndex];
    valtozok.jelszoKarakterekTomb.push(randomSpecBetuk);
    kezdoErtekSpec++;
  }
  jelszoRandomizalo();
  const formataltJelszo = valtozok.jelszoKarakterekTomb.join("");
  kiirtJelszo.value = formataltJelszo;
  console.log(formataltJelszo.length);
};

document
  .querySelector("#random-jelszo-generalo")
  .addEventListener("click", function () {
    reset();
    randomJelszoGeneralo();
  });
