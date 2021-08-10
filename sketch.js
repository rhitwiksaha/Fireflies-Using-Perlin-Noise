let totalFrames = 480;
let counter = 0;
let color = 0;
let forward = true;
let record = false;
let img;
let particles;


function setup() {
  createCanvas(1366, 768);
  particles = new Array(100);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
  img = loadImage('bg.jpg');
}

function draw() {
  let percent = 0;
  if (record)
    percent = float(count) / totalFrames;
  else
    percent = float(counter % totalFrames) / totalFrames;

  render(percent);
  if (record) {
    saveFrames("output/gif-" + nf(counter, 3) + ".png");
    if (counter == totalFrames - 1) {
      return;
    }
  }
  counter++;
}

function render(percent) {
  // if (forward) {
  //   color += 0.5;
  //   if (color > 15) {
  //     forward = false;
  //   }
  // }
  // else {
  //   color -= 0.5;
  //   if (color <= 0) {
  //     forward = true;
  //   }
  // }
  // console.log(color);
  background(color / 2, color / 2, 0);
  // image(img,0,0, width, height);
  let angle = percent * TWO_PI;
  particles.forEach(p => {
    p.render(angle);
  });
}