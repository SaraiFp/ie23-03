let rosas = [];
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('background-color', 'black');
  textSize(12); // Tamaño de texto pequeño
  fill(255); // Color de texto blanco
}

function draw() {
  background(0);

  for (const rosa of rosas) {
    drawRosa(rosa.x, rosa.y, rosa.color);
  }

  // Dibujar el texto en la esquina inferior derecha
  text('Hacer doble clic para cambiar de color', width - 200, height - 20);
}

function mouseClicked() {
  const x = mouseX;
  const y = mouseY;

  const rosa = {
    x,
    y,
    color: color('red') // Usamos la función color() para especificar un color
  };

  rosas.push(rosa);
}

function doubleClicked() {
  const x = mouseX;
  const y = mouseY;

  for (let i = rosas.length - 1; i >= 0; i--) {
    const rosa = rosas[i];
    const distancia = dist(x, y, rosa.x, rosa.y);
    if (distancia <= 15) {
      rosa.color = color('magenta'); // Cambiamos el color a verde usando la función color()
      break;
    }
  }
}

function drawRosa(x, y, c) {
  fill(c);
  noStroke();
  for (let i = 0; i < 6; i++) {
    push();
    translate(x, y);
    rotate(TWO_PI / 6 * i);
    ellipse(20, 0, 10, 60);
    pop();
  }
}
