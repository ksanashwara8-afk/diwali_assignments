const t = require("./test_cases");

function main() {
    t.testBoolean();
    t.testNumber();
    t.testString();
    t.testArray();
    t.testObject();
    t.testInequality();
    t.testNullUndefinedNan();
}

main();
