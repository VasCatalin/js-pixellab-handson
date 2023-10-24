const button = document.querySelector('.btn');
const breakpoint = 650;
document.addEventListener('DOMContentLoaded', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth >= breakpoint) {
    button.removeEventListener('click', onClick);
  }
});

function onClick() {
  alert('buton apasat');
}

button.addEventListener('click', onClick);

// debounce or not debounce
window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < breakpoint) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
    console.log('rulez');
  }
});
