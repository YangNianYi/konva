import { Konva } from './_CoreInternals.ts';
// @ts-ignore
import { Canvas, DOMMatrix, Image, Path2D } from '@napi-rs/canvas';



global.DOMMatrix = DOMMatrix as any;

global.Path2D = Path2D as any;
Path2D.prototype.toString = () => '[object Path2D]';

Konva.Util['createCanvasElement'] = () => {
  const node = new Canvas(300, 300) as any;
  if (!node['style']) {
    node['style'] = {};
  }
  node.toString = () => '[object HTMLCanvasElement]';
  return node;
};

// create image in Node env
Konva.Util.createImageElement = () => {
  const node = new Image() as any;
  node.toString = () => '[object HTMLImageElement]';
  return node;
};

Konva._renderBackend = 'napi-canvas';

export default Konva;
