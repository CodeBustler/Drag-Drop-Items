// Select all items and boxes
let items = document.querySelectorAll('.item');
let leftBox = document.querySelector('.left');
let rightBox = document.querySelector('.right');
let selected = null; // Variable to track selected item

// Enable dragging for each item
for (let item of items) {
  item.setAttribute('draggable', 'true');

  // Add dragstart event listener to set the selected item & style
  item.addEventListener('dragstart', (e) => {
    selected = e.target;
    item.classList.add('move');
  });

  item.addEventListener('dragleave', (e) => {
    item.classList.remove('move');
  });

  // Add dragover and drop event listeners to both boxes
  [leftBox, rightBox].forEach((box) => {
    box.addEventListener('dragover', (e) => e.preventDefault()); // Allow items to be dropped
    box.addEventListener('drop', (e) => {
      if (selected) {
        box.appendChild(selected); // Drop the selected item into the box
        selected = null; // Reset the selected item after dropping
      }
    });
  });
}
