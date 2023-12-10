// Alumna: Ailen Avanzini // Legajo: 94717/7 // Materia: Tecno Multimedia 1 // TP5 // Profesor: Matias Jauregui Lorda // FDA // UNLP
//Link Tutorial:

let aventura; // Objeto de la clase Aventura
let juego;
let dante;
let diablo;
class Aventura {

  constructor() {
   juego = new Juego();
    // Variable que indica la pantalla actual
    this.pantallaActual = -1;

    // Número total de pantallas
    this.numPantallas = 17;

// Pasa la instancia de Aventura al constructor de Pantallas
    this.pantallas = new Pantallas(this);  

// Pasa la instancia de Aventura al constructor de Botones
    this.botones = new Botones(this); 

 // Pasa la instancia de Aventura al constructor de Textos
    this.textos = new Textos(this);

// Colores de texto y título
    this.colorTexto = color(255);
    this.colorTitulo = color(255);

  }

 
// Carga los textos necesarios
  cargarTextos(anchoPantalla, altoPantalla, tamanoTexto, espaciadoTexto) {

    this.textos.cargarTextos(anchoPantalla, altoPantalla, tamanoTexto, espaciadoTexto);

  }

// Muestra la pantalla actual
  mostrarPantalla(pantalla) {

    this.pantallas.mostrarImagenPantalla(pantalla);

    this.pantallas.mostrarTitulo(pantalla, this.colorTitulo);

    this.textos.mostrarTextoNarrativo(pantalla, this.colorTexto);

    this.botones.mostrarBotones(pantalla);
  }
  
// Cambia los colores de texto y título de manera aleatoria

  cambiarColores() {
    this.colorTexto = color(random(255), random(255), random(255));
    this.colorTitulo = color(random(255), random(255), random(255));
  }

// Verifica los botones clickeados y actualiza la pantalla
  checkBotones(pantalla) {
    return this.botones.checkBotones(pantalla);
  }
}

//Manejo de las imágenes de las pantallas
class Pantallas {
  constructor(aventura) {
    this.fotos = new Array(aventura.numPantallas);
  }

  cargarImagenes() {
    this.fotos[0] = loadImage("assets/Inicial.jpg");
    this.fotos[1] = loadImage("assets/Pantalla 1.jpg");
    this.fotos[2] = loadImage("assets/Pantalla 2.jpg");
    this.fotos[3] = loadImage("assets/Pantalla 3-1.png");
    this.fotos[4] = loadImage("assets/Pantalla 4-1.jpg");
    this.fotos[5] = loadImage("assets/Pantalla 5-1.jpg");
    this.fotos[6] = loadImage("assets/Pantalla 6.jpg");
    this.fotos[7] = loadImage("assets/Pantalla 7.jpg");
    this.fotos[8] = loadImage("assets/Pantalla 8-1.png");
    this.fotos[9] = loadImage("assets/Pantalla 9-1.png");
    this.fotos[10] = loadImage("assets/Pantalla 10.jpg");
    this.fotos[11] = loadImage("assets/Pantalla 11.png");
    this.fotos[12] = loadImage("assets/Pantalla 12-1.png");
    this.fotos[13] = loadImage("assets/Pantalla 13-1.png");
    this.fotos[14] = loadImage("assets/Pantalla 14-1.png");
    this.fotos[15] = loadImage("assets/Pantalla 15-1.png");
    this.fotos[16] = loadImage("assets/Creditos.jpg");
  }

 

// Muestra la imagen de la pantalla actual
  mostrarImagenPantalla(pantalla) {
    image(this.fotos[pantalla], 0, 0, width, height);
  }

// Muestra el título de la pantalla actual
  mostrarTitulo(pantalla, colorTitulo) {
    fill(colorTitulo);
    textSize(30);
    textAlign(CENTER, TOP);
    text(aventura.textos.titulosPantallas[pantalla], width / 2, 50);
  }
}

 

// Manejo de los botones de las pantallas, definicion y destino
class Botones {

  constructor(aventura) {

    this.botonesPantallas = new Array(aventura.numPantallas);
    this.botonesPantallas[0] = [1, 16];
    this.botonesPantallas[1] = [2, 7];
    this.botonesPantallas[2] = [3];
    this.botonesPantallas[3] = [4, 12];
    this.botonesPantallas[4] = [5];
    this.botonesPantallas[5] = [6];
    this.botonesPantallas[6] = [1, 0];
    this.botonesPantallas[7] = [8, 9];
    this.botonesPantallas[8] = [1, 0];
    this.botonesPantallas[9] = [10, 11];
    this.botonesPantallas[10] = [1, 0];
    this.botonesPantallas[11] = [3];
    this.botonesPantallas[12] = [13, 14, 15];
    this.botonesPantallas[13] = [1, 0, 17];
    this.botonesPantallas[14] = [1, 0];
    this.botonesPantallas[15] = [1, 0];
    this.botonesPantallas[16] = [0];
  }

 

    // Muestra los botones de la pantalla actual
  mostrarBotones(pantalla) {

    let botonesPantalla = this.botonesPantallas[pantalla];
    let numBotones = botonesPantalla.length;
    for (let i = 0; i < numBotones; i++) {
      let x = width / 2;
      let y = height / 2 + 150 + i * 50;
      if (mouseX > x - 100 && mouseX < x + 100 && mouseY > y - 20 && mouseY < y + 20) {
        fill(200);
      } else {
        fill(150);
      }
      rectMode(CENTER);
      rect(x, y, 200, 40);
      fill(0);
      let numPantalla = botonesPantalla[i];
      let textoBoton;
      if (pantalla == 0 && numPantalla == 1) {
        textoBoton = "Iniciar";
      } else if (pantalla == 0 && numPantalla == 16) {
        textoBoton = "Créditos";
      } else {
        textoBoton = "Ir a pantalla " + numPantalla;
      }
      textAlign(CENTER, CENTER);
      text(textoBoton, x, y);
    }
  }
  checkBotones(pantalla) {
//Verifica qué botón fue clickeado y actualiza la pantalla
    let botonesPantalla = this.botonesPantallas[pantalla];
    let numBotones = botonesPantalla.length;
    for (let i = 0; i < numBotones; i++) {
      let x = width / 2;
      let y = height / 2 + 150 + i * 50;
      if (mouseX > x - 100 && mouseX < x + 100 && mouseY > y - 20 && mouseY < y + 20) {
        return botonesPantalla[i];
      }
    }
    return pantalla;
  }
}



