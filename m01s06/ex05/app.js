(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    let eventBound = true;

    function showAlert() {
      alert('butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        // scoate event
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta Nu va fi afisata!');
        eventBound = false;
      } else {
        // adauga event
        showButton.addEventListener('click', showAlert);
        this.innerText = 'Opreste afisarea';
        showMessage('Alerta Va fi afisata!');
        eventBound = true;
      }
    });

    function showMessage(message) {
      const className = 'message';
      let paragraphElement = document.querySelector('.' + className);

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add(className);
        document.body.append(paragraphElement);
      }

      paragraphElement.innerText = message;

      document.body.append(paragraphElement);
    }
  });
})();

console.warn(`Adauga un buton in document pe care cand apesi, sunt eliminate celelate butoane
cu metoda .remove() (puteti sa-l scrieti direct in HTML cu id=”removeButtons”)
`);
const removeButtons = document.getElementById('removeButtons');
removeButtons.addEventListener('click', function () {
  const confirmMessage = 'Esti sigur ca vrei sa stergi butoanele din DOM?';
  const userConfirmed = confirm(confirmMessage);

  if (userConfirmed) {
    const buttons = document.querySelectorAll('.removeButton');
    buttons.forEach(function (button) {
      button.remove();
    });
  }
});
