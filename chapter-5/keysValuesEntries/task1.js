function sumSalaries(salaries) {
    return Object.values(salaries).reduce((prev, cur) => prev + cur, 0);
}
