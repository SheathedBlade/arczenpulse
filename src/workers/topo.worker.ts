// src/workers/topo.worker.ts
import * as d3 from 'd3';
import { createNoise3D } from 'simplex-noise';

const noise3D = createNoise3D();
let time = 0;

self.onmessage = (e: MessageEvent) => {
  const { width, height, scale } = e.data;

  const w = Math.floor(width / scale);
  const h = Math.floor(height / scale);

  const values = new Float64Array(w * h);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const nx = x / w;
      const ny = y / h;
      values[y * w + x] =
        noise3D(nx * 1.5, ny * 1.5, time * 0.08) * 1.0 +
        noise3D(nx * 3, ny * 3, time * 0.05) * 0.4 +
        noise3D(nx * 6, ny * 6, time * 0.03) * 0.15;
    }
  }

  const contours = d3
    .contours()
    .size([w, h])
    .smooth(true)
    .thresholds(d3.range(-1.5, 1.5, 0.15))(values);

  time += 0.008;

  // Transfer contour path data back to main thread
  self.postMessage({ contours, w, h });
};
