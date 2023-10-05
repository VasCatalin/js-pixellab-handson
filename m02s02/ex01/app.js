const form = document.getElementById('personForm');
const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 36,
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const personDisplay = renderPerson(person);
  form.after(personDisplay);
});

function renderPerson(person) {
  const paragraphMessage = document.createElement('p');
  paragraphMessage.innerText = `${person.name}${person.surname}: ${person.age}`;

  return paragraphMessage;
}
