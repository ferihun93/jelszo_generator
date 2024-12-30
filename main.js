let kertkarakterSzam = document.getElementById("karakter-szam");
let kiirtJelszo = document.getElementById("jelszo");
// let tesztSzamjegy = Number(
//   prompt("Írd ide hogy hány karakteres jelszót szeretnél!")
// );
let kezdoKarakterekSzama = 0;
let jelszoKarakterek = [];
let randomSzam = 0;
let ujRandomSzam = 0;

const randomSzamGeneralo = function () {
  while (kezdoKarakterekSzama < kertkarakterSzam.value) {
    randomSzam = Math.floor(Math.random() * 9 + 1);
    kezdoKarakterekSzama++;
    tombFeltoltes();
  }
  // tombAtvizsgalo();
};

const ujRandomSzamGeneralas = function () {
  Math.floor(Math.random() * 9 + 1);
};

// const tombAtvizsgalo = function () {
//   for (let szam of jelszoKarakterek) {
//     if (szam === randomSzam) {
//       randomSzam = ujRandomSzamGeneralas();
//       jelszoKarakterek.push(randomSzam);
//     } else {
//       randomSzamGeneralo();
//     }
//   }
// };

const tombFeltoltes = function () {
  jelszoKarakterek.push(randomSzam);
  let ujJelszo = jelszoKarakterek.join("");
  kiirtJelszo.value = ujJelszo;
};

const reset = function () {
  kezdoKarakterekSzama = 0;
  jelszoKarakterek = [];
  kiirtJelszo.value = "";
};

document
  .getElementById("jelszo-generalo")
  .addEventListener("click", function () {
    reset();
    randomSzamGeneralo();
  });
