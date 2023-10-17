const button = document.getElementById('clicker');
button.style.backgroundColor = 'green';
button.addEventListener('click', clickHandler);

function clickHandler() {
  alert('Ai dat click!');
}

const removeButton = document.getElementById('removeButton');
let isEventOn = true;
removeButton.addEventListener('click', function () {
  if (isEventOn) {
    button.removeEventListener('click', clickHandler);
    isEventOn = false;
    button.style.backgroundColor = 'red';
    console.log('Click Off');
  } else {
    button.addEventListener('click', clickHandler);
    isEventOn = true;
    button.style.backgroundColor = 'green';
    console.log('Click On');
  }
});

console.warn(`Adauga un buton nou in document cu id-ul query si folosind addEventListener()
ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.
(fara validari, sau optional)
`);
const ageButton = document.getElementById('query');
ageButton.addEventListener('click', clickPrompt);

const message = document.getElementById('message');
function clickPrompt() {
  let prompImput = prompt('Introdu varsta:');

  if (prompImput) {
    message.innerText = `Ai ${prompImput} ani.`;
  } else {
    message.innerText = 'Nu ai introdus varsta!';
  }
}

console.warn(`Creeaza un paragraf cu idul message si folosind getElementById()
stocheaza elementul intr-o variabila, apoi folosind innerText, afiseaza mesajul
de mai devreme in acest paragraf.`);
