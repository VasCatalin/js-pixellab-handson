console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita
calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat.
Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata
totala a paralelipipedului. Foloseste structura switch.`);

let surface = 0;
function calculateSurface(width, lenght, height) {
  switch (true) {
    case arguments.length === 2:
      surface = width * lenght;
      break;
    case arguments.length === 3:
      surface = width * lenght * height;
      break;
    default:
      surface = width * width;
  }

  return surface;
}

calculateSurface(20, 15, 5);
console.log(`Suprafata este ${surface}`);

console.warn(`Creeaza o functie numita calculateCircleArea()
si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `);
function calculateCircleArea(r) {
  return Math.pow(r, 2) * Math.PI;
}
calculateCircleArea(2);
console.log(
  calculateCircleArea(2),
  calculateCircleArea(20),
  calculateCircleArea(16),
);

console.warn(
  `Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.`,
);

var pet = {
  getName: function () {
    return 'Hayma';
  },
  getSpecies: function () {
    return 'Sarpe';
  },
  getAge: function () {
    return;
  },
};
