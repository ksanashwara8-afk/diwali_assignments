function isObjectEqual(obj1, obj2) {
    if (Object.entries(obj1).length !== Object.entries(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        return isEqual(obj1[key], obj2[key]);
    }
}

function isEqual(value1, value2) {
    if (value1 === null || value2 === null) return false;
    if (value1 === value2) return true;
    if (typeof value1 === "object" && typeof value2 === "object") {
        return isObjectEqual(value1, value2);
    }
    return false;
}

console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }), "true");
console.log(isEqual({ a: 1 }, { b: 1 }), "false");
console.log(isEqual({ a: 2, b: [] }, { b: 2, a: 1 }), "false");
console.log(isEqual([], { b: 2, a: 1 }), "false");
console.log(isEqual({ b: 1 }, { a: undefined }), "false");

console.log(isEqual(1, 1), "true");
console.log(isEqual("a", "a"), "true");
console.log(isEqual([], []), "true");
console.log(isEqual([1], [1]), "true");
console.log(isEqual([1], [1, 2]), "false");
console.log(isEqual(1, "1"), "false");
console.log(isEqual({ a: 1 }, { a: 1 }), "true");
console.log(isEqual({ a: 1 }, { b: 1 }), "false");
console.log(isEqual({ a: [1] }, { a: [1] }), "true");
console.log(isEqual({ a: { b: 1 } }, { a: { b: 1 } }), "true");
