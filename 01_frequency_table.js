function frequencyTable(array) {
    const result = {};

    for (const item of array) {
        if (result[item]) {
            result[item]++;
        } else {
            result[item] = 1;
        }
    }
    return result;
}

const fruits = ["apple", "banana", "apple", "apple", "orange", "banana"];
console.log(frequencyTable(fruits));

// function frequencyTable(array) {
//     const result = {};

//     for (const item of array) {
//         result[item] = (result[item] ?? 0) + 1;
//     }

//     return result;
// }
