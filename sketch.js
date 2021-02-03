/// <reference path="./lib/global.d.ts" />)

let mobilenet;

let puffin;

function preload() {
  puffin = loadImage('images/puffin.jpg');
}

function setup() {
  // put setup code here
  createCanvas(640, 480);
  background(0);

  image(puffin, 0, 0, width, height);

  mobilenet = ml5.imageClassifier('MobileNet', () => {
    console.log('Model is ready!!!!');

    mobilenet.predict(puffin, (error, results) => {
      if (error) {
        console.error(error);
      } else {
        console.log(results);
        fill(0);
        textSize(64);
        results.forEach(result => {
          createP(`${result.label} ${result.confidence}`);
        });
      }
    })
  });
}


function draw() {
  // put drawing code here




}