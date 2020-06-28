/*
    indexOf()함수 : 문자열과 배열에서 둘 다 가능
*/

const solution = (sentence, findWord) => {
    return sentence.indexOf(findWord);
};
const solution2 = (arr, findWord) => {
    return arr.indexOf(findWord);
};

console.log(solution('pineapple is yummy', 'apple'));
console.log(solution2(['hi', 'hello', '안녕', '봉쥬르'], 'hi'));
