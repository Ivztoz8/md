// Objects
const mercury = {
    speed: 0.0024,
    theta: Math.random() * Math.PI,
    radius: 100,
    el: document.querySelector('.mercury')
}


const venus = {
    speed: 0.0022,
    theta: Math.random() * Math.PI,
    radius: 130,
    el: document.querySelector('.venus')
}

const earth = {
    speed: 0.002,
    theta: Math.random() * Math.PI,
    radius: 240,
    el: document.querySelector('.earth')
}

const moonEarth = {
    speed: 0.002,
    theta: Math.random() * Math.PI,
    radius: 280,
    el: document.querySelector('.moonEarth')
}


const mars = {
    speed: 0.0018,
    theta: Math.random() * Math.PI,
    radius: 310,
    el: document.querySelector('.mars')
}

const jupiter = {
    speed: 0.0016,
    theta: Math.random() * Math.PI,
    radius: 340,
    el: document.querySelector('.jupiter')
}

const saturn = {
    speed: 0.0014,
    theta: Math.random() * Math.PI,
    radius: 380,
    el: document.querySelector('.saturn')
}

const uranus = {
    speed: 0.0012,
    theta: Math.random() * Math.PI,
    radius: 410,
    el: document.querySelector('.uranus')
}

const neptune = {
    speed: 0.0010,
    theta: Math.random() * Math.PI,
    radius: 440,
    el: document.querySelector('.neptune')
}

const pluto = {
    speed: 0.0008,
    theta: Math.random() * Math.PI,
    radius: 480,
    el: document.querySelector('.pluto')
}

const nibiru = {
    speed: 0.0004,
    theta: Math.PI,
    radius: 510,
    el: document.querySelector('.nibiru')
}


// Sun center
const sunX = window.innerWidth / 2 - 25;
const sunY = window.innerHeight / 1 -25;

const sun = document.querySelector('.sun');

sun.style.left = `${sunX}px` ;
sun.style.top = `${sunY}px`;


// Functions
function update(planet){
    planet.theta += planet.speed;
    planet.el.style.left = `${Math.cos(planet.theta) * planet.radius + sunX + 25}px`;
    planet.el.style.top = `${Math.sin(planet.theta) * planet.radius + sunY + 25}px`;
}

function updateInverse(planet){
    planet.theta -= planet.speed;
    planet.el.style.left = `${Math.cos(planet.theta) * planet.radius + sunX + 25}px`;
    planet.el.style.top = `${Math.sin(planet.theta) * planet.radius + sunY + 25}px`;
}

function updateX(planet){
    planet.theta += planet.speed;
    planet.el.style.left = `${Math.cos(planet.theta) * planet.radius / 4 + sunX + 25}px`;
    planet.el.style.top = `${Math.sin(planet.theta) * planet.radius  + sunY + 50}px`;
}


setInterval(() => {
    update(mercury)
}, 10);

setInterval(() => {
    update(venus)
}, 10);


setInterval(() => {
    update(earth)
}, 10);

setInterval(() => {
    update(mars)
}, 10);

setInterval(() => {
    update(jupiter)
}, 10);

setInterval(() => {
    update(saturn)
}, 10);

setInterval(() => {
    updateInverse(uranus)
}, 10);

setInterval(() => {
    updateInverse(neptune)
}, 10);

setInterval(() => {
    update(pluto)
}, 10);

setInterval(() => {
    updateX(nibiru)
}, 10);
