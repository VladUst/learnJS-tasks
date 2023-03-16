function printNumbers(from, to) {
    let current = from;
    function run() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }
    let timerId = setInterval(run, 1000);
}
