const t = require("./test_cases");

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
    if (value1 === undefined || value2 === undefined) {
        return false;
    }
    if (value1 === value2) {
        return true;
    }
    if (typeof value1 === "object" && typeof value2 === "object") {
        return isObjectEqual(value1, value2);
    }
    return false;
}

function test(cases) {
    for (const i of cases) {
        const icon = isEqual(i.value1, i.value2) === i.result ? "✅" : "❌";
        console.log(i.msg, icon);
    }
}

test(t.cases);
