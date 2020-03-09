// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
    return driver.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(driver, revenue) {
    let rev = driversWithRevenueOver(driver, revenue)
    return rev.map(n => n.name )
}

function exactMatch(drivers, prop) {
    if (prop.name) {
    return drivers.filter(driver => driver.name === prop.name)
    } else {
        return drivers.filter(driver => driver.revenue === prop.revenue)
    }

}

function exactMatchToList(drivers, prop) {
    let list = exactMatch(drivers, prop)
    return list.map( d => d.name)
}
