// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver) {
        return driver.revenue > revenue 
    })
}

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map(function(driver) {
        return driver.name
    })
}

function exactMatch(drivers, condition){
        return drivers.filter(function(driver) {
            return (driver[Object.keys(condition)[0]] === condition[Object.keys(condition)[0]])
        })
}


function exactMatchToList(drivers, condition){
    return exactMatch(drivers, condition).map(function(driver) {
        return driver.name
    })
}