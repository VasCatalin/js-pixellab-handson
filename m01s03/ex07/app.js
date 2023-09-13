var person = {
  firstName: 'Nicolae',
  lastName: 'Cusca',
  email: 'cuscanicolae@yahoo.com',
  birthYear: 1980,
  pets: [
    {
      name: 'Mox',
      species: 'caine',
      age: 15,
    },
    {
      name: 'Kaligula',
      species: 'pisica',
      age: 10,
    },
    {
      name: 'LoL',
      species: 'hamster',
      age: 5,
    },
  ],
  zipCode: '500000',
};

console.warn(
  `Afiseaza propozitia:
  “Numele meu este: xxx yyy si am x animale.”.
   Nu uita de proprietatea length a arrayului pets. `,
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia:
“Am acelasi email din copilarie: xxx.”.`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`Afiseaza propozitia:
“Unul din cele x animale ale mele este species si are age ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent),
  anul de nastere al animalului de pe indexul 2. `,
);
console.log((2023 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference
  diferenta de ani dintre persoana si animalul
  de pe pozitia 0 si afiseaza aceasta diferenta.
  Foloseste anul curent. `,
);
var difference = (2023 - person.birthYear - person.pets[0].age).toString();
console.log(difference);

console.warn(
  `Salveaza numele animalului de pe indexul 0
  intr-o variabila numita petName. `,
);
var petName = person.pets[0].name;
console.log(petName);

console.warn(
  `Afiseaza propozitia:
  “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

var liElementOne = document.getElementById('prop01');
var liElementTwo = document.getElementById('prop02');
var liElementTree = document.getElementById('prop03');
var liElementFor = document.getElementById('prop04');

console.warn(`Afiseaza propozitia “
firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa”
(folosind bracket notation pe arrayul pets)`);

liElementOne.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa';

console.warn(`Calculeaza si afiseaza diferenta de
varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `);
liElementTwo.innerText = person.pets[0].age - person.pets[2].age;

console.warn(
  `Afiseaza propozitia:
  “Ma numesc xxx yyy, m-am nascut in birthYear si
  codul meu postal este: zipCode”`,
);
liElementTree.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;

console.warn(
  `Afiseaza propozitia:
  “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.”
  Foloseste anul curent pentru a efectua scaderea.`,
);
var dogBirthYear = 2023 - person.pets[0].age;
var catBirthYear = 2023 - person.pets[1].age;
var mouseBirthYear = 2023 - person.pets[2].age;
liElementFor.innerText =
  'Animalele mele s-au nascut in ' +
  dogBirthYear +
  ', ' +
  catBirthYear +
  ', ' +
  mouseBirthYear +
  '.';
