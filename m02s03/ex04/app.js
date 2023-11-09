const image = document.querySelector('.image');
const messageContainer = document.createElement('p');

function showMessage(message) {
  message = 'Imaginea se incarca…';
  messageContainer.innerText = message;

  // side effect
  document.body.append(messageContainer);
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat!');
  message = 'Imaginea s-a incarcat!';
  messageContainer.innerText = message;
});
