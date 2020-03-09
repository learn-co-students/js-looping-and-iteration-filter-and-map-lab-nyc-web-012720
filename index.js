function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) {
        return driver.revenue >= revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let aboveRevenue = driversWithRevenueOver(drivers, revenue);
    return aboveRevenue.map(function (driver) {
        return driver.name;
    });
}

function exactMatch(drivers, object) {
    if (object.revenue) {
        return drivers.filter(driver => driver.revenue === object.revenue)
    }
    else {
        return drivers.filter(driver => driver.name === object.name)
    }
}

function exactMatchToList(drivers, object) {
    let array = exactMatch(drivers, object);
    return array.map(function (driver) {
        return driver.name;
    });
}
