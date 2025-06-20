document.querySelector('.prev').addEventListener('click', () => {
  const slider = document.querySelector('.product-slider');
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector('.next').addEventListener('click', () => {
  const slider = document.querySelector('.product-slider');
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});






const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');

    // Implement filtering logic here (for now it's static)
    console.log(`Filter: ${tag.textContent}`);
  });
});




document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('span').textContent = '+';
    });

    // Open clicked one
    if (!isOpen) {
      item.classList.add('open');
      header.querySelector('span').textContent = '−';
    }
  });
});
