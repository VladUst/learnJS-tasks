function Accumulator(val) {
    this.value = val;
    this.read = function () {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };
}
