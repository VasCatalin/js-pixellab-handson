const calculateRectangleArea = (width, length) => {
  const area = width * length;

  return area;
};

console.warn(
  `Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan
  inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de
  ferestre de 2 pe 1.5. “Suprafata de tapet necesara este: xxx metri patrati.”`,
);
let longWall1Surface = calculateRectangleArea(6, 2.5);
let shortWall1Surface = calculateRectangleArea(4, 2.5);
let door1Surface = calculateRectangleArea(2.2, 1.5);
let window1Surface = calculateRectangleArea(2, 1.5);
let total1Surface =
  longWall1Surface * 2 + shortWall1Surface * 2 - door1Surface - window1Surface;
console.log(`Suprafata de tapet este: ${total1Surface} metri patrati.`);

console.warn(`Creaza o functie wrapper numita calculateSquareArea() pentru
calculateRectangleArea(), care sa primeasca ca parametru latura unui patrat
si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta pentru
a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat
capacitatile.
`);
const calculateSquareArea = (width) => {
  const area = calculateRectangleArea(width, width);

  return area;
};

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m
cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de
ferestre de 3 pe 2. “Suprafata de tapet necesara este xxx metri patrati.”
`);
longWall1Surface = calculateRectangleArea(12, 2.5);
shortWall1Surface = calculateRectangleArea(9, 2.5);
door1Surface = calculateRectangleArea(3, 2);
window1Surface = calculateRectangleArea(3, 2);
total1Surface =
  longWall1Surface * 2 + shortWall1Surface * 2 - door1Surface - window1Surface;
console.log(
  `Suprafata de tapet necesara este: ${total1Surface} metri patrati.`,
);

console.warn(`Creeaza o functie wrapper pentru calculateRectangleArea() care
sa primeasca 4 parametri: latimea si lungimea unui dreptunghi initial,
apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().
`);
const aggregateSurfaceArea = (
  firstLength,
  firstWidth,
  secondLength,
  secondWidth,
) => {
  const firstSurface = firstLength * firstWidth;
  const secondSurace = secondLength * secondWidth;
  const totalSurface = firstSurface + secondSurace;
  return totalSurface;
};

console.warn(`Folosind aceasta noua functie calculeaza suprafata totala
a doua dreptunghiuri de 48 pe 92 si 51 pe 102.
`);
totalRectanglesSurface = aggregateSurfaceArea(48, 92, 51, 102);
console.log(totalRectanglesSurface);
