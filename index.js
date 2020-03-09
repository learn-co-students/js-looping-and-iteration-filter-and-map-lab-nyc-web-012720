// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, obj) {
    return drivers.filter(function (driver) {
        const new_obj = Object.entries(obj);
        for (const [key, val] of Object.entries(driver)){
            if (new_obj[0][0] === key && new_obj[0][1] === val) {
                return driver
            }
        }
    });
};

function exactMatchToList(drivers, obj) {
    return exactMatch(drivers, obj).map(driver => driver.name);
};