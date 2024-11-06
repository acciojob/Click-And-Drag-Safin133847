const itemsContainer = document.querySelector('.items');
let isDragging = false;
let startX;
let scrollLeft;

// When mouse button is pressed, start dragging
itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - itemsContainer.getBoundingClientRect().left; // Get the X position
    scrollLeft = itemsContainer.scrollLeft; // Get the initial scroll position
    itemsContainer.classList.add('active'); // Add active class for visual effect
});

// When mouse leaves the container or button is released, stop dragging
itemsContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
});

itemsContainer.addEventListener('mouseup', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
});

// When mouse is moved while dragging, adjust scroll position
itemsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Only act if dragging is true

    e.preventDefault(); // Prevent default action (to avoid text selection etc.)

    const x = e.clientX - itemsContainer.getBoundingClientRect().left; // Get current mouse X position
    const walk = (x - startX) * 5; // Increased multiplier for faster scroll effect

    // Adjust scroll position based on mouse movement
    itemsContainer.scrollLeft = scrollLeft - walk;
});
