var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Ionica',
    surname: 'Gheorghescu',
  },
  {
    name: 'Vas',
    surname: 'Cusca',
  },
  {
    name: 'Ion',
    surname: 'Zapada',
  },
  {
    name: 'Nicolae',
    surname: 'Chistoc',
  },
];

console.warn(`
Afiseaza numele complet inversat al tuturor prietenilor,
insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului
break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.
`);
for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var fullReversedName = friend.surname + ' ' + friend.name;

  if (friend.name === 'Nicolae' && friend.surname === 'Cusca') {
    console.log('M-am oprit la ' + fullReversedName + '.');

    break;
  }

  console.log(fullReversedName);
}

console.warn(`Folosind keywordul continue, afiseaza numele complet inversat al prietenilor,
doar daca numarul de caractere total al numelor lor este mai mare
de 13 sub forma de propozitii “Prenume Nume are mai mult de 13 caractere.”.`);
for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var totalCharacters = (friend.surname + friend.name).length;

  if (totalCharacters <= 13) {
    continue;
  }

  console.log(
    friend.surname + ' ' + friend.name + ' are mai mult de 13 caractere.',
  );
}

console.warn(`Folosind o bucla for, afiseaza proprietatea surname a tuturor
obiectelor din arrayul friends.
`);
for (i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

console.warn(`Folosind o bucla for, afiseaza proprietatea name a tuturor
obiectelor din arrayul friends.
`);
for (i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

console.warn(`Afiseaza numele complet al tuturor prietenilor.
`);
for (i = 0; i < friends.length; i++) {
  console.log(friends[i].name + ' ' + friends[i].surname);
}

console.warn(`Folosind keywordul break, afiseaza numele complet al prietenilor
dar opeste bucla la primul surname care are numarul de caractere mai mare sau
egal decat 9 si afiseaz-l intr-o propozitie de forma
“M-am oprit la Nume Prenume.”.
`);
for (i = 0; i < friends.length; i++) {
  friend = friends[i];
  friendName = friends[i].surname + ' ' + friends[i].name;
  friendSurnameLetters = friend.surname.length.toString();

  if (friendSurnameLetters >= 9) {
    console.log(`M-am oprit la ${friendName}.`);
    break;
  }
  console.log(friendName);
}
