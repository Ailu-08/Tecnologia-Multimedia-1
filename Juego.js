class Juego {
  constructor() {
    this.fireballs = [];
    this.danteLives = 3;
    this.diabloLives = 3;
    this.diabloFireballs = [];
    this.backgroundIndex = 0;
    this.manualBackgroundChangeInterval = 250;
    this.autoBackgroundChangeInterval = 1.5;
    this.manualBackgroundCounter = 0;
    this.autoBackgroundCounter = 0;
    this.gameState = "instrucciones";
    this.textSize = 32;
  }

  setup() {
    createCanvas(600, 600);
    dante = new Dante(); // Crea la instancia de Dante
    diablo = new Diablo(this.diabloImages); // Pasa las imágenes del Diablo como parámetro

    // Llama a la función createButtons en el estado de "instrucciones"
    if (this.gameState === "instrucciones") {
      this.createButtons();
    }
  }

  createButtons() {
    if (this.gameState === "instrucciones") {
      let manualButton = createButton("Jugar Manual");
      manualButton.position(5, height - 30);
      manualButton.mousePressed(() => {
        this.gameState = "juego";
        this.danteLives = 3;
        this.diabloLives = 3;
        diablo.autoMove = false;
        loop();
        manualButton.remove(); // Elimina el botón después de hacer clic
        autoButton.remove(); // Elimina el botón automáticamente si existe
      });

     let autoButton = createButton("Jugar Automático");
      autoButton.position(250, height - 30);
      autoButton.mousePressed(() => {
        this.gameState = "automatico";
        this.danteLives = 3;
        this.diabloLives = 3;
        diablo.autoMove = true;
        loop();
        manualButton.remove();
        autoButton.remove();
      });} }
  
  draw() {
  if (this.gameState === "instrucciones") {
    image(instruccionesImage, 0, 0, width, height);
  } else if (this.gameState === "ganaste") {
    image(this.winImage, 0, 0, width, height);
  } else if (this.gameState === "perdiste") {
    image(this.looseImage, 0, 0, width, height);
  }
// Verifica si ha llegado el momento de cambiar el fondo manual
    if (this.gameState === "juego") {
      if (frameCount % this.manualBackgroundChangeInterval === 0) {
        this.manualBackgroundCounter = (this.manualBackgroundCounter + 1) % this.backgroundImages.length;
      }
      image(this.backgroundImages[this.manualBackgroundCounter], 0, 0, width, height);
    }

    // Verifica si ha llegado el momento de cambiar el fondo automático
    if (this.gameState === "automatico") {
      if (frameCount % this.autoBackgroundChangeInterval === 0) {
        this.autoBackgroundCounter = (this.autoBackgroundCounter + 1) % this.backgroundImagesAuto.length;
      }
      image(this.backgroundImagesAuto[this.autoBackgroundCounter], 0, 0, width, height);
    }

    if (this.gameState === "juego" || this.gameState === "automatico") {
  
      // Movimiento y renderizado de Dante
      dante.move();
      dante.display();

      // Movimiento y renderizado del Diablo
      diablo.move();
      diablo.display();

      // Generación de bolas de fuego del Diablo
      if (frameCount % 60 === 0) {
        diablo.shootFireball(); // Llama a la función de disparo del Diablo
      }

      // Actualización y renderizado de las bolas de fuego del Diablo
      for (let i = this.diabloFireballs.length - 1; i >= 0; i--) {
        let fireball = this.diabloFireballs[i];
        if (fireball) {
          fireball.move();
          fireball.display();
          if (fireball.hits(dante)) {
            this.danteLives--;
            this.diabloFireballs.splice(i, 1);
          }
        }
      }

      // Control de vidas y fin de juego
      if (this.danteLives <= 0) {
        this.gameState = "perdiste";
      }

      if (this.diabloLives <= 0) {
        this.gameState = "ganaste";
      }
    } else if (this.gameState === "instrucciones") {
  fill(250, 230, 50); // Color
  textSize(juego.textSize); // Establece el tamaño de fuente guardado
  text("La Divina Comedia: \n Dante vs El diablo: \n Instrucciones:", 300, 25);
  textSize(20);
  fill(255, 230, 100); // Color del texto
  text("Mueve a Dante con las flechas y al diablo \n con las teclas a w s d en modo manual.", 300, 130);
  text("Presiona la barra espaciadora para disparar \n las espadas de Dante.", 300, 180);
} else if (this.gameState === "ganaste") {
      textSize(32);
      fill(0, 255, 0);
      text("Ganaste", width / 2 - 80, height / 2);
    } else if (this.gameState === "perdiste") {
      textSize(32);
      text("Perdiste", width / 2 - 80, height / 2);
    }

    // Establece el estilo y tamaño de fuente normal para los textos de vidas
    textSize(16);
    textStyle(NORMAL);

    // Evita que las vidas se muestren en instrucciones
    if (this.gameState !== "instrucciones") {
      fill(0,0,255);
      text(`Dante Lives: ${this.danteLives}`, 10, 20);
      text(`Diablo Lives: ${this.diabloLives}`, 10, 40);
    }

    if (this.gameState === "juego" || this.gameState === "automatico") {
      // Actualización y renderizado de las espadas de Dante
      for (let i = this.fireballs.length - 1; i >= 0; i--) {
        let sword = this.fireballs[i];
        if (sword) {
          sword.move();
          sword.display();
          if (sword.hits(diablo)) {
            this.diabloLives--;
            this.fireballs.splice(i, 1);
          } } } } }}

class Dante {
  constructor() {
    this.x = 10;
    this.y = height - 100;
    this.currentSwordIndex = 0; //Variable p/ marcar el indice de a espada actual
    this.currentDanteImageIndex = 0; //Variable p/ marcar el indice de la imagen de Dante actual

  }

  move() {
    if (keyIsDown(RIGHT_ARROW) && this.x < width - 50) {
      this.x += 5;
    }
    if (keyIsDown(LEFT_ARROW) && this.x > 50) {
      this.x -= 5;
    }
    if (keyIsDown(UP_ARROW) && this.y > 50) {
      this.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && this.y < height - 50) {
      this.y += 5;
    }
  }
  

  display() {
      image(juego.danteImages[this.currentDanteImageIndex], this.x, this.y, 100, 100);
    image(juego.swordImages[this.currentSwordIndex], this.x, this.y, 70, 70);

  }
}

class Diablo {
  constructor(diabloImages) {
    this.x = width - 130;
    this.y = height - 130; //Posición en el eje Y
    this.autoMove = false; // Bandera para el movimiento automático
    this.targetX = this.x;
    this.targetY = this.y;
    this.currentImageIndex = 0;
     // Usar las imágenes de Diablo pasadas como parámetro
    this.diabloImages = diabloImages;
  }

  move() {
    if (this.autoMove) {
      // Movimiento automático del Diablo para esquivar disparos
      if (frameCount % 60 === 0) {
        // Cambia la dirección cada segundo (ajusta según sea necesario)
        this.targetX = random(width);
        this.targetY = dante.y;
      }

      let dx = this.targetX - this.x;
      let dy = this.targetY - this.y;
      let distance = dist(this.x, this.y, this.targetX, this.targetY);

      if (distance <= 5) {
        // Llegó al destino, elige un nuevo destino
        this.targetX = random(width);
        this.targetY = random(height);
      } else {
        let speedX = dx / distance * 5; // Velocidad controlada
        let speedY = dy / distance * 5;

        this.x += speedX;
        this.y += speedY;
      }
    } else {
      // Movimiento controlado por teclas
      if (keyIsDown(65) && this.x > 50) {
        this.x -= 5;
      }
      if (keyIsDown(87) && this.y > 50) {
        this.y -= 5;
      }
      if (keyIsDown(83) && this.y < height - 50) {
        this.y += 5;
      }
      if (keyIsDown(68) && this.x < width - 50) {
        this.x += 5;
      }
    }
  }

 display() {
  if (this.autoMove) {
    // En modo automático, cambia la imagen al llegar al destino
    if (this.x === this.targetX && this.y === this.targetY) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.diabloImages.length;
    }
  }
  
  image(this.diabloImages[this.currentImageIndex], this.x, this.y, 120, 120);
}

  shootFireball() {
    let fireball = new Fireball(
      this.x,
      this.y,
      dante.x,
      dante.y,
      juego.fireballImages[this.currentImageIndex]
    );
    juego.diabloFireballs.push(fireball);
    this.currentImageIndex = (this.currentImageIndex + 1) % juego.fireballImages.length;
  }
}

class Fireball {
  constructor(x, y, targetX, targetY, image) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.speed = 5;
    this.image = image;
  }

  move() {
    let dx = this.targetX - this.x;
    let dy = this.targetY - this.y;
    let distance = dist(this.x, this.y, this.targetX, this.targetY);

    if (distance === 0 || distance <= this.speed) {
      // Eliminar la bola de fuego si la distancia es cero o menor que la velocidad
      let index = juego.diabloFireballs.indexOf(this);
      if (index !== -1) {
        juego.diabloFireballs.splice(index, 1);
      }
    } else {
      let speedX = dx / distance * this.speed;
      let speedY = dy / distance * this.speed;

      this.x += speedX;
      this.y += speedY;
    }
  }

  display() {
    image(this.image, this.x, this.y, 50, 50);
  }

  hits(character) {
    let d = dist(this.x, this.y, character.x, character.y);
    return d < 20;
  }
}

class Sword extends Fireball {
  constructor(x, y, targetX, targetY, image) {
    super(x, y, targetX, targetY, image);
    this.speed = 10;
  }
  move() {
    // Calcula la dirección y la distancia entre la espada y el Diablo
    let dx = diablo.x - this.x;
    let dy = diablo.y - this.y;
    let distance = dist(this.x, this.y, diablo.x, diablo.y);

    if (distance === 0 || distance <= this.speed) {
      // Eliminar la espada si la distancia es cero o menor que la velocidad
      let index = juego.fireballs.indexOf(this);
      if (index !== -1) {
        juego.fireballs.splice(index, 1);
      }
    } else {
      // Calcula la velocidad de la espada en función de la posición del Diablo
      let speedX = dx / distance * this.speed;
      let speedY = dy / distance * this.speed;

      // Actualiza la posición de la espada
      this.x += speedX;
      this.y += speedY;
    }
  }

  display() {
    stroke(255, 0, 0);
    strokeWeight(2);
    image(this.image, this.x, this.y, 60, 60); // Muestra la imagen de la espada
  }
}
