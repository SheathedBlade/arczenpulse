import { ContourMultiPolygon } from 'd3-contour';
import { geoPath, geoTransform } from 'd3-geo';
import { SCALE, MIN_OPACITY, MAX_OPACITY, LINE_WIDTH } from './constants';

export function drawContours(
  ctx: CanvasRenderingContext2D,
  contours: ContourMultiPolygon[],
  width: number,
  height: number
) {
  const transform = geoTransform({
    point(px: number, py: number) {
      this.stream.point(px * SCALE, py * SCALE);
    }
  });

  const pathGenerator = geoPath(transform, ctx);

  ctx.clearRect(0, 0, width, height);

  contours.forEach((contour: ContourMultiPolygon, i: number) => {
    const normalizedValue = i / contours.length;
    const opacity = MIN_OPACITY + normalizedValue * MAX_OPACITY;

    ctx.beginPath();
    pathGenerator(contour);
    ctx.strokeStyle = `rgba(201, 100, 120, ${opacity})`;
    ctx.lineWidth = LINE_WIDTH;
    ctx.stroke();
  });
}
