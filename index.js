function driversWithRevenueOver (drivers, revenue) {
    return drivers.filter(function(driver) {
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver (drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, jsObj) {
    let matches = [];
    for (const obj of drivers) {
        for (const key in obj) {
            if (!matches.includes(obj)){
                matches = drivers.filter(function(driver) {
                    return driver[key] === jsObj[key]
                })
            }
        }
    return matches   
    }
}

function exactMatchToList (drivers, jsObj) {
    return exactMatch (drivers, jsObj)
    .map(function (driver) {
        return driver.name
    })
}
