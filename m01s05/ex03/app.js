const calculateRectangleArea = function (length, width) {
  const area = length * width;

  return area;
};

console.warn(`Stiind ca un camp dreptunghiular de hamei produce
25kg/m2 , ce diferenta de productie este intre un teren de
100m pe 250m si unul de 350m pe 200m?
`);
let field1Length = 100;
let field1Width = 250;
let field2Length = 350;
let field2Width = 200;
let barleyYield = 25; // kg/m2
let beerYield = 2.5 / 10; // litru

const field1Yield =
  calculateRectangleArea(field1Length, field1Width) * barleyYield;
const field2Yield =
  calculateRectangleArea(field2Length, field2Width) * barleyYield;
console.log(field2Yield - field1Yield);

console.warn(`Stiind ca din 10kg de hamei produc 2.5l de bere,
cati litri de bere va produce un teren de 400m pe 370m?
`);
const field3Yield = calculateRectangleArea(400, 370) * barleyYield;
const field3BeerYield = field3Yield * beerYield;
console.log(field3BeerYield);