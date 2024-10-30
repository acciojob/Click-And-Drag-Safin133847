<script>
  const itemsContainer = document.querySelector('.items');
  let isDragging = false;
  let startX;
  let scrollLeft;

  itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - itemsContainer.getBoundingClientRect().left; // Use getBoundingClientRect to ensure accurate position
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
    const x = e.pageX - itemsContainer.getBoundingClientRect().left; // Adjust to use getBoundingClientRect
    const walk = (x - startX) * 2; 
    itemsContainer.scrollLeft = scrollLeft - walk;

    if (itemsContainer.scrollLeft < 0) {
      itemsContainer.scrollLeft = 0;
    }
  });
</script>
