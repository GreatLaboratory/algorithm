/*
    1. reduce함수의 콜백함수 인자 -> accumulator, currentValue, currentIndex, array
    2. 현재 accumulator에 이전 콜백에서의 리턴값이 들어온다.
    3. 최종 리턴값이 reduce함수의 리턴값이다.
    4. 콜백함수 뒤에 초기값이 나올 수 있다.

    - 초기값이 없을 경우 -> accumulator: array[0], currentValue: array[1], currentIndex: 1 (콜백함수 array.length-1번 호출)
    - 초기값이 있을 경우 -> accumulator: 초기값, currentValue: array[0], currentIndex: 0 (콜백함수 array.length번 호출)
*/

const solution = (students) => {
    const arr = students.split(' ');
    const result = {};

    // 객체가 완성되는 코드
    // result -> { '혜원': 4, '유진': 2, '원범': 2 }
    for (const index in arr) {
        result[arr[index]] = result[arr[index]] === undefined ? 1 : result[arr[index]] += 1;
    }

    // Object.keys(result)는 인자에 있는 객체의 키값들만 뽑아내서 배열로 리턴하는 함수이다.
    // Object.keys(result) -> ['혜원', '유진', '원범']
    const banJang = Object.keys(result).reduce((accumulator, currentValue) => result[accumulator] > result[currentValue] ? accumulator : currentValue);
    console.log(`${banJang}(이)가 총 ${result[banJang]}표로 반장이 되었습니다.`);
    console.log(result);
    
};
solution('혜원 유진 유진 원범 원범 혜원 혜원 혜원');

const solution2 = (scores) => {
    const scoreArr = scores.split(' ');
    const avg = scoreArr.map(score => parseInt(score)).reduce((a, b) => a + b) / scoreArr.length;
    return Math.floor(avg);
};
console.log(solution2('20 30 40'));
