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
        value2: {},
        result: true,
        msg: "empty objects",
    },
    {
        value1: {},
        value2: [],
        result: false,
        msg: "empty object and empty array",
    },
];

module.exports = {
    cases,
};
