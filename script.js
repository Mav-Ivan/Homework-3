
// task 1
// option 1

// let arr = [2, 3, 4, 5]
// let res = 0

// for(let i = 0 ; i < arr.length; i+=1){
//     res += arr[i]
// }
// console.log(res);

// option 2
// let arr = [2, 3, 4, 5]
// let res = 0
// let i = 0

// while(i < arr.length){
//     res += arr[i]
//     i += 1
// }
// console.log(res);

// task 2 

// for(let i = 0;  i < 15 ; i += 1){
//     if( i % 2 == 0){
//         console.log(`${i} is even`);
//     }else{
//         console.log(`${i} is odd`);
//     }

// }

// task 3


// let arr = []
// let res = 0

// function randArray(k) {

//     for (let i = 0; i < k; i += 1) {
//         arr.push(Math.round(Math.random() * 500))
//     }
// }

// randArray(10)
// console.log(arr);


// task 4

// let a = +prompt("Enter number (1)")
// let b = +prompt("Enter number (2)")
// console.log(raiseToDegree(a,b))

// function raiseToDegree(a,b){
//     return Math.pow(a,b)
// }

// task 5

// function findMin(){

//     let min = Number.MAX_VALUE
//     for(let i = 0; i < arguments.length; i += 1){

//         if(min > arguments[i]){
//             min = arguments[i]
//         }
//     }

//     console.log(min);
//     return min
// }

// findMin(-12, 14, 4, -4, 0)

// task 6

// function findUnique(arr) {

//     let res = true

// for (let i = 0; i < arr.length; i++) {

//     if(arr.lastIndexOf(arr[i]) != arr.indexOf(arr[i])){
//         res = false
//     }
// }
//     console.log(res);

// }

// findUnique([1, 5, 2, 3, 22, 5, 11])


// task 7 

// function lastElem (arr, elem){
//     if(elem == undefined) {
//         elem = 1
//     }

//     let newArr = arr.reverse()

//     return newArr.slice(0,elem)
// }

// console.log(lastElem([1, 2, 3, 22, 5, 11]));

// task 8

function strToUpper(str) {
    let arr = str.split(' ')
    let res = []

    res = arr.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    console.log(res.join(' '));
}

strToUpper('i love java script')
