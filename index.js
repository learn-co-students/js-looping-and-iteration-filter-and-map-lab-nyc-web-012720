// Code your solution here:

function driversWithRevenueOver(drivers, amount){
   return drivers.filter(function(driver){
       return  driver["revenue"] > amount;
    })
}

function driverNamesWithRevenueOver(drivers, amount){
    return driversWithRevenueOver(drivers, amount).map(function(driver){
       return driver.name;
    })
}

function exactMatch(drivers,obj1){
    if(typeof obj1["name"] === "undefined"){
        return helper(drivers,obj1,"revenue")
    }else{
        return helper(drivers,obj1,"name")
    }
}

function helper(drivers,obj1, keyName){
   return drivers.filter(function(driver){
    return driver[keyName]  === obj1[keyName]
    })
}

function exactMatchToList(drivers, obj1){
    let names = []
      let result = exactMatch(drivers,obj1)
      for(let driver of result){
         names.push(driver.name)
      }
      return names
  }