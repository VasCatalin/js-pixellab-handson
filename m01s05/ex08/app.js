const button = document.getElementById('clicker');

function clickHandler() {
  alert('Ai dat click!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.addEventListener('click', clickHandler);
});
