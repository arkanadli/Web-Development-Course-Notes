// Class in JAVASCRIPT 

class Color {
   constructor(r, g, b, name) { // run immediately after we make new object Color
      console.log(r, g, b);
      this.r = r; //set properties of the object
      this.g = g;
      this.b = b;
      this.name = name;
      const [h, s, l] = this.RGBToHSL();
      this.h = h;
      this.s = s;
      this.l = l;
   }
   //we double write function rgb for demonstrate to past function in class

   value() {
      const { r, g, b } = this;
      return [r, g, b];
   }

   rgb() {
      const [r, g, b] = this.value(); // we can just use this.r or deconstruck like this
      return `rgb(${r},${g},${b})`
   }
   rgba(a) {
      const { r, g, b } = this;
      return `rgb(${r},${g},${b},${a})`
   }
   RGBToHSL() {
      let { r, g, b } = this;
      r /= 255;
      g /= 255;
      b /= 255;
      const l = Math.max(r, g, b);
      const s = l - Math.min(r, g, b);
      const h = s
         ? l === r
            ? (g - b) / s
            : l === g
               ? 2 + (b - r) / s
               : 4 + (r - g) / s
         : 0;
      return [
         60 * h < 0 ? 60 * h + 360 : 60 * h,
         100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
         (100 * (2 * l - s)) / 2,
      ];
   };
   hsl() {
      const { h, s, l } = this;
      return `hsl(${h},${s}%,${l}%)`
   }
   opposite() {
      const { h, s, l } = this;
      const newHue = (h + 180) % 360;
      return `hsl(${newHue},${s}%,${l}%)`
   }
   saturated() {
      const { h, l } = this;
      return `hsl(${h},${100}%,${l}%)`
   }
   percentLight(l) {
      const { h, s } = this;
      return `hsl(${h},${s}%,${l}%)`
   }
}

const brown = new Color(55, 44, 22);
const red = new Color(255, 44, 22);
const pink = new Color(155, 44, 50);

let colors = { brown, red, pink };

// document.body.style.backgroundColor = brown.rgba(0.7)
// document.body.style.backgroundColor = brown.opposite();
// document.body.style.backgroundColor = brown.saturated();
document.body.style.backgroundColor = brown.percentLight(50);