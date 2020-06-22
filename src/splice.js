/*
    splice() 함수
    - 형식 : Array.splice(start: number, deleteCount?: number, ...items?: number[]): number[]
    1. start는 삭제 또는 삽입을 시작할 원소의 인덱스
    2. deleteCount는 삭제할 원소의 개수 - 만약 0이면 기존 배열에서 삭제되는 원소는 없다.
    3. ...items는 숫자 또는 숫자배열이 들어오는데 이는 삽입하는데 사용된다.
    4. 해당 함수는 삭제된 원소들을 배열로 리턴한다.
    5. 대상배열의 원본을 변경하는 함수이다.
*/

const arr = [100, 200, 300, 400, 500];
const aaa = arr.splice(3);
console.log(arr); // [ 100, 200, 300 ]
console.log(aaa); // [ 400, 500 ]

const arr2 = [200, 100, 300];
const bbb = arr2.splice(2, 0, 10000);
console.log(arr2); // [ 200, 100, 10000, 300 ]
console.log(bbb); // []
