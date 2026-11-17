// function areObjectsEqual(obj1, obj2) {
//     for (const key in obj1) {
//         if (!Object.keys(obj2).includes(key)) {
//             return false;
//         }
//         return isEqual(obj1[key], obj2[key]);
//     }
//     return obj1.length === obj2.length;
// }

// function isEqual(value1, value2) {
//     if (
//         typeof value1 === "object" &&
//         typeof value2 === "object" &&
//         value1 !== null &&
//         value2 !== null
//     ) {
//         if (Array.isArray(value1) !== Array.isArray(value2)) {
//             return false;
//         }
//         return isObjectEqual(value1, value2);
//     }
//     return value1 === value2;
// }

function type(a) {
    if (Array.isArray(a)) return "array";
    if (a === "null") return "null";
    return typeof a;
}

function areTypesEqual(a, b) {
    return type(a) === type(b);
}

function areArraysEqual(a, b) {
    for (const key in a) {
        if (!isEqual(a[key], b[key])) return false;
    }
    return a.length === b.length;
}

function areObjectsEqual(a, b) {
    for (const key in a) {
        if (!(key in b)) {
            return false;
        }
        if (!isEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

function areValuesEqual(a, b) {
    return a === b;
}

function isEqual(a, b) {
    if (!areTypesEqual(a, b)) return false;
    switch (type(a)) {
        case "null":
            return true;
        case "array":
            return areArraysEqual(a, b);
        case "object":
            return areObjectsEqual(a, b);
    }
    return areValuesEqual(a, b);
}

module.exports = {
    isEqual,
};
