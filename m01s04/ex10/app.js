var person = {
  name: 'Diriglont',
  surname: 'Cusca',
  age: 36,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 15,
    },
    {
      name: 'Vasilica',
      surname: 'Ionescu',
      age: 90,
    },
  ],
};

console.warn(`Folosind obiectul person si forEach,
afiseaza skillurile din pozitiile impare ale arrayului in propozitii de forma
"Tehnologia xxx se afla pe pozitia iii, impara, a arrayului."
`);

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(
      'Tehnologia ' +
        skill +
        ' se afla pe pozitia ' +
        index +
        ', impara, a arrayului.',
    );
  }
});

console.warn(
  `In mod similar, afiseaza skillurile care contin litera a in propozitii de forma
  "Tehnologia xxx contine caracterul "a". "`,
);
person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log('Tehnologia ' + skill + ' contine litera "a".');
  }
});

console.warn(` Folosind forEach, afiseaza propozitia:
"Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }
  // scurtatura "pentru message = message + ...""
  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(` Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`);

console.warn(
  ` Afiseaza fraza:
  "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "`,
);
var message = '';
person.friends.forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(person.age - friend.age);
  var punctuation = friends.length - 1 === index ? '.' : '. ';
  // var punctuation = '';
  // if (friends.length - 1 === index) {
  //   punctuation = '.';
  // } else {
  //   punctuation = '. ';
  // }

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani${punctuation}`;
});

console.log(message.trim());

console.warn(` Folosind metoda reverse si apoi forEach,
afiseaza in ordine inversa elementele arrayului skills.
`);
//slice fara parametrii creeaza o clona
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });
