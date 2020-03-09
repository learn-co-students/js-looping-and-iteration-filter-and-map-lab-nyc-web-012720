// Code your solution here:
function driversWithRevenueOver(driverObjects, rev) {
    return driverObjects.filter(obj => obj.revenue > rev)
    }

function driverNamesWithRevenueOver (drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
      }

function exactMatch(driverObjects, otherObject) {
    let matches = [];
    for (const obj of driverObjects) {
        for (const key in obj) {
            if (!matches.includes(obj)){
                matches = driverObjects.filter(object => object[key] === otherObject[key])
            }
        }
    return matches
    }
}

function exactMatchToList(driverObjects, otherObject) {
    return exactMatch(driverObjects, otherObject).map(driver => driver.name)
}
