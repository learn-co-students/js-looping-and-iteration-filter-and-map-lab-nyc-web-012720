// Code your solution here:


function driversWithRevenueOver(driverObjects, rev) {
    const greaterRevs = driverObjects.filter(obj => obj.revenue > rev)
    return greaterRevs
}

function driverNamesWithRevenueOver(driverObjects, rev) {
    const greaterRevs = driverObjects.filter(obj => obj.revenue > rev)
    return greaterRevs.map(obj => obj.name)
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
    let matches = [];
    for (const obj of driverObjects) {
        for (const key in obj) {
            if (!matches.includes(obj)){
                matches = driverObjects.filter(object => object[key] === otherObject[key])
            } 
        }
    let toList = matches.map(driver => driver.name)
    return toList
    }  
}







            
            
            
            
const drivers = [
    { name: 'Sally',   revenue: 400 },
    { name: 'Annette', revenue: 200 },
    { name: 'Jim',     revenue: 150 },
    { name: 'Sally',   revenue: 200 }
]
console.log(exactMatch(drivers, {name: "Sally"}))
console.log(exactMatch(drivers, {revenue: 200}))
            
            // console.log(exactMatchToList(drivers, {revenue: 200}))
            