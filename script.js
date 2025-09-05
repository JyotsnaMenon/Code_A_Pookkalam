const canvas = document.getElementById("pookkalamCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const size = Math.min(window.innerWidth * 0.9, 500);
  canvas.width = size;
  canvas.height = size;
  drawPookkalam();
}

// Utility: Draw a circle
function drawCircle(radius, color) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Utility: Draw petals
function drawPetals(radius, petalCount, petalRadius, color) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

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

// Main design
function drawPookkalam() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxRadius = canvas.width / 2;

  // Layer 1: Outer yellow base
  drawCircle(maxRadius, "#ffeb3b");

  // Layer 2: Red petal ring
  drawPetals(maxRadius * 0.8, 20, canvas.width * 0.08, "#f44336");

  // Layer 3: Green middle circle
  drawCircle(maxRadius * 0.55, "#4caf50");

  // Layer 4: Purple petals inside
  drawPetals(maxRadius * 0.4, 12, canvas.width * 0.06, "#9c27b0");

  // Layer 5: Orange inner circle
  drawCircle(maxRadius * 0.25, "#ff9800");

  // Layer 6: Decorative white dots in core
  drawPetals(maxRadius * 0.15, 8, canvas.width * 0.02, "#ffffff");
}

// Redraw when page loads or resizes
window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
