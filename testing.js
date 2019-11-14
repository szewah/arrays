// var string = "I went to the hill to look at the guinea-pigs";


// function sum(string) {
//     var results = [];
//     var newString = string.replace(/\s/g, '').split('');
//     return newString.map((num, i) => {
//         if (num.charCodeAt() > 110) {
//             console.log(num.charCodeAt());
//         }
//         // array.push(results);
        
//     });
// };


    var string = 'I went to the hill to look at the guinea-pigs';


function convert(string) {
    newString = string.replace(/\s/g, "");
    var newArray = [...newString];
    const final = newArray.map(char => {
        return char.charCodeAt();
    }).filter(num => {
        return num < 100;
    }).sort((a, b) => {
        return a > b ? 1: -1;
    })
    return final;
}
    

console.log(convert(string));

