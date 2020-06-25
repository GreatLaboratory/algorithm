const solution = (scores) => {
    const scoreArr = scores.split(' ').map(score => parseInt(score));
    const result = {};
    for (const index in scoreArr) {
        result[scoreArr[index]] = result[scoreArr[index]] === undefined ? 1 : result[scoreArr[index]] += 1;
    }
    const temp = Object.keys(result).sort((a, b) => a - b).reverse();
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        sum += result[temp[i]];
    }
    return sum;
};
const solution2 = (scores) => {
    const scoreArr = scores.split(' ').map(score => parseInt(score)).sort((a, b) => a - b);
    const arr = [];
    let count = 0;
    while (arr.length < 3) {
        const n = scoreArr.pop();
        if (!arr.includes(n)) arr.push(n);
        count += 1;
    }
    return count;
};
console.log(solution('97 86 75 66 55 97 85 97 97 95'));
console.log(solution2('97 86 75 66 55 97 85 97 97 95'));
