const canvas = document.getElementById("pookkalamCanvas");
const ctx = canvas.getContext("2d");

// Function to resize canvas dynamically
function resizeCanvas() {
  canvas.width = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.7);
  canvas.height = canvas.width; // keep it square
  drawPookkalam();
}

// Function to draw circle
function drawCircle(radius, color) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Function to draw petals
function drawPetals(radius, petalCount, color) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const petalRadius = canvas.width * 0.08; // relative size

  for (let i = 0; i < petalCount; i++) {
    const angle = (i * 2 * Math.PI) / petalCount;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.arc(x, y, petalRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

// Main function to draw pookkalam
function drawPookkalam() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxRadius = canvas.width / 2.2;

  drawCircle(maxRadius, "#ffeb3b"); // yellow outer
  drawCircle(maxRadius * 0.75, "#ff5722"); // orange middle
  drawCircle(maxRadius * 0.5, "#4caf50"); // green inner
  drawCircle(maxRadius * 0.25, "#9c27b0"); // purple core

  drawPetals(maxRadius * 0.5, 12, "#f44336"); // red petals
  drawPetals(maxRadius * 0.8, 20, "#3f51b5"); // blue petals
}

// Resize canvas on load and window resize
window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
