console.warn(`Modifica exemplul astfel incat bucla sa
numere de la 1 la 18 si sa afiseze propozitii de forma: “Numar pana la 18 inclusiv: i.”
`);
var start1 = 1;
var end1 = 18;

var i = start1;
while (i <= end1) {
  console.log('Numar pana la 18 inclusiv: ' + i + '.');
  i++;
}

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 8
 (dar afiseaza-l) folosind propozitii de forma “Ma voi opri la 8: i.”.
`);
var i = start1;
while (i <= end1) {
  if (i === 8) {
    console.log('M-am oprit la 8!');
    break;
  }

  console.log('Ma voi opri la 8: ' + i + '.');

  i++;
}

console.warn(`
Defineste o variabila numita start2 cu o valoare numerica arbitrara (mai mica decat 15)
Defineste o variabila numita end2 cu o valoare numerica arbitrara
Modifica exemplul astfel incat bucla sa numere de la 1 la 29 si sa afiseze propozitii de forma: “Numerele pana la 29 inclusiv: i.”
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 15 (dar afiseaza-l) folosind propozitii de forma “Ma voi opri la 15: i.”.
`);

var start2 = 10;
var end2 = 29;

var i = start2;

while (i <= end2) {
  console.log(`Numerele pana la ${end2} inclusiv: ${i}.`);
  i++;
}

console.warn(`Suplimentar Pixelltab`);

var start3 = 10;
var end3 = 29;

var i = start2;

while (i <= end3) {
  console.log(`Ma voi opri la 15: ${i}.`);
  if (i === 15) {
    console.log(`M-am oprit la ${i}!`);
    break;
  }
  i++;
}
