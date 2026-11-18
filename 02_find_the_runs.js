function findRuns(array) {
    if (array.length === 0) return [];

    const result = [];
    let currentRun = [array[0]];
    let direction = 0;

    for (let i = 1; i < array.length; i++) {
        const diff = array[i] - array[i - 1];

        if (diff === 0) {
            currentRun.push(array[i]);
        }
        const newDirection = diff >= 0 ? 1 : -1;

        if (direction === 0 || direction === newDirection) {
            currentRun.push(array[i]);
        } else {
            result.push(currentRun);
            currentRun = [array[i]];
        }
        direction = newDirection;
    }
    result.push(currentRun);
    return result;
}
console.log(findRuns([1, 3, 3, 4, 6, 0, 2, 1, 2, 3]));
console.log(findRuns([1, 0, 3, 4, 6, 4, 2, 1, 2, 3]));
