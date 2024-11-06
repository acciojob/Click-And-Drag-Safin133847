const itemsContainer = document.querySelector('.items');
let isDragging = false;
let startX;
let scrollLeft;

itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - itemsContainer.getBoundingClientRect().left;
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
    const x = e.clientX - itemsContainer.getBoundingClientRect().left;
    const walk = (x - startX) * 5; // Increased multiplier for faster scroll
    itemsContainer.scrollLeft = scrollLeft - walk;
});
