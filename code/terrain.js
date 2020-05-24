self.importScripts("noise.js");

let width;
let height;

const heightmap = [];

onmessage = (msg) => {
  width = msg.data[0];
  height = msg.data[1];

  // Start the generation when given the width & height
  generateTerrain();
}

function generateTerrain() {
  console.log("starting");

  // Use perlin noise to generate each pixel
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      heightmap.push(Math.abs(noise.perlin2(j / 1000, i / 1000)) * 256);
    }
  }

  console.log("done");
  self.postMessage(["heightmap", heightmap]);
}