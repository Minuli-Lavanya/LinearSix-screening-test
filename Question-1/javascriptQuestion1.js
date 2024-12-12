Date.prototype.daysTo = function (date) {
    
    if (!(date instanceof Date)) {
        throw new Error("Input must be a valid Date object");
    }
    const timeDifference = date - this;

    const millisecondsPerDay  = 1000 * 60 * 60 * 24;

    const totalDays = Math.abs(Math.floor(timeDifference / millisecondsPerDay ));
    return totalDays;
};

let d1 = new Date("2024-12-01");
let d2 = new Date("2024-12-12");

console.log(d1.daysTo(d2)); 

let d3 = new Date("2024-11-20");
console.log(d2.daysTo(d3));