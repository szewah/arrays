// var a = [1,2,3,4,5,6,7,8];
// var b = [10,11,13,1,4,6,78,2];
// var results = [];

// function compare (a, b) {
//     for (var i = 0; i < a.length; i++) {
//         for (var j = 0; j < b.length; j++) {
//             console.log(a[i], b[j])
//             if (a[i] === b[j]) {
//                 results.push(b[j])
//             }
//             else {
//                 console.log('They are not the same');
//             }
//         }
//     };
//     return results;
// };

// console.log(compare(a,b));

// function adEl(input) {
//     var x;
//     var y;
//     //must look up;
//     var p = Number.MIN_SAFE_INTEGER;
//     for (var i = 0; i<input.length; i++) {
//         x = input[i];
//         y = input[i+1];
//         if (x * y > p) {
//             p = x * y;
//         }
//     }
//     return p;
// }

// console.log(adEl([3, 6, -2, -5, 7, 3]));

// function compareObj (a, b) {
//     var aObj = Object.getOwnPropertyNames(a);
//     var bObj = Object.getOwnPropertyNames(b);
//     for (var i = 0; i<bObj.length; i++) {
//         var propName = bObj[i];
//         if (a[propName] !== b[propName]) {
//             return '1 ' + false;
//         }
//     }
//     return '2 ' + true;
// }

// console.log(compareObj({Name: 'Ann', Age: '41'},{Name: 'Bob', Age: '41'} ))

var hash = '#';
var dots ='.';
var results =[];
var results1=[];

for (var i = 0; i < 3; i++) {
    results.push(hash);
    console.log(results);
    for (var j = 0; j<3; j++) {
        results1.push(dots);
    }
}