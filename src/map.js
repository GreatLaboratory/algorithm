const m = new Map();

m.set('one', 1);
m.set('two', '2');
m.set(3, true);
m.set(false, 0);

console.log(m.get('one')); // 1
console.log(m.get('two')); // '2'
console.log(m.get(3)); // true
console.log(m.get(false)); // 0
console.log(m.has(false)); // true

m.delete(false);
console.log(m.has(false)); // false
console.log(m.size); // 3

for (const value of m) {
    console.log('m을 순회중 -> ' + value);
}
for (const value of m) {
    console.log('m의 키값을 순회중 -> ' + value[0]);
}
for (const value of m) {
    console.log('m의 밸류값을 순회중 -> ' + value[1]);
}
/*
		m을 순회중 -> one,1
		m을 순회중 -> two,2
		m을 순회중 -> 3,true
		m의 키값을 순회중 -> one
		m의 키값을 순회중 -> two
		m의 키값을 순회중 -> 3
		m의 밸류값을 순회중 -> 1
		m의 밸류값을 순회중 -> 2
		m의 밸류값을 순회중 -> true
*/

console.log(m.keys());
console.log(m.values());
console.log(m.entries());
/*
		[Map Iterator] { 'one', 'two', 3 }
		[Map Iterator] { 1, '2', true }
		[Map Iterator] { [ 'one', 1 ], [ 'two', '2' ], [ 3, true ] }
*/
