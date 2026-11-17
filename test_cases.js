const eq = require("./05_deep_equality");

function test(msg, expected, a, b) {
    const icon = eq.isEqual(a, b) === expected ? "✅" : "❌";
    console.log(icon, "|", msg);
}

function testBoolean() {
    test("Same true booleans should be true", true, true, true);
    test("Same false booleans should be true", true, false, false);
    test("One false and true should be false", false, true, false);
}

function testNumber() {
    test("Same positive numbers should be true", true, 1, 1);
    test("Same negative numbers should be true", true, -1, -1);
    test("Different numbers should be false", false, 1, 2);
    test("Different sign numbers should be false", false, 1, -1);
}

function testString() {
    test("Same strings should be true", true, "1", "1");
    test("Different strings should be false", false, "1", "2");
}

function testArray() {
    test("Empty arrays should be true", true, [], []);
    test("Same arrays should be true", true, [1, 2], [1, 2]);
    test("Different arrays should be false", false, [1, 2], [1, 3]);
    test("Same nested arrays should be true", true, [1, [2, 3]], [1, [2, 3]]);
    test(
        "Different nested arrays should be false",
        false,
        [1, [2, 4]],
        [1, [2, 3]],
    );
}

function testObject() {
    test("Empty objects should be true", true, {}, {});
    test("Same objects should be true", true, { b: 2, a: 1 }, { a: 1, b: 2 });
    test(
        "Objects with different values should be false",
        false,
        { a: 1, b: 3 },
        { a: 1, b: 2 },
    );
    test(
        "Objects with different keys should be false",
        false,
        { a: 1, c: 2 },
        { a: 1, b: 2 },
    );
    test(
        "Same nested objects should be true",
        true,
        { a: 1, b: { c: 2 } },
        { a: 1, b: { c: 2 } },
    );
    test(
        "Different nested objects should be false",
        false,
        { a: 1, b: { c: 1 } },
        { a: 1, b: { c: 2 } },
    );
}

function testInequality() {
    test("Number and string should be false", false, 1, "1");
    test("Number and array should be false", false, 1, [1]);
    test("Number and object should be false", false, 1, { a: 1 });
    test("Number and undefined should be false", false, undefined, 1);
    test("Number and null should be false", false, null, 1);
    test("Number and NaN should be false", false, NaN, 1);
    test("String and array should be false", false, "1", [1]);
    test("String and object should be false", false, "1", { a: 1 });
    test("String and undefined should be false", false, undefined, "1");
    test("String and null should be false", false, null, "1");
    test("String and NaN should be false", false, NaN, "1");
    test("Array and object should be false", false, [1], { a: 1 });
    test("Array and undefined should be false", false, undefined, [1]);
    test("Array and null should be false", false, null, [1]);
    test("Array and NaN should be false", false, NaN, [1]);
    test("Object and undefined should be false", false, undefined, { a: 1 });
    test("Object and null should be false", false, null, { a: 1 });
    test("Object and NaN should be false", false, NaN, { a: 1 });
}

function testNullUndefinedNan() {
    test("Both nulls should be true", true, null, null);
    test("Both undefineds should be true", true, undefined, undefined);
    test("Both NaNs should be false", false, NaN, NaN);
}

module.exports = {
    testBoolean,
    testNumber,
    testString,
    testArray,
    testObject,
    testInequality,
    testNullUndefinedNan,
};
