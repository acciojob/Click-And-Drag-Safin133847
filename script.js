const itemsContainer = document.querySelector('.items');
  let isDragging = false;
  let startX;
  let scrollLeft;

  itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - itemsContainer.getBoundingClientRect().left; // Using clientX
    scrollLeft = itemsContainer.scrollLeft;
    itemsContainer.classList.add('active');
  });

  itemsContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
  });

  itemsContainer.addEventListener('mouseup', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
  });

  itemsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - itemsContainer.getBoundingClientRect().left; // Using clientX
    const walk = (x - startX) * 2; // Adjust drag speed if needed
    itemsContainer.scrollLeft = scrollLeft - walk;
  });