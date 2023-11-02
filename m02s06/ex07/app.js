document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('personForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // currentTarget elementul pe care am pus eventul
    const form = event.currentTarget;
    const { name, surname } = form;
    const person = {
      id: Date.now().toString(),
      name: name.value,
      surname: surname.value,
    };

    console.log(person);
    postPerson(person).then(() => {
      form.reset();
    });
  });

  const renderPersons = (persons = []) => {
    const section = document.getElementById('personsDisplay');
    section.innerHTML = '';
    const container = new DocumentFragment();

    persons.forEach((person) => {
      const { name, surname } = person;

      const p = document.createElement('p');
      p.innerText = `${name} ${surname}`;

      container.append(p);
    });

    section.append(container);
  };

  const getPersons = () => {
    return fetch('http://localhost:8080/persons')
      .then((response) => {
        return response.json();
      })
      .then((persons) => {
        renderPersons(persons);
      });
  };

  const postPerson = (person) => {
    return fetch('http://localhost:8080/persons', {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {});
  };

  getPersons();
});
