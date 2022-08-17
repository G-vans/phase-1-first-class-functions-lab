// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
    
}

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
    
}

console.log(returnLastTwoDrivers(drivers));


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// console.log(selectingDrivers[0]);
function createFareMultiplier(value1) {
    return function fareMultiplier(value2) {
        return value1 * value2
    
    }

}
console.log(createFareMultiplier(2));



function createFareMultiplier(value1) {
    return function fareQuintupler(value2) {
        return value1 * value2
    
    }

}

console.log(createFareMultiplier(5))

//Fare Doubler

const fareDoubler = createFareMultiplier(2) 

fareDoubler(10);


//fareTripler

const fareTripler = createFareMultiplier(3);
fareTripler(12);


function selectDifferentDrivers(drivers, twoDrivers){
    return twoDrivers(drivers)
}
