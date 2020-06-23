Array.prototype.equals = function (array) {
    if (!array) return false;
    if (this.length != array.length) return false;
    for (let i = 0, l = this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i])) return false;       
        } else if (this[i] != array[i]) { 
            return false;   
        }           
    }       
    return true;
};

const arr = [4, 5, 6, 7, 8];
const arr2 = [4, 5, 6, 7, 8];
console.log(arr === arr2); // false
console.log(arr.equals(arr2)); // true
