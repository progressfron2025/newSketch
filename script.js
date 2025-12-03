const grid = document.getElementById("grid");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const cellsInput = document.getElementById("cellsInput");

let isDrawing = false;

// حجم گرید را بساز
function generateGrid(count) {
  grid.innerHTML = "";

  // محاسبه تعداد ستون‌ها: √N
  const columns = Math.ceil(Math.sqrt(count));
  const cellSize = `${100 / columns}%`;

  document.documentElement.style.setProperty("--cell-size", cellSize);

  for (let i = 0; i < count; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
}

// رنگ تصادفی
function randomColor() {
  return `hsl(${Math.random() * 360}, 80%, 60%)`;
}

// Event: رسم با ماوس
grid.addEventListener("mousedown", () => (isDrawing = true));
grid.addEventListener("mouseup", () => (isDrawing = false));
grid.addEventListener("mouseleave", () => (isDrawing = false));

grid.addEventListener("mousemove", e => {
  if (!isDrawing) return;
  if (e.target.classList.contains("cell")) {
    e.target.style.background = randomColor();
  }
});

// Event: کلیک یک سلول → رنگ شود
grid.addEventListener("click", e => {
  if (e.target.classList.contains("cell")) {
    e.target.style.background = randomColor();
  }
});

// ساخت گرید با دکمه
generateBtn.addEventListener("click", () => {
  const count = Number(cellsInput.value);
  if (!count || count < 1) {
    alert("Enter a valid number.");
    return;
  }
  generateGrid(count);
});

// ریست کامل
resetBtn.addEventListener("click", () => {
  grid.innerHTML = "";
});
