// Alumna: Ailen Avanzini // Legajo: 94717/7 // Materia: Tecno Multimedia 1 // TP4 // Profesor: Matias Jauregui Lorda // FDA // UNLP
//Link Tutorial: https://youtu.be/RrhWoo9imkE

let gameState = "menu";
let rainbowColors = [];
let jumpState = "grounded";

// Imagenes

let totalPictures = 17;
let burgerImage;
let currentPicture = 0;
let Pictures = [];
let creditImages = []; 
let totalCreditImages = 22; 
let currentCreditImage = 0; // Imagen de créditos actual
let InstructionsImage;
let PerdisteImage;
let GanasteImage;
let GameImage;
let chefImage; 
let heartImage; 
let CoinImage;
let rubbishImages = []; 
let foodImages = [];
let TimeImage;
let BurgiIntroImage;
let HouseImage
let isJumping = false; // Variable para controlar si Burgi está saltando
let jumpTimer = 0; // Temporizador para controlar el cambio de imagen durante el salto
let jumpImage; // Imagen de Burgi cuando está saltando
let smallJumpImage; // Imagen de Burgi cuando está haciendo un salto corto

// Variables para el juego
let x;
let y;
let velocidady;
let velocidad;
let moverizquierda;
let moverderecha;
let canDoubleJump = true; // Variable para el doble salto
let groundY; // Altura del piso 
let jumpStrengthShort = 12; // Fuerza de salto corto 
let jumpStrengthLong = 14; // Fuerza de salto largo 

// Obstáculos Basura
let obstacles = [];
let obstacleSpeed = 5;
let obstacleSpacingMin = 400;
let obstacleSpacingMax = 600;
let obstacleWidth = 60;
let obstacleHeight = 60;

// Obstáculos Comida
let obstaclesFood = [];
let obstacleFoodSpeed = 5;
let obstacleFoodSpacingMin = 400;
let obstacleFoodSpacingMax = 600;
let obstacleFoodWidth = 60;
let obstacleFoodHeight = 60;

// Obstáculos Moneda
let obstaclesCoin = [];
let obstacleCoinSpeed = 5;
let obstacleCoinSpacingMin = 400;
let obstacleCoinSpacingMax = 600;
let obstacleCoinWidth = 50;
let obstacleCoinHeight = 50;

//Variables Timer/CHEF/Cant Recoleccion
let gameTimer = 0; // Tiempo de juego en segundos
let chefX; // Posición X del chef
let chefY; // Posición Y del chef
let chefAppeared = false; //Variable para controlar si el chef aparecio
let collectedFood = 0; // Cantidad de comida recolectada
let collectedCoins = 0; // Cantidad de monedas recolectadas

//Vidas
let lives

function preload() {
  // Carga imágenes de Rubbish
  for (let i = 1; i <= 10; i++) {
    rubbishImages.push(loadImage('assets/Rubbish ' + i + '.png'));
  }

  // Carga imágenes de comida
  for (let i = 1; i <= 13; i++) {
    foodImages.push(loadImage('assets/Food ' + i + '.png'));
  }

  for (let i = 0; i < totalPictures; i++) {
    Pictures.push(loadImage('assets/Picture (' + (i + 1) + ').png'));
  }

  for (let i = 0; i < 10; i++) {
    rainbowColors.push(color(random(255), random(255), random(255)));
  }

  burgerImage = loadImage('assets/Burgi Game.png');
  heartImage = loadImage('assets/Lives -1.png');
  CoinImage = loadImage('assets/Coin (4).png');
  chefImage = loadImage('assets/Chef (2).png');
  InstructionsImage = loadImage('assets/Crazy Burger.png');
  PerdisteImage = loadImage('assets/Burgi Raw.png');
  GanasteImage = loadImage('assets/Burgi Won.png');
  GameImage = loadImage('assets/Fondo CB.jpg');
  TimeImage = loadImage('assets/Time.png');
  BurgiIntroImage = loadImage('assets/Burgi Intro -1.png');
  HouseImage = loadImage('assets/House -1.png');
  jumpImage = loadImage('assets/Burgi Jump -1.png');
  smallJumpImage = loadImage('assets/Burgi Small Jump -1.png');

  for (let i = 0; i < totalCreditImages; i++) {
    creditImages.push(loadImage('assets/Imagen (' + (i + 1) + ').png'));
  }}

function setup() {
  createCanvas(600, 500); // Tamaño de la pantalla 
  groundY = height - 50; // Altura del piso 
  x = 0;
  y = groundY;
  velocidad = 5;
  velocidady = 5;
  lives = 3
  chefX = width - 50;
  chefY = groundY ;

  // Comienza el juego con un obstáculo inicial
  for (let i = 0; i < 3; i++) {
spawnObstacle();}

  // Comida
 for (let i = 0; i < 3; i++) {
spawnObstacleFood();}
   
  // Monedas
for (let i = 0; i < 3; i++) {
  spawnObstacleCoin();}}

function draw() {
 if (gameState === "menu") {
    drawMenu();
  } else if (gameState === "instrucciones") {
    drawInstructions();
  } else if (gameState === "juego") {
    drawGame();
    frameRate(60);
  } else if (gameState === "creditos") {
    drawCredits();
  } else if (gameState === "perdiste") {
    drawPerdiste();
  } else if (gameState === "ganaste") {
    drawGanaste();}}

function drawMenu() {
  background(250,150,0);
  push();
  frameRate(10);
  // Cambia la siguiente imagen de créditos
  currentPicture = (currentPicture + 1) % totalPictures;

    // Imagen de créditos actual
  image(Pictures[currentPicture], 40, 0,500,500);

  // Cambia a la siguiente imagen de créditos
  currentPicture = (currentPicture + 1) % totalPictures;
pop();
 
  textSize(50);
  textAlign(CENTER, CENTER);

  // Texto "Crazy Burger"
  fill(rainbowColors[0]);
  text("¡Crazy Burger!", width / 2, 100);

  textSize(30);
  fill(0);
  text("¡Bienvenido al Juego!", width / 2, 180);
 
  // Botón de Instrucciones
  let buttonWidth = 120;
  let buttonHeight = 50;
  let buttonX = width / 2 - buttonWidth / 2;
  let buttonY = height / 2 - 25;

  if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    fill(150);
    if (mouseIsPressed) {
      gameState = "instrucciones";
    }
  } else {
    fill(200);
  }
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  fill(0);
  textSize(20);
  text("Instrucciones", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2 + 5);

  // Botón de Jugar
  buttonY += 70; // Espaciado entre botones

  if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    fill(150);
    if (mouseIsPressed) {
      resetGame(); // Llamo a la función resetGame() cuando se inicia el juego
    }
  } else {
    fill(200);
  }
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  fill(0);
  text("Jugar", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2 + 5);

  // Botón de Créditos
  buttonY += 70; // Espaciado entre botones

  if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    fill(150);
    if (mouseIsPressed) {
      gameState = "creditos";
    }
  } else {
    fill(200);
  }
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  fill(0);
  text("Créditos", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2 + 5);}

function drawInstructions() {
  background(250,150,0);
  image(InstructionsImage, 0, 0, width, height);
  fill(255);
  strokeWeight(100);
  textSize(20);
  textAlign(LEFT);

  text(" \n El objetivo del juego es que Burgi, la hamburguesita , recolecte comida y monedas en el tiempo dado mientras que evita pudrirse al ser tocada por la basura.\n Cuando el tiempo se acaba si Burgi no perdió sus vidas aparece el chefcito y Burgi debe acercarse para ganar y que se realice el recuento de puntos obtenidos por objetos recogidos y vidas sobrantes.\n Los controles que se utilizan son: Las flechas de abajo, a la izquierda y derecha para mover al personaje. Y para los saltos: Corto: Flecha hacia arriba (Recoge solo Comida), Alto: Barra Espaciadora (Recoge comida y Monedas).\n Para volver al menú se utiliza la tecla Esc y para reiniciar el juego la tecla r.", 50, 0,500,500);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Instrucciones del Juego", 300, 50);
  textSize(16);
  text("Presiona ESC para volver al menú", width / 2, height - 30);
}

function drawGame() {
    image(GameImage, 0, 0, width, height);

  // Dibuja el piso
  fill(100);
  rect(0, groundY, width, height - groundY);

  // Dibuja las vidas en la parte superior derecha
  fill(255,0,255);
  for (let i = 0; i < lives; i++) {
image (heartImage,30*i+430,20);    }
  
  // Limito la posición horizontal de Burgi para que no se salga de la pantalla
  x = constrain(x, 0, width - 50); // Restringe x entre 0 y width - 50 (ancho de la hamburguesa)

  // Limito la posición vertical de Burgi para que no caiga por debajo del suelo
  y = constrain(y, 0, groundY - 40); // Restringe y entre 0 y groundY - 40 (altura del suelo)

// Muestra la imagen del chef y la casa si el temporizador se agota y el jugador está cerca
  if (gameTimer <= 0 && !chefAppeared) {
  chefAppeared = true;
  chefApproach = true;}
  
if (chefAppeared) {
  image(HouseImage, 380, 278, 250, 250);
  image(chefImage, chefX-30, chefY-52, 90, 90);
  
}
  // Verifica si la hamburguesa ha alcanzado al chef
  if (x + 50 > chefX && x < chefX + 50 && y + 50 > chefY) {
  gameState = "ganaste";}
  // Ciclo que mueve y muestra obstáculos Basura
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obstacle = obstacles[i];
    obstacle.x -= obstacleSpeed;

  // Dibujo Obstáculo Basura con la imagen asignada al obstáculo
    image(obstacle.image, obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);


    // Verifica colisión con la hamburguesa
    if (
      x + 50 > obstacle.x &&
      x < obstacle.x + obstacleWidth &&
      y + 50 > obstacle.y
    ) {
      if (gameState === "juego") {
      lives--; // Resta una vida
      if (lives <= 0) {
        gameState = "perdiste"; // Cambia al estado "perdiste" si se quedó sin vidas
      } }
      obstacles.splice(i, 1);
    }
    if (obstacle.x < -150) {
      spawnObstacle();
    }
    // Elimina obstáculos Basura fuera de la pantalla
    if (obstacle.x < -150) {
      obstacles.splice(i, 1);
    }
  }

  // Genera nuevos obstáculos Basura aleatoriamente
  if (frameCount % random(obstacleSpacingMin, obstacleSpacingMax) === 0) {
    spawnObstacle();
  }
 
  // Ciclo que mueve y muestra obstáculos Comida
  for (let i = obstaclesFood.length - 1; i >= 0; i--) {
    let obstacleFood = obstaclesFood[i];
    obstacleFood.x -= obstacleFoodSpeed;
    obstacleFood.y = 300;

    // Dibuja obstáculos de comida con la imagen asignada al obstáculo
  image(obstacleFood.image, obstacleFood.x, obstacleFood.y, obstacleFoodWidth, obstacleFoodHeight);

    // Verifica colisión con la hamburguesa
    if (
      x + 50 > obstacleFood.x &&
      x < obstacleFood.x + obstacleFoodWidth &&
      y-25 < obstacleFood.y && y>obstacleFood.y
    ) {
      obstaclesFood.splice(i, 1);
      spawnObstacleFood();
      collectedFood++;
    }
    if (obstacleFood.x < -150) {
      spawnObstacleFood();
    }
    // Elimina obstáculos Comida fuera de la pantalla
    if (obstacleFood.x < -150) {
      obstaclesFood.splice(i, 1);
    }
  }

  // Genera nuevos obstáculos Comida aleatoriamente
  if (frameCount % random(obstacleFoodSpacingMin, obstacleFoodSpacingMax) === 0) {
    spawnObstacleFood();
  }
 
  // Mueve y muestra obstáculos Moneda
  for (let i = obstaclesCoin.length - 1; i >= 0; i--) {
    let obstacleCoin = obstaclesCoin[i];
    obstacleCoin.x -= obstacleCoinSpeed;
    obstacleCoin.y = 200;

    // Dibujo imagen de la moneda 
  image(CoinImage, obstacleCoin.x, obstacleCoin.y, obstacleCoinWidth, obstacleCoinHeight);


    // Verifica colisión con la hamburguesa
    if (
      x + 50 > obstacleCoin.x &&
      x < obstacleCoin.x + obstacleCoinWidth &&
      y < obstacleCoin.y
    ) {
      obstaclesCoin.splice(i, 1);
      spawnObstacleCoin();
       collectedCoins++;
    }
    if (obstacleCoin.x < -150) {
      spawnObstacleCoin();
    }
    // Elimina obstáculos Moneda fuera de la pantalla
    if (obstacleCoin.x < -150) {
      obstaclesCoin.splice(i, 1);
    }
  }

  // Genera nuevos obstáculos Moneda aleatoriamente
  if (frameCount % random(obstacleCoinSpacingMin, obstacleCoinSpacingMax) === 0) {
    spawnObstacleCoin();
  }
  
 // Lógica de movimiento y salto
  if (keyIsDown(UP_ARROW) && jumpState === "grounded") {
    isJumping = true;
    jumpTimer = 20; // Cambia el valor según lo que funcione mejor
    velocidady = -jumpStrengthShort; // Salto corto
    jumpState = "jumping"; // Cambia el estado del salto
  } else if (keyIsDown(32) && canDoubleJump) {
    isJumping = true;
    jumpTimer = 20; // Cambia el valor según lo que funcione mejor
    velocidady = -jumpStrengthLong; // Salto largo (barra espaciadora)
    canDoubleJump = false;
    jumpState = "jumping"; // Cambia el estado del salto
  }
  // Restablece el estado de jumpState cuando Burgi toca el suelo
  if (y >= groundY - 40) {
    jumpState = "grounded";
    canDoubleJump = true;
  }

  // Aplica gravedad
  velocidady += 0.4;

  // Actualiza la posición vertical
  y += velocidady;

  // Limita la posición vertical para que no caiga por debajo del suelo
  if (y > groundY - 40) {
    y = groundY - 40;
    velocidady = 0;
    canDoubleJump = true;
  }
// Muestra la imagen de Burgi según su estado de salto
  if (jumpState === "jumping") {
    if (jumpTimer > 0) {
      image(smallJumpImage, x, y, 90, 90); // Salto corto
    } else {
      image(jumpImage, x, y, 90, 90); // Salto largo
    }
    jumpTimer--;
  } else {
    image(burgerImage, x, y, 90, 90); // Imagen de Burgi cuando no está saltando
  }
  
  // Movimiento de la hamburguesa hacia adelante o hacia atrás
  if (moverderecha) {
    x += velocidad;
  } else if (moverizquierda) {
    x -= velocidad;
  }
  
   // Actualizacion del temporizador
  if (gameTimer > 0) {
    gameTimer -= 1;
  }
  
  // Muestra el temporizador en la esquina superior izquierda
    textSize(20);
    fill(0);
    text(`Tiempo: ${gameTimer}`, 50, 30);
    image(TimeImage, 100, 3, 50, 50);

  
  // Muestra la cantidad de comida recolectada
  textSize(20);
  fill(0);
  text(`Comida: ${collectedFood}`, 52, 60);
  image(BurgiIntroImage, 100, 33, 50, 50);

  // Muestra la cantidad de monedas recolectadas
  textSize(20);
  fill(0);
  text(`Monedas: ${collectedCoins}`, 60, 90);
  image(CoinImage, 110, 63, 40, 40);
  
  } 

function drawCredits() {
  background(255);

  // Muestra la imagen de créditos actual
  image(creditImages[currentCreditImage], 0, -50);

  // Cambia a la siguiente imagen de créditos
  currentCreditImage = (currentCreditImage + 1) % totalCreditImages;
 
  //Texto Creditos
  fill(0);
  textSize(35);
  text('Creditos:', 300, 50);
  text('Alumna: Ailen Avanzini \n Legajo: 94717/7 \n Profesor: Matias Jauregui Lorda', 300, 230);
}

function drawPerdiste() {
  image(PerdisteImage, 0, 0, width, height);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0); // Color rojo
  text("¡Perdiste!", width / 2, height / 2);
  textSize(16);
  fill(0);
  text("Presiona ESC para volver al menú", width / 2, height - 30);
  if (key === 'r' || key === 'R') {
    resetGame(); }
}

function drawGanaste() {
  image(GanasteImage, 0, 0, width, height);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(0, 255, 0); // Color verde
  text("¡Ganaste!", width / 2, height / 2);
  textSize(16);
  fill(0);
  text("Presiona ESC para volver al menú", width / 2, height - 30);
  if (key === 'r' || key === 'R') {
    resetGame(); }
    // Muestra la cantidad de vidas restantes, comida y monedas recolectadas
    textSize(20);
    fill(0);
    text(`Vidas restantes: ${lives}`, width / 2, height / 2 + 40);
   image(heartImage,183, 263, 45, 45);
    text(`Comida recolectada: ${collectedFood}`, width / 2, height / 2 + 80);
  image(BurgiIntroImage, 160, 300, 50, 50);
    text(
      `Monedas recolectadas: ${collectedCoins}`,
      width / 2,
      height / 2 + 120
    );
    image(CoinImage, 154, 346, 40, 40);


    textSize(16);
    text("Presiona ESC para volver al menú", width / 2, height - 30); }

function keyPressed() {
  if (keyCode === ESCAPE) {
    gameState = "menu";
  }

  if (keyCode === RIGHT_ARROW) {
    moverderecha = true;
  } else if (keyCode === LEFT_ARROW) {
    moverizquierda = true;
  }

  if (key === 'r' || key === 'R') {
    resetGame(); // Llama a la función resetGame() cuando se presiona la tecla "R"
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    moverderecha = false;
  } else if (keyCode === LEFT_ARROW) {
    moverizquierda = false;
  }
}

function mouseMoved() {
  for (let i = 0; i < rainbowColors.length; i++) {
    rainbowColors[i] = color(random(255), random(255), random(255));
  }
}

  function spawnObstacle() {
  let randomRubbishImage = random(rubbishImages); // Elige una imagen aleatoria de Rubbish
  obstacles.push({
    x: width + random(200, 400), // Comienzan en el lado derecho de la pantalla
    y: groundY - obstacleHeight, // En el suelo
    image: randomRubbishImage, // Asigna la imagen aleatoria al obstáculo
  });
}

function spawnObstacleFood() {
  let randomFoodImage = random(foodImages); // Elige una imagen aleatoria de comida
  obstaclesFood.push({
    x: width + random(200, 400), // Comienzan en el lado derecho de la pantalla
    y: groundY - obstacleFoodHeight, // En el suelo
    image: randomFoodImage, // Asigna la imagen aleatoria al obstáculo de comida
  });
}

function spawnObstacleCoin() {
  obstaclesCoin.push({
    x: width + random(200, 400), // Comienzan en el lado derecho de la pantalla
    y: groundY - obstacleCoinHeight, // En el suelo
  });
}

function resetGame() {
  // Reinicia las vidas y el estado
  lives = 3;
  chefAppeared = false;
  gameTimer = 800; // Reinicia el temporizador
  x = 0; // Restablece la posición inicial de la hamburguesa
  y = groundY;
  chefX = width - 50; // Restablece la posición inicial del chef
  chefY = groundY;

  // Limpia todos los obstáculos y elementos recolectados
  obstacles = [];
  obstaclesFood = [];
  obstaclesCoin = [];
  collectedFood = 0;
  collectedCoins = 0;

  // Genera un nuevo conjunto inicial de obstáculos
  for (let i = 0; i < 3; i++) {
    spawnObstacle();
    spawnObstacleFood();
    spawnObstacleCoin();
  }

  gameState = "juego"; // Cambia el estado del juego a "juego"
}
