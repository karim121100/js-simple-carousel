const items = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
let index = 0;

function show() {
  document.getElementById("item").textContent = items[index];
}

function next() {
  index = (index + 1) % items.length;
  show();
}

function prev() {
  index = (index - 1 + items.length) % items.length;
  show();
}

show();
