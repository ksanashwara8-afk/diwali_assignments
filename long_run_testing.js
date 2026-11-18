const runs = require("./02_find_the_runs");

function test(msg, expected, a) {
    const icon = runs.findRuns(a) == expected ? "✅" : "❌";
    console.log(icon, "|", msg, "|", runs.findRuns(a));
}

function testArray() {
    test("Empty array", [], []);
    test(
        "All ascending",
        [
            [1, 2, 3, 6],
            [2, 7],
        ],
        [1, 2, 3, 6, 2, 7],
    );
    test(
        "All descending",
        [
            [7, 2],
            [6, 3, 2, 1],
        ],
        [7, 2, 6, 3, 2, 1],
    );
    test(
        "Same consecutive numbers",
        [
            [7, 2, 2],
            [6, 3, 2, 1, 1],
        ],
        [7, 2, 2, 6, 3, 2, 1],
    );
}

function main() {
    testArray();
}

main();
