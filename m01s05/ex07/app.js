const dateBuilder = [
  function () {
    return '2023';
  },

  function () {
    return 'Martie';
  },

  function () {
    return '18';
  },
];

dateBuilder[3] = function () {
  return 'Sambata';
};

console.warn(`Afiseaza propozitia "Suntem in aaa an".`);
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`C2`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`C3`);
console.log(`Astazi este ${dateBuilder[3]()}.`);
