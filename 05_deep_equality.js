function type(a) {
    if (Array.isArray(a)) return "array";
    if (a === null) return "null";
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
        if (!(key in b)) return false;
        if (!isEqual(a[key], b[key])) return false;
    }
    return true;
}

function areValuesEqual(a, b) {
    return a === b;
}

function isEqual(a, b) {
    if (!areTypesEqual(a, b)) return false;
    switch (type(a)) {
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
