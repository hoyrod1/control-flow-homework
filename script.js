console.log("Hello World");
/**********************************************************************/
// The constance PI
const PI = 3.1415;

// Months Per Year
const monthPerYear = 12;

// Weeks Per Year
const weeksPerYear = 52;

// Days Per Year
const daysPerYear = 365;

// Days Per Week
const dayCount = daysPerYear / weeksPerYear;

/**********************************************************************/

/************************* DAYS IN A WEEKS ****************************/
console.log(
  "-----------------------------------------------------------------"
);

console.log(`There are ${Math.floor(dayCount)} days in a week`);

console.log(
  "-----------------------------------------------------------------"
);
/**********************************************************************/

/**********************************************************************/
// The radius cotaining the plants is 5(5) meters
let radius = 5;
// The calculation of the (area) containing the plants is 79
const area = PI * radius * radius;
console.log(`The area which contains the plants is ${Math.floor(area)}`);
/**********************************************************************/

/**********************************************************************/
// Currently the plants requires a minimum space of 0.8 square meters
const squareMeters = 0.8;
// The calculation of the minimum (area) that each plant require is 3
const area4OnePlant = PI * squareMeters;
console.log(
  `The size of the area that each plant requires is ${Math.floor(
    area4OnePlant
  )}`
);
/**********************************************************************/

/**********************************************************************/
// The area is starting with 20 plants.
let currentAmountOfPlants = 20;
// The calculation of the (area) that twenty plant require is 51
const currentArea4TwentyPlants = currentAmountOfPlants * area4OnePlant;
console.log(
  `The size of the area that twenty plants require is ${Math.floor(
    currentArea4TwentyPlants
  )}`
);
/**********************************************************************/
// The plants size double in number every week
const plantGrowthDoublePerWk = 2 * currentAmountOfPlants;
console.log(`The plant size = ${plantGrowthDoublePerWk} every week`);
/**********************************************************************/
console.log(
  "===================== Plant Growth after 4 weeks ======================="
);
const weeks = 4;
let count = 1;
while (count <= weeks) {
  console.log(
    `The predicted plant growth after week ${count} is ${Math.floor(
      currentAmountOfPlants * count
    )}`
  );
  count++;
}

console.log(
  "========================================================================"
);
