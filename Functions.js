function preload() {
   this.diabloImages = [];
      this.danteImages = [];
      this.fireballImages = [];
      this.swordImages = [];
      this.backgroundImages = [];
      this.backgroundImagesAuto = [];
  
    // Cargar la imagen de instrucciones
    instruccionesImage = loadImage('assets/Instructions.jpg');
    
    // Cargar la imagen de Estado Ganaste
    winImage = loadImage('assets/Win.jpg');
    
    // Cargar la imagen de Estado Perdiste
    looseImage = loadImage('assets/Loose.jpg');
    
    // Cargar las imágenes de fondo modo manual
    for (let i = 1; i <= 2; i++) {
        backgroundImages.push(loadImage(`assets/Inferno (${i}).jpg`));
    }
    
    // Cargar las imágenes de fondo para el modo automático
    for (let i = 2; i <= 24; i++) {
        backgroundImagesAuto.push(loadImage(`assets/Infierno (${i}).jpg`));
    }
    
    // Cargar las imágenes de Diablo
    for (let i = 1; i <= 4; i++) {
        diabloImages.push(loadImage(`assets/Diablo (${i}).png`));
    }
    
    // Cargar las imágenes de Dante
    for (let i = 1; i <= 4; i++) {
        danteImages.push(loadImage(`assets/Dante (${i}).png`));
    }
    
    // Cargar las imágenes de las bolas de fuego
    for (let i = 1; i <= 3; i++) {
        fireballImages.push(loadImage(`assets/Fireball (${i}).png`));
    }
    
    // Cargar las imágenes de las espadas
    for (let i = 1; i <= 3; i++) {
        swordImages.push(loadImage(`assets/Sword (${i}).png`));
    }
}
// Configuración
function setup() {

  createCanvas(600, 600);
  aventura = new Aventura(); // Inicializar la aventura
  aventura.cargarTextos(600, 600, 20, 30);
  aventura.pantallas.cargarImagenes();
  pantallaActual = 0; // Establecer la pantalla inicial

}

function draw() {
  if (pantallaActual === 17) {
    // Solo ejecuta el juego si estás en la pantalla 17
    juego.draw();
  } else {
    // Lógica normal para otras pantallas
    background(255);
    aventura.mostrarPantalla(pantallaActual);
  }
}

// Manejo de eventos Click del mouse
function mouseClicked() {
  pantallaActual = aventura.checkBotones(pantallaActual);
}

function keyPressed() {
    aventura.cambiarColores();

  if (key === " ") {
  // Cambiar la imagen de Dante
    dante.currentDanteImageIndex = (dante.currentDanteImageIndex + 1) % juego.danteImages.length;
    // Generar un número aleatorio entre 0 y 1
    let randomChance = random(1);

    // Probabilidad de éxito (ajusta el valor según tus preferencias)
    let successProbability = 0.5; //50% Acertar

    if (randomChance < successProbability) {
      // Crear una nueva "espada" si la probabilidad de éxito se cumple
      let swordImage = juego.swordImages[dante.currentSwordIndex];
      let sword = new Sword(dante.x, dante.y, diablo.x, diablo.y, swordImage);
      juego.fireballs.push(sword);
      // Actualiza el índice de la imagen de espada
      dante.currentSwordIndex = (dante.currentSwordIndex + 1) % juego.swordImages.length;
    }
  } 
  

  if (key === "r") {
    // Guarda el tamaño de fuente actual antes de reiniciar
textSize(juego.textSize);    // Reiniciar el juego
    juego.gameState = "instrucciones";
    juego.danteLives = 3;
    juego.diabloLives = 3;
    dante.x = 10;
    dante.y = height - 100;
    diablo.x = width - 130;
    diablo.y = height - 130;
    juego.fireballs = [];
    juego.diabloFireballs = [];
    // Vuelve a crear los botones en el estado de instrucciones
    juego.createButtons();
    loop(); // Reiniciar el ciclo de dibujo
  }
}