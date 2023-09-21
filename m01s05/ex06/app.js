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
