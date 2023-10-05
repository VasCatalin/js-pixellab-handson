var cart = {
  name: 'Dragos',
  surname: 'Iordache',
  email: 'dragos.iordache@pixellab.ro',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 180,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
      weight: 90,
    },
    {
      category: 'Mobile',
      name: 'USB Multicharger',
      price: 150,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
      weight: 280,
    },
    {
      category: 'Mobile',
      name: 'Phone dock',
      price: 200,
      quantity: 2,
      weight: 350,
    },
    {
      category: 'Home',
      name: 'Picture Frame',
      price: 800,
      quantity: 1,
      weight: 150,
    },
  ],
};

console.warn(`Folosind forEach()`);
console.warn(
  `Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”`,
);
let products = cart.products;
let productType = [];
products.forEach(function (product) {
  let productName = product.name;
  if (productType.includes(productName) === false) {
    productType.push(`${productName}`);
  }
});
console.log(
  `${cart.name} ${cart.surname} are ${productType.length} tipuri de produse in cart.`,
);

console.warn(
  `Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”`,
);
console.warn(
  `Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”`,
);
console.warn(
  `Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”`,
);
console.warn(
  `Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”`,
);
console.warn(`Afiseaza propozitia “Name isi cumpara un total de xxx produse.”`);
console.warn(
  `Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”`,
);
console.warn(
  `Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”`,
);
console.warn(
  `Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”`,
);
console.warn(
  `Defineste o variabila numita maximumBudget de tip number cu o valoare arbitrara pozitiva.`,
);
console.warn(
  `Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de `,
);
console.warn(
  `Defineste o variabila numita maximumWeight de tip number cu o valoare arbitrara pozitiva.`,
);
console.warn(
  `Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de
  greutatea totala a produselor din cart.`,
);
