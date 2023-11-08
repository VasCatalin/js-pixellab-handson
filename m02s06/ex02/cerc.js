console.log(process.argv);

// destructurare
// let lenght = process.argv[2]
// let width = process.argv[3]
let [r = 5] = process.argv;
raza = Number(r);

console.log(Math.PI * Math.pow(r, 2));
