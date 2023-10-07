var person = {
  getName: function () {
    return 'Ion Zapada';
  },
  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  var methodName = 'get' + methodSuffix;
  return person[methodName]();
}

console.log(accessor('Name'));

console.warn(`Folosind accesorul, salveaza numele mic al persoanei
intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);
console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul
curent.
`);
const currentYear = new Date().getFullYear();
console.log((currentYear - accessor('Age')).toString());

console.warn(`Folosind accesorul, salveaza numele mic al persoanei intr-o variabila
si foloseste-l in propozitia: “Eu sunt xxx.”`);
const surname = accessor('Name').split(' ')[1];
console.log(surname);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma
   “M-am nascut in 1987.”`,
);
console.log(`M-am nascut in ${(currentYear - accessor('Age')).toString()}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);

console.warn(`Metoda console.log ar fi trebuit chemata cu valoarea:
"Ma numesc Ion Zapada, am 32 ani si m-am nascut in anul 1991.".`);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${(currentYear - accessor('Age')).toString()}.`,
);
