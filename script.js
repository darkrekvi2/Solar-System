var nav = document.getElementById("mySidenav");
/* Set the width of the side navigation to 250px */
function openMercuryNav() {
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
      '<div>' +
      '<h3>Меркурий</h3>' +    
      '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg" height="100px" width="100px">' +
      '<p>Наименьшая планета Солнечной системы и самая близкая к Солнцу. Названа в честь древнеримского бога торговли — быстрого Меркурия, поскольку она движется по небу быстрее других планет.</p>' +
      '</div>' +
      '<a class="Link" href="Html/Mercury.html">' +
      'Перейти к планете' +
      '</a>';
  nav.style.width = "250px";
}

function openVenusNav() { //append child
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
    '<div>' +
    '<h3>Венера</h3>' +    
    '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg" height="100px" width="100px">' +
    '<p>Названа в честь древнеримской богини любви Венеры. По ряду характеристик — например, по массе и размерам — Венера считается «сестрой» Земли.</p>' +
    '</div>' +
    '<a class="Link" href="Html/Venera.html">' +
    'Перейти к планете' +
    '</a>';
  nav.style.width = "250px";
}

function openEarthNav() {
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
      '<div>' +
      '<h3>Земля</h3>' +    
      '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Africa_and_Europe_from_a_Million_Miles_Away.png/1024px-Africa_and_Europe_from_a_Million_Miles_Away.png" height="100px" width="100px">' +
      '<p>Единственное известное человеку в настоящее время тело во Вселенной, населённое живыми организмами. </p>' +
      '</div>' +
      '<a class="Link" href="Html/Earth.html">' +
      'Перейти к планете' +
      '</a>';
  nav.style.width = "250px";
}

function openMarsNav() {
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
      '<div>' +
      '<h3>Марс</h3>' +    
      '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg" height="100px" width="100px">' +
      '<p>Названа в честь Марса — древнеримского бога войны, соответствующего древнегреческому Аресу. Также Марс называют красной планетой из-за красноватого оттенка поверхности, придаваемого ей минералом маггемитом — γ-оксидом железа(III).</p>' +
      '</div>' +
      '<a class="Link" href="Html/Mars.html">' +
      'Перейти к планете' +
      '</a>';
  nav.style.width = "250px";
}

function openJupiterNav() {
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
      '<div>' +
      '<h3>Юпитер</h3>' +    
      '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/1024px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg" height="100px" width="100px">' +
      '<p>Ряд атмосферных явлений на Юпитере — штормы, молнии, полярные сияния, — имеет масштабы, на порядки превосходящие земные. Примечательным образованием в атмосфере является Большое красное пятно — гигантский шторм, известный с XVII века.</p>' +
      '</div>' +
      '<a class="Link" href="Html/Jupiter.html">' +
      'Перейти к планете' +
      '</a>';
  nav.style.width = "250px";
}

function openSaturnNav() {
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
      '<div>' +
      '<h3>Сатурн</h3>' +    
      '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Saturn_-_April_25_2016_%2837612580000%29.png" height="100px" width="170px">' +
      '<p>Сатурн обладает заметной системой колец, состоящей главным образом из частичек льда, меньшего количества тяжёлых элементов и пыли. Вокруг планеты обращается 146 известных на данный момент спутника.</p>' +
      '</div>' +
      '<a class="Link" href="Html/Saturn.html">' +
      'Перейти к планете' +
      '</a>';
  nav.style.width = "250px";
}

function openUranusNav() {
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
      '<div>' +
      '<h3>Уран</h3>' +    
      '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Uranus_Voyager2_color_calibrated.png" height="100px" width="100px">' +
      '<p>В отличие от газовых гигантов — Сатурна и Юпитера, состоящих в основном из водорода и гелия, в недрах Урана и схожего с ним Нептуна отсутствует металлический водород, но зато много льда в его высокотемпературных модификациях. По этой причине специалисты выделили эти две планеты в отдельную категорию «ледяных гигантов».</p>' +
      '</div>' +
      '<a class="Link" href="Html/Uran.html">' +
      'Перейти к планете' +
      '</a>';
  nav.style.width = "250px";
}

function openNeptuneNav() {
  nav.style.width = "0";
  document.getElementById("mySidenav").innerHTML =  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
      '<div>' +
      '<h3>Нептун</h3>' +    
      '<img style="margin-left:32px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Neptune_Voyager2_color_calibrated.png/1024px-Neptune_Voyager2_color_calibrated.png" height="100px" width="100px">' +
      '<p>В атмосфере Нептуна бушуют самые сильные ветры среди планет Солнечной системы; по некоторым оценкам, их скорости могут достигать 600 м/с. Температура Нептуна в верхних слоях атмосферы близка к −220 °C. В центре Нептуна температура составляет, по различным оценкам, от 5000 K до 7000—7100 °C, что сопоставимо с температурой на поверхности Солнца и сравнимо с внутренней температурой большинства известных планет.</p>' +
      '</div>' +
      '<a class="Link" href="Html/Neptune.html">' +
      'Перейти к планете' +
      '</a>';
  nav.style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  nav.style.width = "0";
}

var active = false;
var prevOrb;

function Select(id){
  var currentSelected = document.getElementById(id);

  //remove prevous selection
  if(prevOrb != null) {
    prevOrb.style.boxShadow = "0 0 0 0";
  }

  if(prevOrb != currentSelected){
    active = false;
  }
  
  //is selected if false - show selection
  if(active == false) {
    currentSelected.style.boxShadow = "0 0 2px 2px white";
    
  //current selected orbit to previous
  prevOrb = currentSelected;
  active = true;
  }

  //else remove selection
  else{
    currentSelected.style.boxShadow = "0 0 0 0";
    active = false;
  }
}