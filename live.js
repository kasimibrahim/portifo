var app = document.getElementById('interests');
app.style.color = "red";
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 5,
});

var skills = ["Software Development", "A.I", "Web Development", "Data Analytics", "AgriTech"]

for (var s of skills){
    typewriter
        .pauseFor(2500)
        .typeString(s)
        .pauseFor(600)
        .deleteChars(s.length)
        .pauseFor(700)
        .start();
}


// typewriter
//   .pauseFor(2500)
//   .typeString('A simple yet powerful native javascript')
//   .pauseFor(300)
//   .deleteChars(10)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
//   .start();


//NAVBAR RESPONSIVENESS
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('#navs');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});