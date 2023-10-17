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
  skillInputButton.type = 'button';

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

  const skillText = document.createElement('span');
  skillText.classList.add('skillText');
  skillText.innerText = skillName;

  const skillInput = document.createElement('input');
  skillInput.type = 'hidden';
  skillInput.name = `skill-${skillName}`;
  skillInput.value = skillName;

  const deleteSkillButton = document.createElement('button');
  deleteSkillButton.type = 'button';
  deleteSkillButton.innerText = 'Sterge';
  deleteSkillButton.title = 'Sterge Skill';
  deleteSkillButton.classList.add('deleteSkillButton');

  const editSkillButton = document.createElement('button');
  editSkillButton.type = 'button';
  editSkillButton.innerText = 'Editeaza';
  editSkillButton.title = 'Editeaza Skill';
  editSkillButton.classList.add('editSkillButton');

  const cancelEditSkillButton = document.createElement('button');
  cancelEditSkillButton.type = 'button';
  cancelEditSkillButton.innerText = 'Cancel';
  cancelEditSkillButton.title = 'Cancel Edit';
  cancelEditSkillButton.classList.add('cancelEditSkillButton');
  cancelEditSkillButton.hidden = true;

  const saveSkillButton = document.createElement('button');
  saveSkillButton.type = 'hidden';
  saveSkillButton.innerText = 'Save';
  saveSkillButton.title = 'Save Edit';
  saveSkillButton.classList.add('saveSkillButton');
  saveSkillButton.hidden = true;

  skillLi.append(skillText);
  skillLi.append(skillInput);
  skillLi.append(deleteSkillButton);
  skillLi.append(editSkillButton);
  skillLi.append(cancelEditSkillButton);
  skillLi.append(saveSkillButton);

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

form.addEventListener('click', function (event) {
  // target este obiectul de pe care a plecat eventul
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('editSkillButton')
  ) {
    return;
  }

  const editSkillButton = target;
  // hide delete button
  editSkillButton.parentElement.querySelector(
    '.deleteSkillButton',
  ).hidden = true;

  // hide skillText button
  editSkillButton.parentElement.querySelector('.skillText').hidden = true;
  // hide actual edit button
  editSkillButton.hidden = true;
  // change type hidden in text
  editSkillButton.parentElement.querySelector('input[name^="skill-"]').type =
    'text';
  // show cancel
  editSkillButton.parentElement.querySelector(
    '.cancelEditSkillButton',
  ).hidden = false;
  // show save
  editSkillButton.parentElement.querySelector(
    '.saveSkillButton',
  ).hidden = false;
});

// event delegation for cancel
form.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('cancelEditSkillButton')
  ) {
    return;
  }

  const cancelButton = target;
  const parentElement = cancelButton.parentElement;

  // show span.SkillLi
  parentElement.querySelector('.skillText').hidden = false;
  // sow button.editSkillButton
  parentElement.querySelector('.editSkillButton').hidden = false;
  // show.deleteSkillButton
  parentElement.querySelector('.deleteSkillButton').hidden = false;
  // hide this button
  cancelButton.hidden = true;
  parentElement.querySelector('.saveSkillButton').hidden = true;
  parentElement.querySelector('[name^="skill-"]').type = 'hidden';
  // change type from text to hidden on input
});

// event delegation for saveSkillButton
form.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('saveSkillButton')
  ) {
    return;
  }

  const saveButton = target;
  const parentElement = saveButton.parentElement;

  // hide this button
  saveButton.hidden = true;

  // copy value from input to skillText
  // tema-early return !!!!

  const skillInput = parentElement.querySelector('input[name^=skill-');
  const value = skillInput.value;
  const skillText = parentElement.querySelector('.skillText');

  skillText.innerText = value;
  skillText.hidden = false;

  // hide cancel
  parentElement.querySelector('.cancelEditSkillButton').hidden = true;

  // change type to hidden
  skillInput.type = 'hidden';

  // show edit
  parentElement.querySelector('.editSkillButton').hidden = false;

  // show delete
  parentElement.querySelector('.deleteSkillButton').hidden = false;
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
