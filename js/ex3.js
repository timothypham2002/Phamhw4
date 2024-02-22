const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
  circumference: function () {
    let circircleVar = 2 * Math.PI * r;
    return circircleVar;
  },
  area: function () {
    let areaVar = Math.PI * r * r;
    return areaVar;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
