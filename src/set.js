// 중복 제거한 배열로 리턴
const arr1 = [0, 0, 3, 4, 5, 5, 5, 8, 9, 9, 11];
const result = [...new Set(arr1)];
const result2 = Array.from(new Set(arr1));
console.log(result); // [ 0, 3, 4, 5, 8, 9, 11 ]
console.log(result2); // [ 0, 3, 4, 5, 8, 9, 11 ]

// 문자열의 중복 없애기
const str = 'abbbsssidlffff';
const strSet = new Set(str);
console.log(strSet); // Set { 'a', 'b', 's', 'i', 'd', 'l', 'f' }

// Set의 내장함수
let mySet = new Set();
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
let o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2}); // o와 다른 객체를 참조하므로 괜찮음
mySet.has(1); // true
mySet.has(3); // false, 3은 set에 추가되지 않았음
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true
mySet.size; // 5
mySet.delete(5); // set에서 5를 제거함
mySet.has(5); // false, 5가 제거되었음
mySet.size; // 4, 방금 값을 하나 제거했음
console.log(mySet);// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}


// set 내 항목에 대해 반복
// 순서대로 항목을 (콘솔에) 기록: 1, "some text", {"a": 1, "b": 2} 
for (let item of mySet) console.log(item);

// 순서대로 항목을 기록: 1, "some text", {"a": 1, "b": 2} 
for (let item of mySet.keys()) console.log(item);

// 순서대로 항목을 기록: 1, "some text", {"a": 1, "b": 2} 
for (let item of mySet.values()) console.log(item);

// 순서대로 항목을 기록: 1, "some text", {"a": 1, "b": 2} 
// (여기서 key와 value는 같음)
for (let [key, value] of mySet.entries()) console.log(key, value);



// Examples
let setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

setA.isSuperset(setB); // => true
setA.union(setC); // => Set [1, 2, 3, 4, 5, 6]
setA.intersection(setC); // => Set [3, 4]
setA.difference(setC); // => Set [1, 2]



// 교집합은 다음으로 흉내(simulate)낼 수 있음
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);

// 차집합은 다음으로 흉내낼 수 있음
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);

// forEach로 set 항목 반복
mySet.forEach(function (value) {
    console.log(value);
});
// 1
// 2
// 3
// 4
