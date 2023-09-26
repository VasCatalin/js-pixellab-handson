function calculateSurface(width, lenght) {
  if (arguments.length === 2) {
    return width * lenght;
  } else {
    return width ** 2;
  }
}

console.warn(
  `Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface(),
  care sa primeasca un singur parametru si sa calculeze suprafata unui patrat. `,
);

function calculateSquareSurface(side) {
  return calculateSurface(side);
}

function calculateRectangleSurface(width, lenght) {
  return calculateSurface(width, lenght);
}

console.log(calculateSquareSurface(4));
console.log(calculateRectangleSurface(8, 9));
