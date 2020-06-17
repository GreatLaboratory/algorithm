let d = {
    'height':180,
    'weight':78,
    'temperature':36,
    'eyesight':1
};
console.log(d['weight']);
console.log(d.weight);


const solution = (hanguelPlanetName) => {
    const planet = {
        '수성': 'Mercury',
        '금성': 'Venus',
        '지구': 'Earth',
        '화성': 'Mars',
        '목성': 'Jupiter',
        '토성': 'Saturn',
        '천왕성': 'Uranus',
        '해왕성': 'Neptune',
    };
    return planet[hanguelPlanetName];
};
console.log(solution('수성'));



const solution2 = (students, scores) => {
    const studentArr = students.split(' ');
    const scoreArr = scores.split(' ').map(score => parseInt(score, 10));
    const result = {};

    // 객체에 key-value 할당
    for (let i = 0; i < studentArr.length; i++) {
        result[studentArr[i]] = scoreArr[i];
    }
    return result;
};
console.log(solution2('Yujin Hyewon', '70 100'));



const solution3 = (students) => {
    const arr = students.split(' ');
    const result = {};

    // 객체가 완성되는 코드
    for (const index in arr) {
        result[arr[index]] = result[arr[index]] === undefined ? 1 : result[arr[index]] += 1;
    }

    // result -> { '혜원': 4, '유진': 2, '원범': 2 }
    // Object.keys(result) -> ['혜원', '유진', '원범']
    const banJang = Object.keys(result).reduce((accumulator, currentValue) => result[accumulator] > result[currentValue] ? accumulator : currentValue);
    console.log(`${banJang}(이)가 총 ${result[banJang]}표로 반장이 되었습니다.`);
    console.log(result);
    
};
solution3('혜원 유진 유진 원범 원범 혜원 혜원 혜원');
