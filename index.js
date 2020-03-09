// Code your solution here:
function driversWithRevenueOver(list, number) {
  return list.filter(function(driver) {
    return driver.revenue >= number;
  });
}

function driverNamesWithRevenueOver(list, number) {
  return driversWithRevenueOver(list, number).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(list, object){
    return list.filter(function(driver){

        let matches = false;

        for (const key in object) {
          matches = driver[key] === object[key];
        }
    
        return matches;

    })
}

function exactMatchToList(list, object){
    return exactMatch(list, object).map(function(driver){
        return driver.name
    })
}