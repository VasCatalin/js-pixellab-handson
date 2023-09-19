var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');
var paragraphElementTwo = document.getElementById('messageTwo');

// Varianta 1
if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else if (number === 20) {
  var message = `Numarul ${number} este egal cu 20`;
  // par | even
  console.log(message);
  paragraphElement.innerText = message;
} else if (number < 20) {
  var message = `Numarul ${number} este mai mic decat 20`;
  // impar | odd
  console.log(message);
  paragraphElement.innerText = message;
} else {
  var message = `Numarul ${number} este mai mare decat 20`;
  // impar | odd
  console.log(message);
  paragraphElement.innerText = message;
}

// Varianta 2
if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else {
  switch (true) {
    case number === 20:
      var message = `Numarul ${number} este egal cu 20`;
      console.log(message);
      paragraphElementTwo.innerText = message;
      break;

    case number > 20:
      var message = `Numarul ${number} este mai mare decat 20`;
      console.log(message);
      paragraphElementTwo.innerText = message;
      break;

    case number < 20:
      var message = `Numarul ${number} este mai mic decat 20`;
      console.log(message);
      paragraphElementTwo.innerText = message;
      break;

    default:
      console.log('404');
  }
}
