function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(32, 70, 42);
  translate(width / 2, height / 2);

  // =========================
  // OUTER FLOWER BORDER
  // =========================

  noStroke();
  fill(205, 120, 25);
  circle(0, 0, 570);

  fill(255, 235, 185);
  circle(0, 0, 530);

  for (let i = 0; i < 24; i++) {
    push();
    rotate(i * 15);

    fill(255, 190, 35);
    ellipse(0, -270, 38, 72);
    ellipse(-20, -262, 30, 62);
    ellipse(20, -262, 30, 62);

    fill(225, 125, 25);
    circle(0, -260, 16);

    pop();
  }

  // =========================
  // CREAM SEPARATION LINE
  // =========================
  noFill();
  stroke(255, 235, 185);
  strokeWeight(10);
  circle(0, 0, 390);

  // =========================
  // ORANGE PETAL RING
  // =========================
  noStroke();

  for (let i = 0; i < 20; i++) {
    push();
    rotate(i * 18);

    fill(235, 105, 25);
    ellipse(0, -200, 42, 82);

    pop();
  }

  // =========================
  // NEW SOLID RING LAYER (Between Orange & Yellow Petals)
  // =========================
  fill(160, 35, 35); // Deep red/maroon contrast ring
  circle(0, 0, 340);

  fill(255, 235, 185); // Cream inner border for the ring
  circle(0, 0, 310);

  // =========================
  // YELLOW INNER PETAL RING
  // =========================
  for (let i = 0; i < 16; i++) {
    push();
    rotate(i * 22.5);

    fill(255, 195, 40);
    ellipse(0, -140, 38, 75);

    pop();
  }

  // =========================
  // GREEN LEAF RING
  // =========================
  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * 30);

    fill(70, 125, 55);
    ellipse(0, -112, 18, 42);

    pop();
  }

  // =========================
  // CREAM CENTRE
  // =========================
  fill(255, 242, 205);
  circle(0, 0, 220);

  // =========================
  // SMALL ORANGE FLOWERS
  // =========================
  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * 45);

    fill(235, 105, 25);
    ellipse(0, -88, 25, 48);

    fill(255, 195, 40);
    circle(0, -88, 9);

    pop();
  }

  // =========================
  // LOTUS GREEN BASE LEAVES
  // =========================
  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * 45 + 22.5);

    fill(32, 70, 42);
    ellipse(0, -48, 24, 60);

    pop();
  }

  // =========================
  // PINK LOTUS
  // =========================
  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * 45);

    fill(225, 95, 140);
    ellipse(0, -43, 34, 78);

    pop();
  }

  // Inner lotus petals
  for (let i = 0; i < 6; i++) {
    push();
    rotate(i * 60);

    fill(245, 130, 165);
    ellipse(0, -28, 28, 55);

    pop();
  }

  // Lotus centre
  fill(190, 55, 105);
  circle(0, 0, 45);

  // =========================
  // MAHABALI CROWN
  // =========================
  fill(245, 180, 35);
  stroke(150, 85, 15);
  strokeWeight(3);

  beginShape();
  vertex(-27, 12);
  vertex(-22, -13);
  vertex(-9, -2);
  vertex(0, -22);
  vertex(9, -2);
  vertex(22, -13);
  vertex(27, 12);
  endShape(CLOSE);

  // Crown band
  fill(255, 210, 60);
  rect(-29, 10, 58, 10, 3);

  // Jewels
  noStroke();
  fill(185, 45, 45);
  circle(-17, 18, 6);
  circle(0, 18, 6);
  circle(17, 18, 6);
}

