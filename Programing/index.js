// let number = 10;

// function counter(number){
// let count = number;
// return function(){
//     count++
//     return count
// }
// }

// let fn = counter(number);

// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());

// let calls = ['call' , 'call' , 'call' , 'call']
// let result = []
// let number = 10;

// function counter(number){
// let count = number;
// return function(){
//     count++
//     result.push(count)
// }
// }

// let fn = counter(number);

// function call(calls){
    
// for(let i = 0 ; i < calls.length ; i++){
//    fn()
// }
 
// }
// call(calls)
// console.log(result);

// function sumOfDigits(num){
// let digit 
// let result = 0
// while(num !== 0){
//     digit = num % 10;
//     num = (num - digit) / 10
//     result += digit;

// }
// num = result
// digit  = 0
// result = 0
// while(num !== 0){
//     digit = num % 10;
//     num = (num - digit) / 10
//     result += digit;

// }

// return result;
// }

// console.log(sumOfDigits(12345))


// function getEvenNumbers(num){


// if(num % 2 === 0){
//     console.log(num)
// }
// num++
// if(num <= 10){
//     getEvenNumbers(num)
// }
// }
// getEvenNumbers(2)

// function compare(num){
//     let n = num;
//     return function(number){
//         if(n < number){
//             return true;
//         }
//         else if(n > number){
//             return false;
//         }
//         else{
//             return null
//         }
//     }
// }

// let comp = compare(20);
// console.log(comp(10));
// console.log(comp(20));
// console.log(comp(35));

// let myKeyName = 'esim';


// let user = {
//     name: 'John',
//     age: 34,

// }

// console.log(user);
// delete user.age
// console.log(user);

// let str = 'hello from js';
// let arr = str.split(' ')

// console.log(arr)
// function isValid(s) {
//     const stack = []; // .pop()
//     const map = {
//       "(": ")",
//       "[": "]",
//       "{": "}"
//     };
//     for(let i = 0; i < s.length; i++) {
//       if (map[s[i]]) {
//         stack.push(s[i]);
//       } else {
//         const last = stack.pop();
//         if (s[i] !== map[last]) {
//           return false;
//         }
//       }
//     }
//     return stack.length === 0;
//   }
//   // true
//   console.log(isValid("()"));
//   console.log(isValid("[]"));
//   console.log(isValid("{}"));

//   // false
//   console.log(isValid("{[}"));

// let user = {
//     user_name:"Sargis",
//     sayHello: function (){
//         let self = this;
//     return function(){
//         console.log(self.user_name)
//     }
//   }
// }

// user.sayHello()()




// let n1 = 0;
// let n2 = 0;
// let add = n1 + n2;
// let subtract = n1 - n2;
// let multiply = n1 * n2;
// let devide = n1 / n2;

// let calc = {
    
//     setNumers: function(num1 , num2){
//         n1 = num1;
//         n2 = num2 ;
//     } , 
//     add: function(n1 , n2){
//        console.log(add)
//     } , 
//     subtract: function(n1 , n2){
//         return subtract
//     } , 
//     multiply: function(n1 , n2){
//         return multiply
//     } , 
//     divide: function(n1 , n2){
//         return devide
//     }
// };


// calc.setNumbers(3, 7); // set numbers

// calc.add() // 3 + 7 = // error
// calc.subtract() // 3 - 3 =
// calc.multiply() // 3 * 7 =
// calc.divide() // 3 / 7 =


// let user = {
//   name:"Sargis",
//   surname:"Nazaryan",
//   email:"sargisnazaryan4@gmail.com",
//   getUserName: function(){
//     return this.name
//   } , 
//   getSurname: function(){
//    return this.surname
//   },
//   getUserEmail: function(){
//     this.email
//   }
// }


// console.log(user.getUserName())

// let person1 = {
//     name:"John",
//     age:34,
//     getPersonInfo: function(){
//         console.log(`my name is ${this.name} , i am ${this.age}`)
//     }
// }

// let person2 = {
//     name:"Mike",
//     age:39,
// }



// person1.getPersonInfo();
// person2.getPersonInfo = person1.getPersonInfo;
// person2.getPersonInfo()

//task 


// function showMemberInfo() {
//     console.log(`Member: ${this.name}. Age: ${this.age}`);
//   }
//   const team = {
//     members: [
//       { name: 'Mike', age: 23 },
//       { name: 'John', age: 30 },
//       { name: 'Kevin', age: 12 },
//     ],
//     showMembers: function() {
//     for(let i = 0 ; i < this.members.length ; i++){
//         function showMembersInfo()
//     }
//     }
//   };
//   team.showMembersInfo() = showMemberInfo() 
//   team.showMembers();
//   // Member: Mike. Age: 23
//   // Member: John. Age: 30
//   // Member: Kevin. Age: 12

// function applyToEach(array , func){
// let newArray = [];
// let number 
// for(let i = 0 ; i < array.length ; i++){
//  number = array[i];
//  newArray.push(func(array[i]))
// }
// return newArray 
// }

// let numbers = [1,2,3,4,5,6]
// let newNumbers = applyToEach(numbers , (number) => number * 2)
// console.log(newNumbers)


// function test(){
//     console.log(arguments)
// }

// test("Sargis" , "Nazaryan")


// let arr = [1,4,3,6,8,5];

// function getMax(array){
//  return Math.max.apply(Math, array)
// }

// console.log(getMax(arr))

// let info = function(country){
// console.log(this.name , "is from" , country) 
// }

// let person1 = {
//     name:"Sargis",
// }
// let person2 = {
//     name:"Joe",
// }

// let person1From = info.bind(person1 , "Armenia");
// let person2From = info.bind(person2 , "United Kingdom");

// person1From();
// person2From();

// let arr = [1,2,3,4,5];


// let newArr = arr.map((el) => {
//     return 2
// });

// console.log(newArr)


// let number = [1,2,3,4,5,6,7,8,9];

// let isTrue = number.filter((el) => { return el % 2 === 0 });

// console.log(isTrue)

// let arr = [1,2,3,4,5,6,7,8];

// let newArr = arr.slice(0 , 3);

// console.log(newArr);


// let arr = [1,2,3,4,5,6,7,8];
// let oldArr = []

// for(let i = 0 ; i < arr.length ; i++){
//     oldArr.push(arr[i])
// }

//  arr.reverse();

// console.log(arr);
// console.log(oldArr)


// let arr = [1,12,23,11,123];

// arr.sort((el1,el2) => {return el1 - el2})

// console.log(arr)


let users = [
{name:"John" , age:35}
,{name:"Kevin" , age: 10}
,{name:"rylan" , age:9}
,{name:"James" ,  age: 14}
]

let newUsers = []

users.forEach((el) => {if(el.age > 10){newUsers.push(el)}})

console.log(newUsers)
