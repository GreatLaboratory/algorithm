/*
    <sort()>

    1. 기본적으로 사전식 정렬이다. 문자열 배열이라면 알파벳 순으로 정렬한다.
    2. 따라서 [10, 20, 30, 100, 500, 1000]을 대상으로 [10, 100, 1000, 20, 30, 500] 이렇게 정렬한다.
    3. 숫자의 오름차순 정렬은 arr.sort((a, b) => a - b);
    4. 숫자의 내림차순 정렬은 arr.sort((a, b) => b - a);
    5. 콜백함수의 반복 횟수는 arr.length -1 이고, 콜백함수의 매개변수에서 a는 arr[1]이고 b는 arr[0]이다.
    6. a-b의 값이 음수면 b를 앞으로 보내고, 양수면 그대로 둔다. (정렬방식)
*/
const solution = (nums) => {
    if (nums === nums.split(' ').sort((a, b) => a - b).join(' ')) return 'YES';
    else return 'NO  ';
};
console.log(solution('2 4 6 7 8'));
console.log(solution('176 156 155 165 166 169'));
console.log(solution('155 156 165 166 169 176'));


/*
    <정렬이론>
    
    1. 선택 정렬 : 가장 작은 최솟값을 뽑아서 차례대로 새로운 배열에 push시킨다.
    2. 삽입정렬 : 첫번째는 새로운 빈 배열 첫번째로 그대로 넣는데 두번째 숫자를 첫번째 숫자와 비교해서 작으면 앞에 넣고 크면 뒤에 넣는다. 
    3. 병합정렬 : 배열을 반으로 나눈다. 각각 정렬시키는데 반을 또 반으로 나눈다. 이후 합친다.
    4. 퀵정렬 : 기준점을 정해서 정렬한다. 이후 합친다.
    5. 버블정렬 : 연속한 두 개의 인덱스를 서로 비교한 후 스위칭한다. 배열 길이가 4면 4*(1+2+3+4)번 반복문을 돌린다.
*/

// 선택정렬
const arr = [1, 9, 555, 6, 11, 3, 88, 99, 45, 456];
const length = arr.length; // 이렇게 배열길이를 상수에 넣는 이유 - 밑에 코드에서 splice함수로 인해 배열의 길이가 계속 줄어들기 때문
const result = [];
for (let i = 0; i < length; i++) { // 여기서 length가 아닌 arr.length를 넣으면 원하는 결과를 얻지 못한다.
    // const min = arr.reduce((acc, value) => acc > value ? value : acc);
    const min = Math.min.apply(null, arr);
    result.push(min);
    arr.splice(arr.indexOf(min), 1);
}
console.log(result); // [ 1, 3, 6, 9, 11, 45, 88, 99, 456, 555 ]

const arr2 = [1, 9, 555, 6, 11, 3, 88, 99, 45, 456];
const result2 = [];
while (arr2.length !== 0) {
    const min = Math.min.apply(null, arr2);
    result2.push(min);
    arr2.splice(arr2.indexOf(min), 1);
}
console.log(result2); // [ 1, 3, 6, 9, 11, 45, 88, 99, 456, 555 ]


// 삽입정렬
const arr3 = [1, 9, 555, 6, 11, 3, 88, 99, 45, 456];
const length3 = arr3.length;
const result3 = [];
const findIndex = (array, num) => {
    let insertLocationIndex;
    if (array.length === 0) return 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < num) insertLocationIndex = i + 1;
    }
    return insertLocationIndex;
};
for (let i = 0; i < length3; i++) {
    const insertNum = arr3.shift(); // arr배열을 순서대로 맨앞에 있는 원소를 빼낸다.
    let insertLocationIndex = findIndex(result3, insertNum); // 맨앞에 있던 원소가 정렬될 배열에 들어갈 자리 인덱스
    result3.splice(insertLocationIndex, 0, insertNum); // 삽입 코드
}
console.log(result3); // [ 1, 3, 6, 9, 11, 45, 88, 99, 456, 555 ]


// 병합정렬
const byungHab = (arr) => {
    let result = [];

    // 탈출코드
    if (arr.length <= 1) return arr;
    
    // 분할 코드
    const middleIndex = Math.floor(arr.length / 2);
    let firstArr = byungHab(arr.slice(0, middleIndex));
    let secondArr = byungHab(arr.slice(middleIndex, ));
    
    // 정복 코드
    while (firstArr.length && secondArr.length) {
        if (firstArr[0] < secondArr[0]) result.push(firstArr.shift());
        else result.push(secondArr.shift());
    }
    while (firstArr.length) { // 여기서 firstArr은 이미 정렬된 배열이라 비교없이 그냥 인덱스 0부터 순서대로 넣는다.
        result.push(firstArr.shift());
    }
    while (secondArr.length) { // 여기서 secondArr은 이미 정렬된 배열이라 비교없이 그냥 인덱스 0부터 순서대로 넣는다.
        result.push(secondArr.shift());
    }

    return result;
};
console.log(byungHab([4, 9, 6, 11, 444, 85, 22])); // [ 4, 6, 9, 11, 22, 85, 444 ]


// 퀵정렬
const quick = (arr) => {
    if (arr.length <= 1) return arr;

    const standard = arr.shift();
    const firstArr = [];
    const secondArr = [];
    
    for (const i in arr) {
        if (arr[i] < standard) firstArr.push(arr[i]);
        else secondArr.push(arr[i]);
    }
    return quick(firstArr).concat(standard, quick(secondArr));
};
console.log(quick([4, 9, 6, 11, 444, 85, 22]));


// 버블정렬
const bubble = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
console.log(bubble([1, 9, 555, 6, 11, 3, 88, 99, 45, 456])); // [ 1, 3, 6, 9, 11, 45, 88, 99, 456, 555 ]
