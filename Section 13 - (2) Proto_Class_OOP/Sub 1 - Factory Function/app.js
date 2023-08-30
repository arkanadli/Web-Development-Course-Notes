// create object factory
const makeColor = function (r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    };
    return color;
}

const firstColor = makeColor(35, 211, 159);
console.dir(firstColor);
console.log(firstColor.rgb())

//people usually not use this way because waste memory
const secondColor = makeColor(0, 0, 0);
console.log(firstColor.rgb === secondColor.rgb)  // return false, it means that the function is different
