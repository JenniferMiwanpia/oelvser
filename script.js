// fire knapper i HTML-filen.
const knapper = document.querySelectorAll("button");

// Den samme funktion bliver kaldt uanset hvilken drik man klikker på.
knapper.forEach(function (knap) {
  knap.addEventListener("click", tjekDrik);
});

function tjekDrik() {
  // "this" er den knap, der blev klikket på. Vi læser billedets alt-tekst.
  const drik = this.querySelector("img").alt;

  // || betyder "eller": Er drikken øl eller snaps?
  if (drik === "øl" || drik === "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
