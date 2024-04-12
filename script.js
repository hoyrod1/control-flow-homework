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
console.log(`The area which contains the plants is ${area}`);
/**********************************************************************/

/**********************************************************************/
// Currently the plants requires a minimum space of 0.8 square meters
const squareMeters = 0.8;
// The calculation of the minimum (area) that each plant require is 3
const area4OnePlant = PI * squareMeters;
console.log(`The minimum area that each plant requires is ${area4OnePlant}`);
/**********************************************************************/

/**********************************************************************/
// The area is starting with 20 plants.
let currentAmountOfPlants = 20;
// The calculation of the (area) that twenty plant require is 51
const currentArea4TwentyPlants = currentAmountOfPlants * area4OnePlant;
console.log(
  `The size of the area that twenty plants require is ${currentArea4TwentyPlants}`
);
/**********************************************************************/
// The plants size double in number every week
const plantGrowthDoublePerWk = 2 * currentAmountOfPlants;
console.log(`The plant size = ${plantGrowthDoublePerWk} every week`);
/**********************************************************************/
/**********************************************************************/
console.log(
  "=================== Plant Growth for 4 weeks ====================="
);

// The predicted Plants Growth for 4 weeks is 80
const weeks = 4;
let count = 1;
while (count <= weeks) {
  let newAmountOfPlants = currentAmountOfPlants * count;
  const currentArea4TwentyPlants = newAmountOfPlants * area4OnePlant;
  console.log(
    `The predicted plant growth after week ${count} is ${newAmountOfPlants} and the area that ${newAmountOfPlants} plants requires is ${currentArea4TwentyPlants} square meters.`
  );
  count++;
}

console.log(
  "==================================================================="
);
/**********************************************************************/
console.log(
  "=================== Plant Pruned For 4 weeks ====================="
);
let currentAreaPercentage4Plants = area * 0.8;
const weeksB = 4;
let countB = 1;

console.log(
  `80% of ${area} square meters is ${currentAreaPercentage4Plants} square meters.`
);

while (countB <= weeksB) {
  let newAmountOfPlants = currentAmountOfPlants * countB;
  const currentArea4TwentyPlants = newAmountOfPlants * area4OnePlant;
  if (currentArea4TwentyPlants > currentAreaPercentage4Plants) {
    console.log(
      `After week ${countB} the amount of ${newAmountOfPlants} plants covers the area of ${currentArea4TwentyPlants} square meters which is greater than 80% of capacity`
    );
    break;
  }
  countB++;
}

console.log(
  "==================================================================="
);
/**********************************************************************/
/**********************************************************************/
console.log(
  "=================== Monitor Plants For 4 weeks ====================="
);
let area4EightyPercent = area * 0.8;
let area4FiftyPercent = area * 0.5;
const weeksC = 4;
let countC = 1;

console.log(
  `80% of ${Math.floor(area)} square meters is ${Math.floor(
    area4EightyPercent
  )} square meters.`
);
console.log(
  `50% of ${Math.floor(area)} square meters is ${Math.floor(
    area4FiftyPercent
  )} square meters.`
);

while (countC <= weeks) {
  let newAmountOfPlantsC = currentAmountOfPlants * countC;
  const currentArea4TwentyPlants = newAmountOfPlantsC * area4OnePlant;
  if (
    currentArea4TwentyPlants > area4FiftyPercent &&
    currentArea4TwentyPlants < area4EightyPercent
  ) {
    console.log(
      `After week ${countC} the amount of ${Math.floor(
        newAmountOfPlantsC
      )} plants covers the area between ${Math.floor(
        area4FiftyPercent
      )} and ${Math.floor(
        area4EightyPercent
      )} square meters which is between 50% and 80% of capacity`
    );
    break;
  }
  countC++;
}

console.log(
  "==================================================================="
);
/**********************************************************************/
