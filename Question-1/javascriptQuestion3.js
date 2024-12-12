function projectObject(inputObj, prototype) {
    let resultObj = {};

    for (let key in prototype) {
        if (inputObj.hasOwnProperty(key)) {
            if (typeof prototype[key] === "object" && prototype[key] !== null) {
                resultObj [key] = projectObject(inputObj[key], prototype[key]);
            } else {
                resultObj [key] = inputObj[key];
            }
        }
    }

    // Return the resultObj
    return resultObj ;
}

// Input
const inputObj = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32,
        },
    },
    prop12: 12,
    prop13: 13,
};

const prototype = {
    prop11: {
        prop22: {
            prop31: null,
        },
    },
    prop12: null,
};

const result = projectObject(inputObj, prototype);

console.log("Projected Object:", result);
