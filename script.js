console.log("Hello World");
console.log(
  "-----------------------------------------------------------------"
);
// The constance PI
const PI = 3.1415;

/**********************************************************************/
// The radius cotaining the plants is 5(5) meters
let radius = 5;
// The calculation of the (area) containing the plants is 79
const area = PI * radius * radius;
console.log(`The area which contains the plants is ${Math.ceil(area)}`);
/**********************************************************************/

/**********************************************************************/
// Currently the plants requires a minimum space of 0.8 square meters
const squareMeters = 0.8;
// The calculation of the minimum (area) that each plant require is 3
const area4OnePlant = PI * squareMeters;
console.log(
  `The size of the area that each plant requires is ${Math.ceil(area4OnePlant)}`
);
/**********************************************************************/

/**********************************************************************/
// The area is starting with 20 plants.
let currentAmountOfPlants = 20;
// The calculation of the (area) that twenty plant require is 51
const currentArea4TwentyPlants = currentAmountOfPlants * area4OnePlant;
console.log(
  `The size of the area that twenty plants require is ${Math.ceil(
    currentArea4TwentyPlants
  )}`
);
/**********************************************************************/

// The plants double in number every week
const plantSizeGrowth = 2;

// console.log(`The constant, pi = ${PI}`);
// console.log(`The radius, squared = ${radius}`);
