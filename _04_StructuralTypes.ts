interface Point {
    x: number;
    y: number;
}
interface ColorPoint {
    x: number;
    y: number;
    hex: string;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

//const color = { hex: "#187ABF" };   // This will give error because 'hex' param. is not in
//logPoint(color);

function ColorLogPoint(cp: ColorPoint) {
    console.log(`${cp.x}, ${cp.y}, ${cp.hex}`)
}

const color = { x: 30, y: 30, hex: "#187ABF" };
ColorLogPoint(color);



//=========VIRTUAL POINTS===========
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 16);
logPoint(newVPoint);