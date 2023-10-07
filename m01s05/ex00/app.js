const metricSpeeds = [10, 60, 100, 180, 850, 1000];

const centigradeTemperatures = [0, 100, -30, 16, -273, 1000];

const metricDistances = [1, 10, 100, 1000, 1500];

console.warn(`
Folosind valorile din arrayuri si orice bucla doresti:
Afiseaza cate una pe linie propozitii de forma
“10km/h inseamna xxxm/s sau yyymph.”.
Stiind ca formula pentru a calcula metri pe secunda este:
kmh * 5 / 18 si mile pe ora este: kmh * 1.609344
`);

function kmhtomps(kmh) {
  return (kmh * 5) / 18;
}

function kmhtomph(kmh) {
  return kmh * 1.609344;
}

for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  console.log(
    `${speed}km/h inseamna ${kmhtomps(speed)}m/s sau ${kmhtomph(speed)}mph.`,
  );
}

console.warn(`Aduna toate valorile din array si afiseaza o propozitie de forna:
"xxxkm/h inseamna yyymph"`);
let totalSpeeds = 0;
for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  totalSpeeds += speed;
}
console.log(`${totalSpeeds}km/h inseamna ${kmhtomph(totalSpeeds)}mph.`);

console.warn(`In mod similar afiseaza propozitii de forma “0 grade celsius inseamna
xxx grade kelvin sau yyy grade Fahrenheit.” Stiind ca formula pentru a calcula
gradele Fahrenheit este (x° * 9 / 5) + 32 iar pentru kelvin: x° + 273.15`);
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

let totalCelsius = 0;
for (i = 0; i < centigradeTemperatures.length; i++) {
  const celsius = centigradeTemperatures[i];
  totalCelsius += celsius;

  console.log(
    `${celsius} grade celsius inseamna ${celsiusToKelvin(
      celsius,
    )} grade kelvin sau ${celsiusToFahrenheit(celsius)} grade Fahrenheit.`,
  );
}

console.warn(`Aduna toate valorile din array si afiseaza o propozitie de forma:
 “xxx grade celsius inseamna yyy grade kelvin.”.
`);
console.log(
  `${totalCelsius} grade celsius inseamna ${celsiusToKelvin(
    totalCelsius,
  )} grade kelvin.`,
);

function mToInch(m) {
  return m * 39.3701;
}

function mToFeet(m) {
  return m * 3.281;
}

console.warn(`Pentru distante afiseaza propozitii de forma
“1m inseamna xxx inch sau yyy picioare.”.
Stiind ca un metru este 39.3701 inch si 3.281 picioare.
`);
let totalMeter = 0;
for (i = 0; i < metricDistances.length; i++) {
  const meter = metricDistances[i];
  totalMeter += meter;
  console.log(
    `${meter}m inseamna ${mToInch(meter)} inch sau ${mToFeet(meter)} picioare.`,
  );
}

function mtomph(m) {
  return m / 1609;
}

console.warn(`Aduna toate valorile din array si afiseaza
o propozitie de forma “xxxm inseamna yyy mile.”. Stiind ca formula este: m / 1609`);
console.log(`${totalMeter}m inseamna ${mtomph(totalMeter)} mile.`);
