// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(driver => driver === name);
}

function findMatching(drivers, name){
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function findMatching(drivers, name){
  const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return matchingDrivers.length === 0 ? [] : matchingDrivers;
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}