
// Alumna: Ailen Avanzini // Legajo: 94717/7 // Materia: Tecno Multimedia 1 // TP3 // Profesor: Matias Jauregui Lorda // FDA // UNLP
//Link Tutorial: https://www.youtube.com/watch?v=Mqmj5nXb_pc

// Declaración de variables
int pantallaActual = -1; // Variable que indica la pantalla actual
int numPantallas = 17; // Número total de pantallas
PImage foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16;

// Arreglo de textos narrativos
String[] titulosPantallas;
String[] textosNarrativos;

// Arreglo de botones por pantalla
int[][] botones = {
  {1, 16}, // Pantalla Inicial
  {2, 7}, // Pantalla 1
  {3}, // Pantalla 2
  {4, 12}, // Pantalla 3
  {5}, // Pantalla 4
  {6}, // Pantalla 5
  {1, 0}, // Pantalla 6 (Final)
  {8, 9}, // Pantalla 7
  {1, 0}, // Pantalla 8 (Final)
  {10, 11}, // Pantalla 9
  {1, 0}, // Pantalla 10 (Final)
  {3}, // Pantalla 11
  {13, 14, 15}, // Pantalla 12
  {1, 0}, // Pantalla 13 (Final)
  {1, 0}, // Pantalla 14 (Final)
  {1, 0}, // Pantalla 15 (Final)
  {0} // Pantalla 16 (Créditos)
};

// Colores iniciales
color colorTexto = color(255);
color colorTitulo = color(255);

void setup() {
  size(600, 600);
  pantallaActual = 0; // Establecer la pantalla inicial

  // Cargar textos
  cargarTextos(600, 600, 20, 30);

  // Cargar imágenes
  cargarImagenes();
}

void cargarTextos(int anchoPantalla, int altoPantalla, int tamanoTexto, int espaciadoTexto) {
  titulosPantallas = new String[]{
    "Pantalla Inicial: \n La Divina Comedia - Aventura Grafica",
    "Pantalla 1: La vida de Dante",
    "Pantalla 2: Perdido en el Bosque",
    "Pantalla 3: El Infierno",
    "Pantalla 4: El Purgatorio",
    "Pantalla 5: El Paraiso",
    "P6: Fina1 1: \n Original Libro: Vuelta al Mundo Mortal",
    "Pantalla 7: La Guerra",
    "Pantalla 8: Final 2: La Muerte",
    "Pantalla 9: Prisioneros de Guerra",
    "Pantalla 10: Final 3: La Felicidad",
    "Pantalla 11: Regreso al hogar",
    "P12: Desafios en \n los 9 Circulos del Averno",
    "P13: Final 4; \n El nuevo Rey del Inframundo",
    "Pantalla 14: Final 5:\n Intercambio",
    "Pantalla 15: Final 6: \n Original Pelicula: Perdon y Redencion",
    "Pantalla 16: Créditos"
  };

  textosNarrativos = new String[]{
    "TP3",
    "Dante se encuentra perdido en la vida y dudando sobre su fe. \n *Si desea Continuar el hilo del libro ir a la pantalla 2 \n *Si desea continuar el hilo de la pelicula ir a la pantalla 7",
    "Dante, perdido en un oscuro bosque, se encuentra en una encrucijada. Decide seguir a Virgilio, el poeta romano, quien lo guiará a través de los reinos de ultratumba en un viaje épico. Virgilio se convierte en su mentor y lo lleva al Infierno, el primer destino de su viaje.",
    "Dante y Virgilio descienden a través de los nueve círculos del Infierno. En cada círculo, encuentran a almas condenadas que sufren tormentos relacionados con sus pecados. Presencian horrores como el fuego, el hielo, los ríos de sangre y encuentran a personajes históricos y mitológicos, como Ulises y Cleopatra. \n *Si decide seguir el hilo del Libro ir a pantalla 4 \n *Si decide seguir el hilo de la pelicula ir a pantalla 12",
    "Dante y Virgilio emergen del Infierno y llegan al Purgatorio, una montaña con siete terrazas. Aquí, las almas se purifican a través de pruebas y sufrimientos relacionados con sus pecados. Cada terraza representa un pecado capital y Dante encuentra a personas arrepentidas a medida que avanza y enfrenta desafios cada vez mas dificiles, se purifica y aprende sobre la importancia del perdón y la penitencia en su camino a la redencion.",
    "Dante asciende a través de los nueve cielos del Paraíso. Cada cielo representa un nivel de felicidad y conocimiento celestial. En cada uno, encuentra a almas santas y recibe enseñanzas sobre la naturaleza divina, la teología y la perfección celestial. Dante es guiado por Beatriz, quien representa el amor divino y le revela la belleza y la armonía del Paraíso.",
    "En el último cielo, Dante experimenta la visión beatífica y alcanza la unión con Dios. Experimenta la plenitud de la felicidad divina y comprende la perfección y el orden del universo. Su viaje culmina volviendo al mundo mortal luego de una experiencia mística y trascendental, donde se funde con el amor y la sabiduría divina.",
    "Dante Debe ir a la guerra por lo que su esposa Beatriz se queda sola en casa con su padre y: \n *Si decide hacer un pacto con el diablo ir a la pantalla 9 \n *Si decide solo esperarlo ir a la pantalla 8",
    "Al Beatriz no hacer el pacto con el diablo el regreso y el alma de Dante no tienen un seguro por lo que muere en batalla junto con otros cruzados",
    "Dante y su ejercito vencen y capturan presos. A Dante se le da la oportunidad de fornicar con una de las reclusas que tenian como esclava ya que esta pidio complacer a los soldados a cambio de su libertad. Ante esto Dante: \n *Si decide serle fiel a su esposa ir a la pantalla 10 \n *Si decide ser infiel ir a la pantalla 11",
    "Dante regresa vivo a su Hogar luego de la batalla y es feliz con su mujer",
    "Dante regresa vivo a su hogar pero al llegar su esposa le pregunta si le habia sido fiel a lo cual el miente por lo que en la noche el Diablo aparece para reclamar el alma de Beatriz, le explica a Dante burlon sobre el pacto que hicieron que implicaba que El Diablo garantizaba la seguridad de Dante pero si este le era infiel el pago seria llevarse el alma de su mujer al infierno. Toma el alma de su inocente y destrozada esposa (mientras que esta lloraba y le reclamaba a Dante por su traicion) y se la lleva al infierno. Dante va a rescatarla con ayuda de Virgilio, un espiritu poeta.",
    "Dante se confronta con horrores y demonios ademas de ver como torturan a las almas y encontrarse con personajes que uno no creeria que estuvieran ahi hasta llegar al 9 circulo que se encuentra congelado donde se enfrenta con el Diablo. La lucha es ardua pero: *Logra Matar al Diablo Ir a la pantalla 13 *El Diablo propone un intercambio ir a la pantalla 14 *Final Original de la Pelicula ir a la Pantalla 15 ",
    "Al quedarse el infierno sin su señor se cierra por lo que Dante decide asumir el trono y quedarse a vivir alli con su esposa. ",
    "El Diablo interesado por el alma valiente de Dante propone intercambiar su vida por la de Beatriz para que esta pueda ser liberada al cielo. Dante acepta, el Diablo la libera y la pareja se besa hasta que beatriz desaparece envuelta en la luz de un angel mientras que Dante queda condenado a sufrir en el infierno siendo torturado por el Diablo en el circulo de los traidores por toda la eternidad.",
    "Dante vence al Diablo y sacrifica su vida para salvar a Beatriz lo que resulta en que ambos alcancen la salvacion y encuentren redencion en el mas alla",
    "Directora/Artista/Programadora/Alumna: Ailen Avanzini \n Legajo: 94717/7 \n Profesor: Matias Jauregui Lorda \n Obra: La divina comedia \n  Autor: Dante Alighieri"
  };

  // Ajustar el tamaño y espaciado del texto para que se ajuste a la pantalla
  for (int i = 0; i < textosNarrativos.length; i++) {
    String texto = textosNarrativos[i];
    textosNarrativos[i] = ajustarTexto(texto, anchoPantalla - 100, altoPantalla - 100, tamanoTexto, espaciadoTexto);
  }
}

String ajustarTexto(String texto, int ancho, int alto, int tamanoTexto, int espaciadoTexto) {
  String[] palabras = texto.split(" ");
  String textoAjustado = "";
  String lineaActual = "";

  for (String palabra : palabras) {
    if (textWidth(lineaActual + " " + palabra) < ancho) {
      lineaActual += palabra + " ";
    } else {
      textoAjustado += lineaActual + "\n";
      lineaActual = palabra + " ";
    }
  }

  textoAjustado += lineaActual;

  if (textAscent() + textDescent() * (textoAjustado.split("\n").length - 1) > alto) {
    tamanoTexto -= 2;
    espaciadoTexto -= 2;
    return ajustarTexto(texto, ancho, alto, tamanoTexto, espaciadoTexto);
  }

  textSize(tamanoTexto);
  textAlign(CENTER, CENTER);
  return textoAjustado;
}

void cargarImagenes() {
  foto0 = loadImage("Inicial.jpg");
  foto1 = loadImage("Pantalla 1.jpg");
  foto2 = loadImage("Pantalla 2.jpg");
  foto3 = loadImage("Pantalla 3.png");
  foto4 = loadImage("Pantalla 4.jpg");
  foto5 = loadImage("Pantalla 5.jpg");
  foto6 = loadImage("Pantalla 6.jpg");
  foto7 = loadImage("Pantalla 7.jpg");
  foto8 = loadImage("Pantalla 8.png");
  foto9 = loadImage("Pantalla 9.png");
  foto10 = loadImage("Pantalla 10.jpg");
  foto11 = loadImage("Pantalla 11.png");
  foto12 = loadImage("Pantalla 12.png");
  foto13 = loadImage("Pantalla 13.png");
  foto14 = loadImage("Pantalla 14.png");
  foto15 = loadImage("Pantalla 15.png");
  foto16 = loadImage("Creditos.jpg");
}

void draw() {
  background(255);
  textAlign(CENTER, CENTER);

  // Mostrar imagen/foto de la pantalla actual
  mostrarImagenPantalla(pantallaActual);

  // Dibujar rectángulo negro con transparencia
  fill(0, 100); // Color negro con opacidad de 100
  rectMode(CORNER);
  rect(0, 0, width, height);

  // Mostrar título de la pantalla actual
  fill(colorTitulo);
  textSize(30);
  text(titulosPantallas[pantallaActual], width / 2, 50);

  // Mostrar texto narrativo
  fill(colorTexto);
  textSize(20);
  text(textosNarrativos[pantallaActual], width / 2, height / 2 - 50);

  // Mostrar botones
  mostrarBotones();
}

void mostrarImagenPantalla(int pantalla) {
  switch (pantalla) {
    case 0:
      image(foto0, 0, 0, width, height);
      break;
    case 1:
      image(foto1, 0, 0, width, height);
      break;
    case 2:
      image(foto2, 0, 0, width, height);
      break;
    case 3:
      image(foto3, 0, 0, width, height);
      break;
    case 4:
      image(foto4, 0, 0, width, height);
      break;
    case 5:
      image(foto5, 0, 0, width, height);
      break;
    case 6:
      image(foto6, 0, 0, width, height);
      break;
    case 7:
      image(foto7, 0, 0, width, height);
      break;
    case 8:
      image(foto8, 0, 0, width, height);
      break;
    case 9:
      image(foto9, 0, 0, width, height);
      break;
    case 10:
      image(foto10, 0, 0, width, height);
      break;
    case 11:
      image(foto11, 0, 0, width, height);
      break;
    case 12:
      image(foto12, 0, 0, width, height);
      break;
    case 13:
      image(foto13, 0, 0, width, height);
      break;
    case 14:
      image(foto14, 0, 0, width, height);
      break;
    case 15:
      image(foto15, 0, 0, width, height);
      break;
    case 16:
      image(foto16, 0, 0, width, height);
      break;
    default:
      break;
  }
}

void mostrarBotones() {
  int[] botonesPantalla = botones[pantallaActual];
  int numBotones = botonesPantalla.length;
  for (int i = 0; i < numBotones; i++) {
    float x = width / 2;
    float y = height / 2 + 150 + i * 50;

    if (mouseX > x - 100 && mouseX < x + 100 && mouseY > y - 20 && mouseY < y + 20) {
      fill(200);
    } else {
      fill(150);
    }

    rectMode(CENTER);
    rect(x, y, 200, 40);

    fill(0);
    int numPantalla = botonesPantalla[i];
    String textoBoton;

    if (pantallaActual == 0 && numPantalla == 1) {
      textoBoton = "Iniciar";
    } else if (pantallaActual == 0 && numPantalla == 16) {
      textoBoton = "Créditos";
    } else {
      textoBoton = "Ir a pantalla " + numPantalla;
    }

    text(textoBoton, x, y);
  }
}

void keyPressed() {
  if (key == 'b' || key == 'B') {
    colorTexto = color(255);
    colorTitulo = color(255);
  } else {
    colorTexto = color(random(255), random(255), random(255));
    colorTitulo = color(random(255), random(255), random(255));
  }
}

void mouseClicked() {
  int[] botonesPantalla = botones[pantallaActual];
  int numBotones = botonesPantalla.length;
  for (int i = 0; i < numBotones; i++) {
    float x = width / 2;
    float y = height / 2 + 150 + i * 50;

    if (mouseX > x - 100 && mouseX < x + 100 && mouseY > y - 20 && mouseY < y + 20) {
      pantallaActual = botonesPantalla[i];

      if (pantallaActual == 16 && botonesPantalla[i] == 0) {
        pantallaActual = 0;
      }
    }
  }
}
