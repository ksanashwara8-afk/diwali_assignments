function isObjectEqual(obj1, obj2) {
    if (Object.entries(obj1).length == Object.entries(obj2).length) {
        for (const key in obj1) {
            return isEqual(obj1[key], obj2[key]);
        }
    }
    if (obj1.length === obj2.length) {
        return true;
    }
    return false;
}

function isEqual(value1, value2) {
    if (value1 === value2) return true;
    if (typeof value1 === "object" && typeof value2 === "object") {
        return isObjectEqual(value1, value2);
    }
    return false;
}

const cases = [
    {
        value1: { a: 1, b: 2 },
        value2: { b: 2, a: 1 },
        result: true,
        msg: " properties in different order",
    },
    {
        value1: { a: 1 },
        value2: { b: 1 },
        result: false,
        msg: "different properties ",
    },
    {
        value1: [1, 2],
        value2: { b: 2, a: 1 },
        result: false,
        msg: "different objects",
    },
    {
        value1: { a: undefined },
        value2: { b: 1 },
        result: false,
        msg: "first value undefined",
    },
    {
        value1: { b: 1 },
        value2: { a: undefined },
        result: false,
        msg: "second value undefined",
    },
    {
        value1: null,
        value2: null,
        result: true,
        msg: "both null",
    },
    {
        value1: 1,
        value2: 1,
        result: true,
        msg: "same number",
    },
    {
        value1: 1,
        value2: "1",
        result: false,
        msg: "same number as different types",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 3 } },
        result: false,
        msg: "different nested objects",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 1 } },
        result: true,
        msg: "same nested objects",
    },
    {
        value1: [],
        value2: [],
        result: true,
        msg: "empty arrays",
    },
    {
        value1: {},
        value2: [],
        result: false,
        msg: "empty array and empty object",
    },
];
function test(cases) {
    for (const i of cases) {
        const icon = isEqual(i.value1, i.value2) === i.result ? "✅" : "❌";
        console.log(i.msg, icon);
    }
}
test(cases);

console.log(isEqual({ a: { b: 1 } }, { a: { b: 1 } }));
