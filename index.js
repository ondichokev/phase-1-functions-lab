
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunction) {
  return selectFunction(drivers);
}

const distanceFromHqInBlocks = function(block) {
  const hqBlock = 42;
  return Math.abs(block - hqBlock);
};

const distanceFromHqInFeet = function(block) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(block) * feetPerBlock;
};

const distanceTravelledInFeet = function(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
};

const calculatesFarePrice = function(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
};


console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
console.log(fareDoubler(10)); 
console.log(fareTripler(10)); 
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 
