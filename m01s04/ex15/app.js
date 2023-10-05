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

console.warn(`Folosind fisierele de la exercitiul 06 si doua bucle for imbricate (nested),
 afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
Poti folosi metoda pentru a converti numerele negative in pozitive.

Exemplu:
Intre Larry si Steven este o diferenta de x ani.
Intre Larry si Carol este o diferenta de x ani.
Intre Steven si Larry este o diferenta de y ani.
Intre Steven si Carol este o diferenta de z ani.
Intre carol si larry
Intre carol si steven`);

var friends = person.friends;
for (i = 0; i < friends.length; i++) {
  for (j = i + 1; j < friends.length; j++) {
    var ageDiff = Math.abs(friends[i].age - friends[j].age);
    console.log(
      `Intre ${friends[j].name} si ${friends[i].name} este o diferenta de ${ageDiff} ani.`,
    );
  }
}
