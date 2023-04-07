//TP0--Ailu-Avanzini-Legajo: 94717/7-Comision-2-Dibujo:''Queso Cat''//
PImage gato;
float m=10;
void setup() { 
  background (30);
  size(800,400);
  fill(0,0,10,100);
  rect(0,0,800,400);
  gato= loadImage("QuesoCatTP0.jpg");
}
void draw(){
  //FLoor 
  fill(100);
  
  line(405,0,405,400);
  line(410,0,410,400);
  line(415,0,415,400);
  line(420,0,420,400);
  line(425,0,425,400);
  line(430,0,430,400);
  line(435,0,435,400);
  line(440,0,440,400);
  line(445,0,445,400);
  line(450,0,450,400);
  line(455,0,455,400);
  line(460,0,460,400);
  line(465,0,465,400);
  line(470,0,470,400);
  line(475,0,475,400);
  line(480,0,480,400);
  line(485,0,485,400);
  line(490,0,490,400);
  line(495,0,495,400);
  line(500,0,500,400);
  line(505,0,505,400);
  line(510,0,510,400);
  line(515,0,515,400);
  line(520,0,520,400);
  line(525,0,525,400);
  line(530,0,530,400);
  line(535,0,535,400);
  line(540,0,540,400);
  line(545,0,545,400);
  line(550,0,550,400);
  line(555,0,555,400);
  line(560,0,560,400);
  line(565,0,565,400);
  line(570,0,570,400);
  line(575,0,575,400);
  line(580,0,580,400);
  line(585,0,585,400);
  line(590,0,590,400);
  line(595,0,595,400);
  line(600,0,600,400);
  line(605,0,605,400);
  line(610,0,610,400);
  line(615,0,615,400);
  line(620,0,620,400);
  line(625,0,625,400);
  line(630,0,630,400);
  line(635,0,635,400);
  line(640,0,640,400);
  line(645,0,645,400);
  line(650,0,650,400);
  line(655,0,655,400);
  line(660,0,660,400);
  line(665,0,665,400);
  line(670,0,670,400);
  line(675,0,675,400);
  line(680,0,680,400);
  line(685,0,685,400);
  line(690,0,690,400);
  line(695,0,695,400);
  line(700,0,700,400);
  line(705,0,705,400);
  line(710,0,710,400);
  line(715,0,715,400);
  line(720,0,720,400);
  line(725,0,725,400);
  line(730,0,730,400);
  line(735,0,735,400);
  line(740,0,740,400);
  line(745,0,745,400);
  line(750,0,750,400);
  line(755,0,755,400);
  line(760,0,760,400);
  line(765,0,765,400);
  line(770,0,770,400);
  line(775,0,775,400);
  line(780,0,780,400);
  line(785,0,785,400);
  line(790,0,790,400);
  line(795,0,795,400);
  line(800,0,800,400);
  
 
 image(gato,0,0,400,450);
 
  
  //Texto: Nombre del gato:
  push();
 fill(0,0,255);
 strokeWeight(200);
 textSize(20);
 text("Queso Cat",491,38);
 text("TP 0",421,38);
 text("Ailu Avanzini",603,38);
 pop();
 
 //Lines sin el noStroke con color gris fueron dejadas a proposito para marcar un poco mas el dibujo
  
   //Tail
  stroke(100);
  fill(250);
  arc(595,240,55,170,300,305);
  noStroke();
  circle(591,162,13);
  
  //Body
  fill(255);
  stroke(100);
  strokeWeight(1);
  ellipse (574,285,100,90);
  ellipse(574,250,80,70);
  
  //Nose
  stroke(100);
  strokeWeight(1);
  ellipseMode(CENTER);
  ellipse(575,270,37,25);
  line(568,244,568,256);
  line(582,244,582,256);
  fill(250,172,172);
  triangle(568,256,575,270,582,256);
  push();
  stroke(0);
  strokeWeight(2);
  line(575,270,575,281);
  pop();
  
  //Whiskers
   line(590,263,610,249);
  line(593,269,609,262);
  line(593,274,604,272);
  
  line(560,263,538,249);
  line(556,269,540,262);
  line(556,274,545,273);
  
  //Eyes
  fill(255);
  stroke(50);
  strokeWeight(1);
  ellipse(558,240,20,20);
  ellipse(592,240,20,20);
  
  //Eye Color
  fill(0,250,0);
  ellipse(558,240,13,13);
  fill(0,0,255);
  ellipse (592,240,13,13);
  
  //Pupils
  fill(0);
  circle(558,238,9);
  circle(592,238,9);
  stroke(255);
  strokeWeight(3);
  point(558,236);
  point(592,236);
    
  //Ears
  stroke(255);
  strokeWeight(2);
  fill(245,180,180);
  triangle(580,215,610,232,610,188);
  triangle(538,235,538,189,567,216);
  
  //Hairs (Tail/Body/Ears)
push();
stroke(255);
strokeWeight(0);

line(596,155,600,145);
line(602,156,606,150);
line(606,160,611,153);
line(610,164,615,157);
line(612,169,617,163);
line(614,174,620,169);
line(614,180,621,176);
line(615,183,622,181);
line(618,188,625,184);
line(618,193,625,189);
line(620,203,630,200);
line(621,207,631,205);
line(620,219,629,219);
line(622,229,630,232);
line(622,238,630,239);
line(622,246,630,246);
line(622,252,630,252);

stroke(255);
line(554,324,554,333);
line(559,329,559,334);
line(566,331,566,335);
line(572,330,572,335);
line(578,330,578,335);
line(584,329,584,334);
line(589,329,589,334);

line(565,214,527,197);
line(564,214,527,211);
line(566,214,527,226);

line(583,214,629,212);
line(582,214,629,193);
line(584,214,629,225);

pop();
  
  
  //Legs
  push();
  ellipseMode(CORNER);
  stroke(255);
  fill(255);
  ellipse(530,295,20,70);
  ellipse(595,295,20,70);
  ellipse(605,258,35,60);
  pop();
  stroke(50);
  strokeWeight(1);
  fill(255);
  circle(540,364,20);
  circle(606,364,20);
  circle(628,317,20);
  
  line(535,373,535,368);
  line(540,373,540,368);
  line(545,373,545,368);
  
  line(601,373,601,368);
  line(606,373,606,368);
  line(611,373,611,368);
  
  line(623,326,623,321);
  line(628,326,628,321);
  line(633,326,633,321);
 
  println("X:");
  println(mouseX);
  println("Y:");
  println(mouseY); 
}
