// Code your solution here:


function driversWithRevenueOver(driverObjects, rev) {
    return driverObjects.filter(d => d.revenue > rev)
}

function driverNamesWithRevenueOver(driverObjects, rev) {
    return driversWithRevenueOver(driverObjects, rev).map(obj => obj.name)
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

            