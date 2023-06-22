// Todo o código necessario para que as páginas executem o dark mode.
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
const paragraphs = document.querySelectorAll('p, h2, h3');

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    paragraphs.forEach(paragraph => {
      paragraph.style.color = '#ffffff';
    });
  } else {
    paragraphs.forEach(paragraph => {
      paragraph.style.color = '';
    });
  }
});