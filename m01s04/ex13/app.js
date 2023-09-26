var globalVariable = 'Ma aflu in global';

console.log(localVariable);

if (true) {
  var localVariable = 'Ma aflu in local';
  var globalVariableVariable = 'Nu ma aflu in global';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(localVariable);

var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 40,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 15,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 20,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 6,
    },
  ],
};

let petAgeTotal = 0;
person.pets.forEach(function (pet) {
  let petName = pet.name;
  let petAge = pet.age;
  let petSpecies = pet.species;
  petAgeTotal = petAgeTotal + petAge;

  // Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
  console.log(petName);

  // Folosind forEach(), afiseaza cate una pe linie propozitiile:
  // “Twix este papagal si are 4 ani. Mars este caine si are… etc
  console.log(`${petName} este ${petSpecies} si are ${petAge} ani.`);
});
// Folosind o bucla for afiseaza suma anilor animalelor.
console.log(petAgeTotal);

console.warn(`Folosind o bucla for, afiseaza cate una pe linie propozitiile:
 “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
let personName = person.firstName;
let personAge = 2023 - person.birthYear;
for (i = 0; i < person.pets.length; i++) {
  petName = person.pets[i].name;
  petAge = person.pets[i].age;
  ageDiff = Math.abs(
    personAge -
      petAge`+
  w`,
  );
  console.log(
    `Intre ${personName} si ${petName} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(`Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii:
“Animalul meu se numeste xxxx.”.
`);
for (i = person.pets.length - 1; i >= 0; i--) {
  petName = person.pets[i].name;
  console.log(`Animalul meu se numeste ${petName}.`);
}

console.warn(`Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia:
 “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
 Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla,
 daca varsta animalului curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.
`);
var oldestPet = person.pets[0].name;
var oldestPetAge = person.pets[0].age;
for (i = 0; i < person.pets.length; i++) {
  currentPet = person.pets[i].name;
  currentPetAge = person.pets[i].age;

  if (oldestPetAge < currentPetAge) {
    oldestPet = currentPet;
    oldestPetAge = currentPetAge;
  }
}
console.log(`${oldestPet} este batran`);
