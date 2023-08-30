
// the different between this and before is: the function in object are same if we use '==='
function Color(r, g, b) {
   this.r = r;
   this.g = g;
   this.b = b;
}

Color.prototype.rgb = function () {
   const { r, g, b } = this;
   return `rgb(${r},${g},${b})`
}

Color.prototype.rgba = function (a) {
   this.a = a;
   const { r, g, b } = this;
   return `rgb(${r},${g},${b},${a})`
}

let color1 = new Color(54, 166, 43);
// must use new, so this in function reference to it function not document(root)
let color2 = new Color(50, 50, 50);

console.log(brown.rgb === color2.rgb);


// but there is some better way!! we making class! (just more clean then this)
// we call it syntatic sugar (more CLEAN!)