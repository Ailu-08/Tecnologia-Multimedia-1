class Textos {

  constructor(aventura) {

// Definición de arreglos para títulos y textos narrativos de cada pantalla
    this.titulosPantallas = new Array(aventura.numPantallas);
    this.textosNarrativos = new Array(aventura.numPantallas);
  }

 

  cargarTextos(anchoPantalla, altoPantalla, tamanoTexto, espaciadoTexto) {

    this.titulosPantallas[0] = "Pantalla Inicial: \n La Divina Comedia - Aventura Grafica";

    this.titulosPantallas[1] = "Pantalla 1: La vida de Dante";

    this.titulosPantallas[2] = "Pantalla 2: Perdido en el Bosque";

    this.titulosPantallas[3] = "Pantalla 3: El Infierno";

    this.titulosPantallas[4] = "Pantalla 4: El Purgatorio";

    this.titulosPantallas[5] = "Pantalla 5: El Paraiso";

    this.titulosPantallas[6] = "P6: Final 1: \n Original Libro: Vuelta al Mundo Mortal";

    this.titulosPantallas[7] = "Pantalla 7: La Guerra";

    this.titulosPantallas[8] = "Pantalla 8: Final 2: La Muerte";

    this.titulosPantallas[9] = "Pantalla 9: Prisioneros de Guerra";

    this.titulosPantallas[10] = "Pantalla 10: Final 3: La Felicidad";

    this.titulosPantallas[11] = "Pantalla 11: Regreso al hogar";

    this.titulosPantallas[12] = "P12: Desafios en \n los 9 Circulos del Averno";

    this.titulosPantallas[13] = "P13: Final 4; \n El nuevo Rey del Inframundo";

    this.titulosPantallas[14] = "Pantalla 14: Final 5:\n Intercambio";

    this.titulosPantallas[15] = "Pantalla 15: Final 6: \n Original Pelicula: Perdon y Redencion";

    this.titulosPantallas[16] = "Pantalla 16: Créditos";

 

    this.textosNarrativos[0] = "TP3";

    this.textosNarrativos[1] = "Dante se encuentra perdido en la vida y dudando sobre su fe. \n *Si desea Continuar el hilo del libro ir a la pantalla 2 \n *Si desea continuar el hilo de la película ir a la pantalla 7";

    this.textosNarrativos[2] = "Dante, perdido en un oscuro bosque, se encuentra en una encrucijada. Decide seguir a Virgilio, el poeta romano, quien lo guiará a través de los reinos de ultratumba en un viaje épico. Virgilio se convierte en su mentor y lo lleva al Infierno, el primer destino de su viaje.";

    this.textosNarrativos[3] = "Dante y Virgilio descienden a través de los nueve círculos del Infierno. En cada círculo, encuentran a almas condenadas que sufren tormentos relacionados con sus pecados. Presencian horrores como el fuego, el hielo, los ríos de sangre y encuentran a personajes históricos y mitológicos, como Ulises y Cleopatra. \n *Si decide seguir el hilo del Libro ir a pantalla 4 \n *Si decide seguir el hilo de la película ir a pantalla 12";

    this.textosNarrativos[4] = "Dante y Virgilio emergen del Infierno y llegan al Purgatorio, una montaña con siete terrazas. Aquí, las almas se purifican a través de pruebas y sufrimientos relacionados con sus pecados. Cada terraza representa un pecado capital y Dante encuentra a personas arrepentidas a medida que avanza y enfrenta desafíos cada vez más difíciles, se purifica y aprende sobre la importancia del perdón y la penitencia en su camino a la redención.";

    this.textosNarrativos[5] = "Dante asciende a través de los nueve cielos del Paraíso. Cada cielo representa un nivel de felicidad y conocimiento celestial. En cada uno, encuentra a almas santas y recibe enseñanzas sobre la naturaleza divina, la teología y la perfección celestial. Dante es guiado por Beatriz, quien representa el amor divino y le revela la belleza y la armonía del Paraíso.";

    this.textosNarrativos[6] = "En el último cielo, Dante experimenta la visión beatífica y alcanza la unión con Dios. Experimenta la plenitud de la felicidad divina y comprende la perfección y el orden del universo. Su viaje culmina volviendo al mundo mortal luego de una experiencia mística y trascendental, donde se funde con el amor y la sabiduría divina.";

    this.textosNarrativos[7] = "Dante Debe ir a la guerra por lo que su esposa Beatriz se queda sola en casa con su padre y: \n *Si decide hacer un pacto con el diablo ir a la pantalla 9 \n *Si decide solo esperarlo ir a la pantalla 8";

    this.textosNarrativos[8] = "Al Beatriz no hacer el pacto con el diablo el regreso y el alma de Dante no tienen un seguro por lo que muere en batalla junto con otros cruzados";

    this.textosNarrativos[9] = "Dante y su ejército vencen y capturan presos. A Dante se le da la oportunidad de fornicar con una de las reclusas que tenían como esclava ya que esta pidió complacer a los soldados a cambio de su libertad. Ante esto Dante: \n *Si decide serle fiel a su esposa ir a la pantalla 10 \n *Si decide ser infiel ir a la pantalla 11"

this.textosNarrativos[10] = "Dante regresa vivo a su hogar luego de la batalla y es feliz con su mujer";

this.textosNarrativos[11] = "Dante regresa vivo a su hogar pero al llegar su esposa le pregunta si le había sido fiel a lo cual él miente por lo que en la noche el Diablo aparece para reclamar el alma de Beatriz, le explica a Dante burlón sobre el pacto que hicieron que implicaba que El Diablo garantizaba la seguridad de Dante pero si este le era infiel el pago sería llevarse el alma de su mujer al infierno. Toma el alma de su inocente y destrozada esposa (mientras que esta lloraba y le reclamaba a Dante por su traición) y se la lleva al infierno. Dante va a rescatarla con ayuda de Virgilio, un espíritu poeta.";

    this.textosNarrativos[12] = "Dante se confronta con horrores y demonios además de ver cómo torturan a las almas y encontrarse con personajes que uno no creería que estuvieran allí hasta llegar al 9 círculo que se encuentra congelado donde se enfrenta con el Diablo. La lucha es ardua pero: \n *Intenta matar al Diablo por el trono del infierno Ir a la pantalla 13 \n *El Diablo propone un intercambio Ir a la pantalla 14 \n *Final Original de la Película ir a la Pantalla 15";

    this.textosNarrativos[13] = "Al quedar el diablo malherido el infierno se cierra y los demonios debaten por quien sera su nuevo señor,Dante por su parte decide que desea asumir el trono y quedarse a vivir allí con su esposa.";

    this.textosNarrativos[14] = "El Diablo interesado por el alma valiente de Dante propone intercambiar su vida por la de Beatriz para que esta pueda ser liberada al cielo. Dante acepta, el Diablo la libera y la pareja se besa hasta que Beatriz desaparece envuelta en la luz de un ángel mientras que Dante queda condenado a sufrir en el infierno siendo torturado por el Diablo en el círculo de los traidores por toda la eternidad.";

    this.textosNarrativos[15] = "Dante vence al Diablo y sacrifica su vida para salvar a Beatriz lo que resulta en que ambos alcancen la salvación y encuentren redención en el más allá";

    this.textosNarrativos[16] = "Directora/Artista/Programadora/Alumna: Ailen Avanzini\nLegajo: 94717/7\nProfesor: Matias Jauregui Lorda\nObra: La divina comedia\nAutor: Dante Alighieri";

  }

 

// Muestra el texto narrativo de la pantalla actual

 

 mostrarTextoNarrativo(pantalla, colorTexto) {

  let padding = 5;    // Ajusta este valor según tus necesidades (margen alrededor del texto)

  let offsetY = 300;  // Ajusta este valor según tus necesidades

 

  fill(100, 100);  // Fondo opaco

  noStroke();

  rectMode(CENTER);

  rect(width / 2, 100 + offsetY, width - padding * 2, height - 110);

 

  fill(colorTexto);

  textSize(20);

  textAlign(CENTER, TOP);

  text(this.textosNarrativos[pantalla], width / 2, 100 + offsetY, width - padding * 2, height - 120);

}

}