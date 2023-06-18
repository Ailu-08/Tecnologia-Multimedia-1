//Student: Ailu Avanzini //TP2: Coin Optical Illusion //Tecno Multimedia 1 //Comision 2 // Professor: Matias Jauregui Lorda
//Link Video Tutorial Youtube: https://www.youtube.com/watch?v=aWS2cCt4sLA&feature=youtu.be 
int m;
int c1;
int c2;
int originalC1;
int originalC2;
float sumar;
float crecer;
PImage Coin;
boolean resetButtonClicked;
boolean changeColors;
int duration = 25000; // Duration in milliseconds (25 seconds)
int originalDuration;
int elapsedSeconds;
long startTime;

void setup() {
  Coin = loadImage("Coin.jpg");
  sumar = 1500;
  crecer = 0;
  size(800, 400);
  background(255);
  c1 = color(255);  // white
  c2 = color(0);  // black
  originalC1 = c1; // Store original color value
  originalC2 = c2; // Store original color value
  m = width / 10;  // 40
  noFill();
  strokeWeight(10);

  resetButtonClicked = false;
  changeColors = false;
  originalDuration = duration; // Store the original duration value
  elapsedSeconds = 0; // Initialize elapsed seconds
  startTime = millis();
}

void draw() {
  // Image
  image(Coin, 0, 0, 400, 400);

  // Reset button
  ResetButton();

  if (millis() - startTime < duration) {
    crecer += sumar;
  }

  translate(600, 200);
  rotate(crecer);

  int numRects = 8; // Number of rectangles to fill the circle
  float angleStep = TWO_PI / numRects; // Angle between each rectangle

  for (int i = 0; i < numRects; i++) {
    float angle = i * angleStep;
    float rectX = cos(angle) * 50;
    float rectY = sin(angle) * 150; // Adjust the radius as needed

    if (changeColors) {
      rectDegradez(rectX, rectY, 54, 39, color(0, 0, random(255)), color(random(255), random(255), 255));
    } else {
      rectDegradez(rectX, rectY, 54, 39, color(c2), color(c1));
    }
  }

  // Calculate elapsed seconds
  elapsedSeconds = floor((millis() - startTime) / 1000);
  println("Elapsed seconds:", elapsedSeconds);
}

void rectDegradez(float x, float y, int a, int h, color c1, color c2) {
  for (int i = 0; i < a; i++) {
    float n = map(i, 0, a, 0, 1);
    color c = lerpColor(c1, c2, n);
    stroke(c);
    line(x + i, y, x + i, y + h);
  }
}

void ResetButton() {
  // Button Position & Size
  int buttonX = 350;
  int buttonY = 360;
  int buttonWidth = 100;
  int buttonHeight = 30;

  // Mouse in button area
  if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= buttonY && mouseY <= buttonY + buttonHeight) {
    // Change Button Color
    fill(100, 255, 0);
  } else {
    fill(200);
  }

  // Button
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Reset", buttonX + buttonWidth/2, buttonY + buttonHeight/2);
}

void mouseClicked() {
  // Mouse in button area
  if (mouseX >= 350 && mouseX <= 450 && mouseY >= 360 && mouseY <= 390) {
    // Reset variables
    crecer = random(TWO_PI); // Change rotation
    changeColors = false;
    duration = originalDuration; // Reset duration variable
    elapsedSeconds = 0; // Reset elapsed seconds
    startTime = millis(); // Reset start time
  } else {
    // Change rotation
    crecer = random(TWO_PI);
  }
}

void keyPressed() {
  // Color changes, Press any key
  changeColors = !changeColors;
}
