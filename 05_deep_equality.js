function isObjectEqual(obj1, obj2) {
    if (obj1 === null || obj2 === null) return false;

    if (Object.entries(obj1).length !== Object.entries(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        return isEqual(obj1[key], obj2[key]);
    }
}

function isEqual(value1, value2) {
    if (value1 === value2) return true;
    if (typeof value1 === "object" && typeof value2 === "object") {
        return isObjectEqual(value1, value2);
    }
    return false;
}

console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(isEqual({ a: undefined }, { b: 1 }));
console.log(isEqual({ a: 1, b: [] }, { b: 2, a: 1 }));
console.log(isEqual([], { b: 2, a: 1 }));
