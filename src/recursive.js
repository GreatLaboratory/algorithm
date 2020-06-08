// 재귀함수 && 일반 반복문

// 합계
const sum = (n) => {
    if (n === 1) return 1; // 이게 바로 재귀함수의 종료조건이다. 없으면 무한루프
    else return n + sum(n - 1);
};
const sum2 = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
console.log(sum(100)); // 5050
console.log(sum2(100)); // 5050

// 2진수 변환
const binaryCode = (num) => {
    if (num === 0 || num === 1) return num.toString(); // 재귀함수의 종료조건
    else return binaryCode(Math.floor(num / 2)) + (num % 2).toString(); 
};
console.log(binaryCode(10)); // 1010

// 문자열 뒤집기
const reverseStr = (str) => {
    const arr = str.split('');
    const y = arr.pop();

    if (str.length === 1) return str; // 재귀함수의 종료조건
    else return y + reverseStr(arr.join(''));
};
const reverseStr2 = (str) => {
    const arr = str.split('');
    let result = '';
    while (arr.length !== 0) {
        result += arr.pop();
    }
    return result;
};
console.log(reverseStr('great')); // taerg
console.log(reverseStr2('great')); // taerg

// 각자리수 더하기
const solution = (num) => {
    if (num < 10) return num; // 재귀함수의 종료조건
    else return (num % 10) + solution(Math.floor(num / 10));
};
const solution2 = (num) => {
    let sum = 0;
    while (num >= 10) {
        sum += (num % 10);
        num = Math.floor(num / 10);
    }
    return sum + num;
};
console.log(solution(4569)); // 24
console.log(solution2(4569)); // 24

// 피보나치 순열 - 1 1 2 3 5 8 13 21 34 55 89
const fibonacci = (n) => {
    if (n === 1 || n === 2) return 1; // 재귀함수의 종료조건
    else return fibonacci(n - 2) + fibonacci(n - 1);
};
const fibonacci2 = (n) => {
    const arr = [1, 1];
    let result = 0;
    if (n === 1 || n === 2) return 1;
    for (let i = 0; i < n - 2; i++) {
        if (i !== n - 3) {
            arr.push(arr[i] + arr[i + 1]);
            continue;
        }
        result += (arr[i] + arr[i + 1]);
    }
    return result;
};
const fibonacci3 = (n) => {
    let a = 1;
    let b = 1;
    if (n === 1 || n === 2) return 1;
    else {
        for (let i = 0; i < n - 2; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
};
console.log(fibonacci(6)); // 8
console.log(fibonacci2(7)); // 13
console.log(fibonacci3(8)); // 21
