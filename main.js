let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ECF39E;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ECF39E;">Conformado por Andrés,Mireya,Perla,Rodrigo,Victor y Diego.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
