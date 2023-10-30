function arraySort(arr) {
    
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr;
}

const a = [5, 2, 9, 1, 5, 6];
const sortedArray = arraySort(a);
console.log(sortedArray); 
/**
 * 
 */