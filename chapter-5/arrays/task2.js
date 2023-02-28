function sumInput() {
    let numbers = [];
    while (true) {
        let val = prompt('Number', 0);
        if (val === '' || val === null || !isFinite(val)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
