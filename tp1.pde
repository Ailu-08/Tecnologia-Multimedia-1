//tp1
//tp1:Gatos
//Legajo(94717/7)
//Ailu Avanzini
//Prof Matias Jauregui Lorda

//Declaracion de variables
float elcontador;
float suma;
//Color Ramdom
float R;
float G;
float B;
// Texto Pantalla Inicial
float texto1;
float texto2;
//opacidad texto
float tiempotexto=0;
float opacidad;
float tiempotexto2=0;
float opacidad2;
boolean limite = true;
boolean limite2 = true;

// Texto Pantalla Dos
String texto3;
int Movimtext;

// Texto Pantalla tres
String texto4;
int Movimtext2;

// Texto Pantalla cuatro
String texto5;
int Movimtext3;

// Texto Pantalla7
String texto7;
float Pan;
int Chau;

// Animaciones Pantalla Final
float Sol;
float Sol2;
float Sol3;
float Sol4;
float Sol5;
float Sol6;
float Sol7;
float Sol8;
float Sol9;
float Sol10;
float Sol11;
float Sol12;
float Sol13;
float Sol14;
float Sol15;
float Sol16;
float Sol17;
float Sol18;
float Sol19;
float Star;


String activarboton;
String logicaestado;

PImage Cat0;
PImage Cat1;
PImage Cat2;
PImage Cat3;
PImage Cat4;
PImage Cat5;
PImage Cat6;
PImage Cat7;

//fuente
PFont fuentea;

void setup() {

  Cat0=loadImage("CatBlack0.jpg");
  Cat1=loadImage("Cats1.jpg");
  Cat2=loadImage("Cats2.jpg");
  Cat3=loadImage("Cats3.jpg");
  Cat4=loadImage("CatsMeme1.jpg");
  Cat5=loadImage("CatsMeme2.jpg");
  Cat6=loadImage("CatsParty7.jpg");
  Cat7=loadImage("CatJumpFinal.jpg");
  size(640, 480);
  fuentea  = loadFont("Arial-Black-20.vlw");
  elcontador=0;
  activarboton="falso";
  logicaestado="estadoinicial";
  suma=1;

  texto1=0;
  texto2=0;
  texto3="El gato doméstico (Felis silvestris catus), \n llamado más comúnmente gato,\n y de forma coloquial minino, michi, etc, \n es un mamífero carnívoro de la familia\n Felidae. \n Es una subespecie domesticada gracias a \n la convivencia del ser humano \n con el gato montés.";
  Movimtext=1;
  texto4="El nombre actual en muchas lenguas \n proviene del latín vulgar catus. \n Paradójicamente, catus aludía \n a los gatos salvajes,\n mientras que los gatos domésticos \n eran llamados felis.";
  Movimtext2=5;
  texto5="Como resultado de mutaciones genéticas,\n cruzamiento y selección artificial, \n hay numerosas razas. \n Algunas, como la raza sphynx o la peterbald \n están desprovistas de pelo; \n otras carecen de cola, \n como los gatos de la raza bobtail o \n la manx, y algunas tienen coloraciones atípicas, \n como los llamados gatos azules.";
  Movimtext3=240;
  texto7="¡Dale que Aprobamos!";
  Chau=10;
  Pan=1;

  //Animaciones Pantalla Final
  Star= random(10, 40);

  Sol= random(-150, 0);
  Sol2= random(-150, 0);
  Sol3= random(-150, 0);
  Sol4= random(-150, 0);
  Sol5= random(-150, 0);
  Sol6= random(-150, 0);
  Sol7= random(-150, 0);
  Sol8= random(-150, 0);
  Sol9= random(-150, 0);
  Sol10= random(-150, 0);
  Sol11= random(-150, 0);
  Sol12= random(-150, 0);
  Sol13= random(-150, 0);
  Sol14= random(-150, 0);
  Sol15= random(-150, 0);
  Sol16= random(-150, 0);
  Sol17= random(-150, 0);
  Sol18= random(-150, 0);
  Sol19= random(-150, 0);
}

void draw() {

  //Contador
  println("Contador:");
  println(elcontador);

  //Guia Pos Mouse
  println("X:");
  println(mouseX);
  println("Y:");
  println(mouseY);


  //Configuraciones Boton

  if (mousePressed) {
    if (mouseX>0 && mouseX<100 && mouseY>380 && mouseY<480) {
      activarboton="verdadero";
    }
  }

  if (activarboton=="verdadero") {
    elcontador=elcontador+suma;
  }

  //Configuracion estado inicial

  if (logicaestado=="estadoinicial") {

    //Movimiento Texto/con vel

    //''Fondo'' Bajo Imagen (Pantalla Inicial)
    fill(255, 0, 0);
    rect(0, 0, 640, 480);


    //Imagen Inicio
    image(Cat0, 0, 0, 640, 480);

    //Boton Inicio
    fill(200);
    fill(255);
    rect(0, 380, 100, 100);
    fill(0, 255, 0);
    textSize(30);
    text("Iniciar", 7, 440);


    //Titulos
    textSize(texto1);
    text("GATOS", texto1+50, 300);


    text("TP1", 279, texto1);
    if (texto1 <= 50) {
      texto1=texto1+0.5;
    }
    if (texto2>=216) {
      texto2=216;
    }

    if (elcontador>200) {
      logicaestado="estadodos";
    }
  } else if (logicaestado=="estadodos") {

    //''Fondo'' Bajo Imagen (Pantalla Dos)
    fill(0, 255, 0);
    rect(0, 0, 640, 480);

    image(Cat1, 0, 0, 640, 480);
    textSize(30);
    fill(255);
    text(texto3, 0, Movimtext++);


    if (elcontador>400) {
      logicaestado="estadotres";
    }
  } else if (logicaestado=="estadotres") {
    //''Fondo'' Bajo Imagen (Pantalla Tres)
    fill(0, 0, 255);
    rect(0, 0, 640, 480);

    image(Cat2, 0, 0, 640, 480);
    textSize(30);
    fill(23, 18, 198);
    text(texto4, Movimtext2++, 200);

    if (elcontador>600) {
      logicaestado="estadocuatro";
    }
  } else if (logicaestado=="estadocuatro") {

    //''Fondo'' Bajo Imagen (Pantalla Cuatro)
    fill(0, 255, 255);
    rect(0, 0, 640, 480);

    image(Cat3, 0, 0, 640, 480);
    textSize(30);
    fill(200, 20, 200);
    text(texto5, 0, Movimtext3--);


    if (elcontador>800) {
      logicaestado="estadocinco";
    }
  } else if (logicaestado=="estadocinco") {

    //''Fondo'' Bajo Imagen (Pantalla Cinco)
    if (limite && opacidad <= 255) {
      
      tiempotexto++;
      opacidad = map(tiempotexto, 0, 100, 0, 255);
    }else{
      limite=false;
      tiempotexto=0;
    }
      
    fill(0, 200, 200);
    rect(0, 0, 640, 480);
    fill(329, 97, 99,opacidad);
    image(Cat4, 0, 0, 640, 480);
    text("-Ei, ¿Que te pasa?", 17, 198);
    push();
    textSize(17);
    text("-Nada aca concentrado\n terminando el TP de Tecno.", 385, 200);
    pop();
    push();
    textSize(20);
    text("-¿Y a vos que te pasa?", 7, 462);
    pop();
    push();
    textSize(20);
    text("-Estoy preocupado\n no quiero desaprobar.", 207, 430);
    pop();
    push();
    textSize(17);
    text("-Tranquilo, no te preocupes\n que vas a aprobar. Además\n al profe le gustan los gatitos..", 427, 383);
    pop();
    if (elcontador>1000) {
      logicaestado="estadoseis";
    }
  } else if (logicaestado=="estadoseis") {

    //''Fondo'' Bajo Imagen (Pantalla Seis)
    fill(0, 100, 100);
    rect(0, 0, 640, 480);
    image(Cat5, 0, 0, 640, 480);
 
if (limite2 && opacidad2 <= 255) {
      tiempotexto2++;
      opacidad2 = map(tiempotexto2, 0, 100, 0, 255);
    }else{
      limite2=false;
      tiempotexto2=0;
    }
      
    push();
    fill(0,opacidad2);
    text("Toda la comisión Dos:", 192, 25);
    fill(255,opacidad2);
    text("Profe, Aprobanos porfa", 130, 240);
    text("Los que la tienen clara:", 186, 300);
    pop();
    if (elcontador>1200) {
      logicaestado="estadosiete";
    }
  } else if (logicaestado=="estadosiete") {

    //''Fondo'' Bajo Imagen (Pantalla Siete)
    fill(0, 100, 100);
    rect(0, 0, 640, 480);

    image(Cat6, 0, 0, 640, 480);

    textSize(50);
    fill(0, 255, 255);
    text(texto7, Pan/2, 50);
    text(texto7, Pan/2, 300);
    Pan=Pan+Chau;
    if (Pan>=400) Pan= random(0, 400);

    if (elcontador>1400) {
      logicaestado="estadofinal";
    }
  } else if (logicaestado=="estadofinal") {

    //''Fondo'' Bajo Imagen (Pantalla Final)
    fill(0);
    rect(0, 0, 640, 480);
    image(Cat7, 0, 0, 640, 480);
    R = random(255);
    G = random(255);
    B = random(255);
    fill(R, G, B);
    textSize(20);
    push();
    textFont(fuentea);
    text("Profesor: \n Matias \n Comision: 2 ", 373, 24);
    text("Presentacion realizada por: \n Ailen Avanzini ", 7, 324);
    pop();

    //Configuracion de Animaciones
    Sol=Sol+Chau;
    Sol2=Sol2+Chau;
    Sol3=Sol3+Chau;
    Sol4=Sol4+Chau;
    Sol5=Sol5+Chau;
    Sol6=Sol6+Chau;
    Sol7=Sol7+Chau;
    Sol8=Sol8+Chau;
    Sol9=Sol9+Chau;
    Sol10=Sol10+Chau;
    Sol11=Sol11+Chau;
    Sol12=Sol12+Chau;
    Sol13=Sol14+Chau;
    Sol14=Sol14+Chau;
    Sol15=Sol15+Chau;
    Sol16=Sol16+Chau;
    Sol17=Sol17+Chau;
    Sol18=Sol18+Chau;
    Sol19=Sol19+Chau;

    if (Sol>400)  Sol= random(-150, 0);
    if (Sol2>400) Sol2= random(-150, 0);
    if (Sol3>400) Sol3= random(-150, 0);
    if (Sol4>400) Sol4= random(-150, 0);
    if (Sol5>400) Sol5= random(-150, 0);
    if (Sol6>400) Sol6= random(-150, 0);
    if (Sol7>400) Sol7= random(-150, 0);
    if (Sol8>400) Sol8= random(-150, 0);
    if (Sol9>400) Sol9= random(-150, 0);
    if (Sol10>400) Sol10= random(-150, 0);
    if (Sol11>400) Sol11= random(-150, 0);
    if (Sol12>400) Sol12= random(-150, 0);
    if (Sol13>400) Sol13= random(-150, 0);
    if (Sol14>400) Sol14= random(-150, 0);
    if (Sol15>400) Sol15= random(-150, 0);
    if (Sol16>400) Sol16= random(-150, 0);
    if (Sol17>400) Sol17= random(-150, 0);
    if (Sol18>400) Sol18= random(-150, 0);
    if (Sol19>400) Sol19= random(-150, 0);

    //Animaciones Pantalla Final
    push();
    fill(3, 255, 253);
    noStroke();
    quad(309, 52, 335, 19, 360, 52, 335, 80);
    rectMode(CENTER);
    square(335, 50, Star);
    Star= random(10, 40);
    pop();
    stroke(255);
    strokeWeight(3);
    point(20, Sol+10);
    point(40, Sol2+10);
    point(60, Sol3+10);
    point(80, Sol4+10);
    point(100, Sol5+10);
    point(120, Sol6+10);
    point(140, Sol7+10);
    point(160, Sol8+10);
    point(180, Sol9+10);
    point(200, Sol10+10);
    point(220, Sol11+10);
    point(240, Sol12+10);
    point(260, Sol13+10);
    point(280, Sol14+10);
    point(300, Sol15+10);
    point(320, Sol16+10);
    point(340, Sol17+10);
    point(360, Sol18+10);
    point(380, Sol19+10);
    //Boton Reinicio

    fill(255);
    rect(550, 380, 100, 100);
    fill(0, 255, 255);
    text("Reiniciar", 560, 438);
  }
}

void mousePressed() {
  if (logicaestado=="estadofinal") {
    if (mouseX>550 && mouseX<640 && mouseY>380 && mouseY<480) {
      logicaestado="estadoinicial";
      elcontador=0;
      activarboton="falso";
      texto1=0;
      limite=true;
      limite2=true;
      opacidad=0;
      opacidad2=0;
      tiempotexto= 0;
      tiempotexto2= 0;
      Movimtext=0;
      Movimtext2=0;
      Movimtext3=240;
      rectMode(CORNER);
      texto2=0;
    }
  }
}
