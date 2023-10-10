const form = document.getElementById('personForm');
const personDisplayClass = 'personDisplay';
const existingFieldset = form.querySelector('fieldset:nth-child(2)');

existingFieldset.append(renderSkillInput());

// returns input and button
function renderSkillInput() {
  const container = new DocumentFragment();
  const skillInput = document.createElement('input');
  skillInput.type = 'text';
  skillInput.placeholder = 'Adauga Skill';
  skillInput.classList.add('addSkill');

  const skillInputButton = document.createElement('button');
  skillInputButton.title = 'Adauga Skill';
  skillInputButton.innerText = '+';

  skillInputButton.addEventListener('click', function (event) {
    const button = event.currentTarget;
    //  DOM traversal
    const skillInput = button.previousElementSibling;
    const skillValue = skillInput.value;
    if (skillValue.trim().length < 1) {
      return;
    }

    // create UL near Button
    // renderSkillsUl(Skillvalue)
    button.after(renderSkillsUl(skillValue));
  });

  container.append(skillInput);
  container.append(skillInputButton);

  return container;
}

function renderSkillsUl(skillName) {
  const className = 'skillsUl';
  let skillsUl = document.querySelector('.' + className);

  if (skillsUl === null) {
    skillsUl = document.createElement('ul');
    skillsUl.classList.add(className);
  }

  const skillLi = document.createElement('li');
  skillLi.innerText = skillName;
  const deleteSkillButton = document.createElement('button');
  deleteSkillButton.type = 'button';
  deleteSkillButton.innerText = 'Sterge';
  deleteSkillButton.title = 'Sterge Skill';
  deleteSkillButton.classList.add('deleteSkillButton');

  skillLi.append(deleteSkillButton);
  skillsUl.append(skillLi);

  return skillsUl;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const person = {};
  // currentTarget => obiectul de DOM pe care s-a rulat addEventlistener
  const form = event.currentTarget;

  person.name = form.name.value;
  person.surname = form.surname.value;
  person.age = form.age.value;

  clearDisplay();
  const personDisplay = render(person);
  form.after(personDisplay);

  form.reset();
});

form.addEventListener('click', function (event) {
  // obtain button from DOM
  // target este obiectul de pe care a plecat evenimentul.
  const target = event.target;
  // check if actual button
  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('deleteSkillButton')
  ) {
    // return early
    return;
  }

  const deleteSkillButton = target;
  // DOM traversal
  // button.parentElement.remove()
  deleteSkillButton.parentElement.remove();
});

function clearDisplay() {
  const display = document.querySelector('.' + personDisplayClass);

  if (display !== null) {
    display.remove();
  }
}

function render(person) {
  const personDisplay = document.createElement('div');
  personDisplay.classList.add(personDisplayClass);

  personDisplay.append(renderPerson(person));
  return personDisplay;
}

function renderPerson(person) {
  const paragraphMessage = document.createElement('p');
  paragraphMessage.innerText = `${person.name} ${person.surname}: ${person.age}`;

  return paragraphMessage;
}
