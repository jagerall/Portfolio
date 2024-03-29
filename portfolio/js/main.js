const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var path = require('path');

var context = { title: "My New Post", body: "This is my first post!" };
var html = template(context);

const container = document.getElementById('navbar-logo');
const circle1 = document.getElementById('logo-circle1');
const circle2 = document.getElementById('logo-circle2');

let isHovered = false;
let inProgress = false;

container.addEventListener('mouseover', () => {
  isHovered = true;
  animateCircles();
});

container.addEventListener('mouseout', () => {
  isHovered = false;
  animateCircles();
});

function animateCircles() {
  if (isHovered && !inProgress) {
    inProgress = true;
    circle1.style.animation = 'logo-circle1 .5s ease forwards';
    circle2.style.animation = 'logo-circle2 .5s ease forwards';
    setTimeout(() => {
      inProgress = false;
    }, 500);
  } else {
    if (inProgress) {
      setTimeout(() => {
        circle1.style.animation = 'reverseCircle1 .5s ease forwards';
        circle2.style.animation = 'reverseCircle2 .5s ease forwards';
      }, 500);
    } else {
      circle1.style.animation = 'reverseCircle1 .5s ease forwards';
      circle2.style.animation = 'reverseCircle2 .5s ease forwards';
    }
  }
}


document.getElementById('toggle')
  .addEventListener('click', function () {
    var body = document.body;
    if (body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      body.classList.add('nav-close');
    } else {
      body.classList.add('nav-open');
      body.classList.remove('nav-close');
    }
  });


