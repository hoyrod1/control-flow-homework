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
console.log(`The area which contains the plants is ${Math.round(area)}`);
/**********************************************************************/

/**********************************************************************/
// Currently the plants requires a minimum space of 0.8 square meters
const squareMeters = 0.8;
// The calculation of the minimum (area) that each plant require is 3
const area4OnePlant = PI * squareMeters;
console.log(
  `The minimum area that each plant requires is ${Math.round(area4OnePlant)}`
);
/**********************************************************************/

/**********************************************************************/
// The area is starting with 20 plants.
let currentAmountOfPlants = 20;
// The calculation of the (area) that twenty plant require is 51
const currentArea4TwentyPlants = currentAmountOfPlants * area4OnePlant;
console.log(
  `The size of the area that twenty plants require is ${Math.round(
    currentArea4TwentyPlants
  )}`
);
/**********************************************************************/
// The plants size double in number every week
// const plantGrowthDoublePerWk = 2 * currentAmountOfPlants;
// console.log(`The plant size = ${plantGrowthDoublePerWk} every week`);
/**********************************************************************/
/**********************************************************************/
console.log(
  "================== Plant Growth During 4 weeks ===================="
);

// The predicted Plants Growth for 4 weeks is 160
const weeks = 5;
let count = 1;
let newplantAmount = currentAmountOfPlants;

while (count <= weeks) {
  const currentArea4TwentyPlants = newplantAmount * area4OnePlant;
  console.log(
    `The predicted plant growth after week ${count} is ${newplantAmount} and the area that ${newplantAmount} plants requires is ${Math.round(
      currentArea4TwentyPlants
    )} square meters * PI.`
  );
  newplantAmount *= 2;
  count++;
}

console.log(
  "==================================================================="
);
/**********************************************************************/
console.log(
  "================== Plant Pruned During 4 weeks ===================="
);
let currentAreaPercentage4Plants = area * 0.8;
const weeksB = 4;
let countB = 1;
let newAmount4Pruned = currentAmountOfPlants;

console.log(
  `80% of ${Math.round(area)} square meters * PI is ${Math.round(
    currentAreaPercentage4Plants
  )} square meters * PI.`
);

while (countB <= weeksB) {
  const currentArea4TwentyPlants = newAmount4Pruned * area4OnePlant;
  if (currentArea4TwentyPlants > currentAreaPercentage4Plants) {
    console.log(
      `After week ${countB} the amount of ${newAmount4Pruned} plants covers the area of ${Math.round(
        currentArea4TwentyPlants
      )} square meters * PI which is greater than 80% of capacity`
    );
    break;
  }
  newAmount4Pruned *= 2;
  countB++;
}

console.log(
  "==================================================================="
);
/**********************************************************************/
/**********************************************************************/
console.log(
  "================= Monitor Plants During 4 weeks ==================="
);
let area4EightyPercent = area * 0.8;
let area4FiftyPercent = area * 0.5;
const weeksC = 4;
let countC = 1;
let monitoredAmount = currentAmountOfPlants;

console.log(
  `80% of ${Math.round(area)} square meters * PI is ${Math.round(
    area4EightyPercent
  )} square meters * PI.`
);
console.log(
  `50% of ${Math.round(area)} square meters * PI is ${Math.round(
    area4FiftyPercent
  )} square meters * PI.`
);

while (countC <= weeksC) {
  const currentArea4TwentyPlants = monitoredAmount * area4OnePlant;
  if (
    currentArea4TwentyPlants > area4FiftyPercent &&
    currentArea4TwentyPlants < area4EightyPercent
  ) {
    console.log(
      `After week ${countC} the amount of ${Math.round(
        monitoredAmount
      )} plants covers the area between ${Math.round(
        area4FiftyPercent
      )} and ${Math.round(
        area4EightyPercent
      )} square meters * PI which is between 50% and 80% of capacity`
    );
  }
  monitoredAmount *= 2;
  countC++;
}

console.log(
  "==================================================================="
);
/**********************************************************************/
console.log(
  "============== Monitor For Planting during 4 weeks ================"
);
let area4FiftyPercentD = area * 0.5;
const weeksD = 4;
let countD = 1;

console.log(
  `50% of ${Math.round(area)} square meters * PI is ${Math.round(
    area4FiftyPercentD
  )} square meters * PI.`
);

while (countD <= weeksD) {
  let newAmountOfPlantsD = currentAmountOfPlants * countD;
  const currentArea4TwentyPlantD = newAmountOfPlantsD * area4OnePlant;
  if (currentArea4TwentyPlantD < area4FiftyPercent) {
    console.log(
      `After week ${countD} the amount of ${Math.round(
        newAmountOfPlantsD
      )} plants covers the area of ${Math.round(
        area4FiftyPercentD
      )} square meters * PI which is less than 50% of capacity`
    );
    break;
  } else {
    console.log("There is no room to grow more plants");
    break;
  }
  countD++;
}

console.log(
  "==================================================================="
);
/**********************************************************************/
console.log(
  "===================== Monitor For 100 plants ======================="
);

// The area is starting with 100 plants.
let newAmountOfPlants = 100;
const newArea4HundredPlants = newAmountOfPlants * area4OnePlant;
console.log(
  `The size of the area that one hundred plants require is ${Math.round(
    newArea4HundredPlants
  )} square meters * PI`
);

console.log(
  `The amount of additional space the ${
    newAmountOfPlants - currentAmountOfPlants
  } plants will require is ${Math.round(
    newArea4HundredPlants - currentArea4TwentyPlants
  )} square meters * PI`
);

const weeksE = 10;
let countE = 1;
let newAmount4Hundred = currentAmountOfPlants;

// while (countE <= weeksE) {
//   const currentArea4HundredPlants = newAmount4Hundred * area4OnePlant;
//   console.log(Math.round(currentArea4HundredPlants / PI));

//   newAmount4Hundred *= 2;
//   countE++;
// }

console.log(Math.round(newAmount4Hundred / PI));

console.log(
  "==================================================================="
);
/**********************************************************************/
