const t = require("./test_cases");

function isObjectEqual(obj1, obj2) {
    for (const key in obj1) {
        return isEqual(obj1[key], obj2[key]);
    }
    return obj1.length === obj2.length;
}

function isEqual(value1, value2) {
    if (
        typeof value1 === "object" &&
        typeof value2 === "object" &&
        value1 != null
    ) {
        return isObjectEqual(value1, value2);
    }
    if (value1 == null || value2 == null) return false;
    return value1 === value2;
}

function test(cases) {
    for (const i of cases) {
        const icon = isEqual(i.value1, i.value2) === i.result ? "✅" : "❌";
        console.log(i.msg, icon);
    }
}

test(t.cases);
