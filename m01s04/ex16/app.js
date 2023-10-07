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
let punctuation = ', ';
let cartProductsMessage = `${cart.name} are urmatoarele produse in cart: `;
products.forEach(function (product, index) {
  if (products.length - 1 === index) {
    punctuation = '.';
  }

  cartProductsMessage += product.name + punctuation;
});
console.log(cartProductsMessage);

console.warn(
  `Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”`,
);
let totalCartValue = 0;
products.forEach(function (product) {
  totalCartValue += product.price * product.quantity;
});
console.log(
  `Valoarea totala a cartului lui ${cart.name} este ${totalCartValue}.`,
);

console.warn(
  `Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”`,
);
let totalCartWeight = 0;
products.forEach(function (product) {
  totalCartWeight += product.weight * product.quantity;
});
console.log(
  `Greutatea totala a cartului lui ${cart.name} este ${totalCartWeight}.`,
);

console.warn(`Afiseaza propozitia “Name isi cumpara un total de xxx produse.”`);
let totalCartProducts = 0;
products.forEach(function (product) {
  totalCartProducts += product.quantity;
});
console.log(
  `${cart.name} isi cumpara un total de ${totalCartProducts} produse.`,
);

console.warn(
  `Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”`,
);
let totalMobilePrice = 0;
products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalMobilePrice += product.price * product.quantity;
  }
});
console.log(
  `Cartul contine produse din categoria Mobile in valoare totala de ${totalMobilePrice}.`,
);

console.warn(
  `Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”`,
);
let totalMobileWeight = 0;
products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalMobileWeight += product.weight * product.quantity;
  }
});
console.log(
  `Greutatea totala a produselor din categoria Mobile este ${totalMobileWeight}.`,
);

console.warn(
  `Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”`,
  // aici nu inteleg ce ne cere enuntul, eu am facut pretul mediu pe produs.
);
let totalPrice = 0;
let totalProducts = 0;
products.forEach(function (product) {
  totalPrice += product.price * product.quantity;
  totalProducts += product.quantity;
});
console.log(
  `Totalul pretului per produs din cart este ${totalPrice / totalProducts}.`,
);

console.warn(
  `Defineste o variabila numita maximumBudget de tip number cu o valoare arbitrara pozitiva.`,
);
let maximumBudget = 1000;

console.warn(
  `Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de `,
);
message = '';
totalPrice = 0;
products.forEach(function (product) {
  totalPrice += product.price * product.quantity;
});
if (totalPrice < maximumBudget) {
  message = `${cart.name} ${cart.surname} isi permite cartul.`;
} else {
  message = `${cart.name} ${cart.surname} nu isi permite cartul.`;
}
console.log(message);

console.warn(
  `Defineste o variabila numita maximumWeight de tip number cu o valoare arbitrara pozitiva.`,
);
let maximumWeight = 500;

console.warn(
  `Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de
  greutatea totala a produselor din cart.`,
);
message = '';
totalWeight = 0;
products.forEach(function (product) {
  totalWeight += product.weight * product.quantity;
});
if (totalWeight < maximumWeight) {
  message = `Firma de curierat poate livra comanda.`;
} else {
  message = `Firma de curierat nu poate livra comanda.`;
}
console.log(message);

console.warn(`Metoda console.log ar fi trebuit chemata cu valoarea:
"Dragos are urmatoarele produse in cart: Mouse, Keyboard Mat, USB Multicharger,
Keyboard, Phone dock si Picture Frame.".`);
let newPunctuation = '';
let messageFinal = `${cart.name} are urmatoarele produse in cart: `;
products.forEach(function (product, index) {
  switch (true) {
    case products.length - 1 === index:
      newPunctuation = '.';
      break;
    case products.length - 2 === index:
      newPunctuation = ' si ';
      break;
    default:
      newPunctuation = ', ';
  }
  messageFinal += product.name + newPunctuation;
});
console.log(messageFinal);
