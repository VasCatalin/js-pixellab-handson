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
    {
      name: 'Pompilica',
      surname: 'Ionescu',
      age: 10,
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

console.warn(`Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana ,
  folosind o propozitie de forma "{person.name} cunoaste xxx!"
  `);
person.skills.forEach(function (skill) {
  console.log(`${person.name} cunoaste ${skill}!`);
});

console.warn(
  `In mod similar, afiseaza skillurile care nu incep cu j in propozitii de forma "Numele tehnologiei xxx nu incepe cu litera j."`,
);
person.skills.forEach(function (skill) {
  if (skill[0] !== 'j') {
    console.log(`Numele tehnologiei ${skill} nu incepe cu litera j.`);
  } else {
    console.log(`Numele tehnologiei ${skill} incepe cu litera j.`);
  }
});

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`,
);
var totalYears = 0;
person.friends.forEach(function (friendAge) {
  totalYears += friendAge.age;
});
console.log(totalYears.toString());

console.warn(
  `Folosind forEach, afiseaza suma anilor de nastere a persoanelor `,
);
var totalYears = 0;
person.friends.forEach(function (friendAge) {
  birthYear = 2023 - friendAge.age;
  totalYears += birthYear;
});
console.log(totalYears.toString());

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii
din arrayul friends.
`);
person.friends.forEach(function (friend) {
  var friendAge = friend.age;
  ageDiff = Math.abs(person.age - friendAge);
  console.log(`Diferenta pentru ${friend.name}: ${ageDiff} ani.`);

  console.log(ageDiff);

  if (ageDiff >= 10) {
    console.log(`Diferenta pentru ${friend.name} este mai mare de 10 ani.`);
  } else {
    console.log(`Diferenta pentru ${friend.name} este mai mica de 10 ani.`);
  }
});

console.warn(
  ` Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele
  complet al prietenilor din arrayul friends.`,
);
var message = 'Prietenii mei se numesc ' + [];
punctuation = ', ';
person.friends.reverse().forEach(function (friend, index) {
  friendCompleteName = friend.name + ' ' + friend.surname;
  console.log(friendCompleteName);

  if (person.friends.length - 1 === index) {
    punctuation = '.';
  }
  message += friendCompleteName + punctuation;
});
console.log(message);

console.warn(
  `Metoda console.log ar fi trebuit chemata cu valoarea: "Varstele insumate sunt: 120.".`,
);
var totalAge = 0;
person.friends.forEach(function (friend) {
  var friendAge = friend.age;

  if (friendAge > 20) {
    totalAge += friendAge;
  }
});

console.log(`Varstele insumate sunt: ${totalAge}.`);

console.warn(
  `Folosind forEach, afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);
var message = `Numele mari ale prietenilor mei sunt `;
var punctuation = ', ';
person.friends.reverse().forEach(function (friend, index) {
  friendSurname = friend.surname;

  if (person.friends.length - 1 === index) {
    punctuation = '.';
  }

  message += friendSurname + punctuation;
});

console.log(message);

console.warn(`Metoda console.log ar fi trebuit chemata cu valoarea: "2008".`);
person.friends.forEach(function (friend) {
  friendName = friend;
  birthYear = 2023 - friend.age;

  if (friend.age === 15) {
    console.log(birthYear.toString());
  }
});
