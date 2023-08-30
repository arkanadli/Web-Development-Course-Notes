// Class in JAVASCRIPT 

class Color {
   constructor(r, g, b, name) { // run immediately after we make new object Color
      console.log(r, g, b);
      this.r = r; //set properties of the object
      this.g = g;
      this.b = b;
      this.name = name;
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
}

const color1 = new Color(55, 44, 22);

document.body.style.backgroundColor = brown.rgba(0.7)