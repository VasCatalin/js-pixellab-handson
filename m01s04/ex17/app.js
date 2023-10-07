var services = [
  {
    name: 'Mailchamp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(`Folosind for
Afiseaza in consola propozitia “Siteul foloseste urmatoarele
 servicii: a, b, c, d si e.”`);
let punctuation = '';
message = 'Siteul foloseste urmatoarele servicii: ';
for (i = 0; i < services.length; i++) {
  switch (true) {
    case i === services.length - 1:
      punctuation = '.';
      break;
    case i === services.length - 2:
      punctuation = ' si ';
      break;
    default:
      punctuation = ', ';
  }
  let servicesName = services[i].name;
  message += servicesName + punctuation;
}
console.log(message);

console.warn(`Afiseaza doar numele serviciilor integrate dupa
2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”`);
punctuation = '';
firstMessage = 'Serviciile ';
lastMessage = 'au fost adoptate dupa 2020 inclusiv.';
for (i = 0; i < services.length; i++) {
  switch (true) {
    case i === services.length - 1:
      punctuation = ' ';
      break;
    default:
      punctuation = ', ';
  }
  let servicesName = services[i].name;
  let servicesAdoption = services[i].adoption;
  if (servicesAdoption >= 2020) {
    firstMessage += servicesName + punctuation;
  }
}
message = firstMessage + lastMessage;
console.log(message);

console.warn(`Afiseaza doar pentru serviciile de pe pozitii pare,
 cate una pe linie, propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”
`);
for (i = 0; i < services.length; i++) {
  let servicesName = services[i].name;
  let servicesAdoption = services[i].adoption;
  console.log(
    `Serviciul se numeste ${servicesName} si a fost integrat in ${servicesAdoption}.`,
  );
}

console.warn(`Folosind anul curent afiseaza propozitii de forma
“Siteul foloseste serviciul xxx de yyy ani.”
`);
let currentDate = new Date();
let currenYear = currentDate.getFullYear();
let biggestNumber = 0;
let biggestName = '';

for (i = 0; i < services.length; i++) {
  let servicesName = services[i].name;
  let servicesAdoption = services[i].adoption;
  yearDiff = Math.abs(servicesAdoption - currenYear);
  console.log(`Siteul foloseste serviciul ${servicesName} de ${yearDiff} ani.`);

  if (yearDiff > biggestNumber) {
    biggestNumber = yearDiff;
    biggestName = services[i].name;
  }
}

console.warn(`Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma
“Folosim xxx de yyy ani.”
`);
console.log(`Folosim ${biggestName} de ${biggestNumber} ani.`);
