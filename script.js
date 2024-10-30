 const itemsContainer = document.querySelector('.items');
  let isDragging = false;
  let startX;
  let scrollLeft;

  itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - itemsContainer.offsetLeft;
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
    const x = e.pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 2; // The scroll-fast factor
    itemsContainer.scrollLeft = scrollLeft - walk;

    // Ensure we can actually scroll to the right
    if (itemsContainer.scrollLeft < 0) {
      itemsContainer.scrollLeft = 0;
    }
  });