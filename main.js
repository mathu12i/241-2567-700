// console.log('Hello World');
// console.log('Hello Worlddddd');

// prompt('What is your name?');

// prompt คือการใช้งานของ browser ในการรับค่าจาก user
// let คือการประกาศตัวแปร
// console.log คือการแสดงผลที่ console ของ browser

// map คือค่าใน Array แต่ละตัวจะทำการนำไปผ่าน Function ที่เรากำหนดไว้ 
// แต่ Map นั้น สามารถ return ค่าออกมาได้โดยค่าที่ return ออกมาจะเป็น Array

// string, number, boolean, array, object
// การใช้ let สามารถปรับเปลี่ยนค่าได้ แต่ห้ามประกาศ let ซ้ำ
// การใช้ const ไม่สามารถปรับเปลี่ยนค่าได้ จะ error

// string
// let firstname = 'Mook';
// const idcard = '6621604874';

// number
// let age = 25;
// let height = 5.9;

// boolean
// let isMarried = false;
// let isStudent = true;

// console.log('My name is', firstname, 'and I am', age, 'years old.');
////////////////////////////////////////////////////////

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ
** ยกกำลัง
*/

// let number1 = 5;
// let number2 = 10;
// let s = 'Hello';
// let t = ' World';

// let result = number1 % number2;
// let result2 = s + t;
// console.log(result2);
////////////////////////////////////////////////////////

/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ
*/ 

// let number1 = 5;
// let number2 = 5;

// let condition1 = number1 > number2; //Boolean ค่าที่ได้จะเป็น true หรือ false
// console.log('Result of Condition is', condition1);
////////////////////////////////////////////////////////

//if - else condition
/*
>= 80 = A
>= 70 = B
>= 60 = C
>= 50 = D
*/ 
// let score = prompt('Enter your score'); // รับค่าจาก user
// console.log('Your score is', score);

// if(score > 100 || score < 0) { // ถ้าคะแนนมากกว่า 100 หรือ น้อยกว่า 0
//     console.log('Invalid score');
// } else if(score >= 80) {
//     console.log('You are grade A');
// } else if(score >= 70) {
//     console.log('You are grade B');
// } else if(score >= 60) {    
//     console.log('You are grade C');
// } else if(score >= 50) {
//     console.log('You are grade D');
// } else {    
//     console.log('You are grade F');
// }
////////////////////////////////////////////////////////

/*
&& และ
|| หรือ
! not/ไม่
*/ 

// let num1 = 5;
// let num2 = 8;

// // true && true 
// let condition1 = num1 >= 3 && num2 >= 5; 
// console.log('Result of Condition1 is', condition1);
// // true || false = true
// let condition2 = num1 >= 3 || num2 >= 10;
// console.log('Result of Condition2 is', condition2);

// let age = 30;
// let gender = 'male';

// // true && true = true
// if(age >= 20 && gender == 'male') { // ถ้าอายุมากกว่าหรือเท่ากับ 20 และเป็นเพศชาย
//     console.log('You are adult');
// }

// // true || false = !(true) = false
// let condition1 = !(num1 >= 3) && num2 >= 5; 
// console.log('Result of Condition1 is', condition1);

// let number = 25;

// if(!(number % 2 == 0)) { // ถ้าเลขหาร 2 ไม่ลงตัว
//     console.log('Your are even number'); // เลขคู่
// } else {
//     console.log('Your are odd number'); // เลขคี่
// }
////////////////////////////////////////////////////////

/*
while loop
for loop
*/

// let counter = 1;

// while(counter <= 10) { //ถ้า true ถึงจะทำงาน
//     console.log('while loop');
//     counter++; // ต้องมีการเพิ่มค่า ++ -- เพื่อไม่ให้เข้า loop อินฟินิตี้
// }

// for (let counter = 1; counter <= 10; counter++) {
//     console.log('for loop');
// }
////////////////////////////////////////////////////////

/*
array
*/
// let age1 = 20;
// let age2 = 30;
// let age3 = 40;
// let age4 = 50;
// console.log(age1, age2, age3, age4);
// let ages = [20, 30, 40, 50]; 

// console.log('array', ages[0], ages[1]); // แสดงค่าใน array ตำแหน่งที่ 0 และ 1
// console.log('array list', ages); // แสดงค่าทั้งหมดใน array

// // 1. แทนที่ค่าใน array
// ages = [45, 50];
// console.log('New ages', ages);

// // 2. ต่อ array
// ages.push(55); // เพิ่มค่าใน array ต่อท้าย
// console.log('New ages', ages);

// // 3. ลบค่าใน array
// ages.pop(); // ลบค่าใน array ต่อท้าย
// console.log('New ages', ages);

// let age = [30, 45, 50, 35, 40];

// // 4. เรียงค่าใน array
// console.log(age);
// age.sort(); // เรียงค่าใน array จากน้อยไปมาก
// console.log(age);

// let name_list = ['Mook', 'Ploy', 'Pim', 'Pam'];
// name_list.push('Mike'); // เพิ่มค่าใน array ต่อท้าย
// console.log(name_list.length); // นับจำนวนข้อมูลใน array

// for (let index = 0; index <= name_list.length; index++) {
//     console.log('Names list', name_list[index]); // แสดงค่าใน array ตามตำแหน่ง
// }
////////////////////////////////////////////////////////

/*
object
*/
let student = [{ // ประกาศ object แบบ array
    age: 20,
    name: 'Mook',
    grade: 100
}, { 
    age: 21,
    name: 'Nee',
    grade: 100
}]; 

student.push ({ // เพิ่มข้อมูลใน object
    age: 21,
    name: 'Beam',
    grade: 100
});

student.pop(); // ลบข้อมูลใน object

for (let index = 0; index < student.length; index++) { // วนลูปเพื่อแสดงข้อมูลใน object
    console.log('Student number', (index + 1));
    console.log('Student', student[index].name);
    console.log('Age', student[index].age);
    console.log('Grade', student[index].grade);
}
////////////////////////////////////////////////////////

/*
function
*/

// let score1 = 50;
// let score2 = 90;
// let grade = '';

// การประกาศ function ชื่อ calculateGrade โดยรับค่า score
// function calculateGrade(score) { 
//     if(score > 100 || score < 0) {
//         grade = 'Invalid score';
//     } else if(score >= 80) {
//         grade = 'A';
//     } else if(score >= 70) {
//         grade = 'B';
//     } else if(score >= 60) {    
//         grade = 'C';
//     } else if(score >= 50) {
//         grade = 'D';
//     } else {    
//         grade = 'F';
//     }
//     return grade; // ส่งค่า grade กลับ
// }

// let student1 = calculateGrade(score1); // เรียกใช้ function โดยส่งค่า score1
// let student2 = calculateGrade(score2); // เรียกใช้ function โดยส่งค่า score2
// console.log('Student 1 grade is', student1);
// console.log('Student 2 grade is', student2);
// ///////////////////////////////////////////////////////

/*
arrow function
*/

// calculateGrade = (score) => { // ประกาศ function แบบ arrow function
//     if(score > 100 || score < 0) {
//         grade = 'Invalid score';
//     } else if(score >= 80) {
//         grade = 'A';
//     } else if(score >= 70) {
//         grade = 'B';
//     } else if(score >= 60) {    
//         grade = 'C';
//     } else if(score >= 50) {
//         grade = 'D';
//     } else {    
//         grade = 'F';
//     }
//     return grade; // ส่งค่า grade กลับ
// };

// let student1 = calculateGrade(score1); // เรียกใช้ function โดยส่งค่า score1
// let student2 = calculateGrade(score2); // เรียกใช้ function โดยส่งค่า score2
// console.log('Student 1 grade is', student1);
// console.log('Student 2 grade is', student2);
////////////////////////////////////////////////////////    

/*
array
*/

// let score = [10, 20, 30, 40, 50]; 

// for (let index = 0; index < score.length; index++) {
//     console.log(score[index]);
// }

// score = score.map((s) => { // ไม่เปลี่ยนแปลงอาร์เรย์เดิม แต่สร้างอาร์เรย์ใหม่
//     return s * 2;
// });

// score.forEach((s) => { // ใช้สำหรับวนลูปและทำงานกับค่าต่าง ๆ โดยไม่สร้างอาร์เรย์ใหม่ ไม่มีการส่งคืนค่าหรืออาร์เรย์
//     console.log('Score is', s);
// });
////////////////////////////////////////////////////////

/*
object
*/

// let students = [
//     {
//         name: 'Mook',
//         score: 90,
//         grade: 'A'
//     },
//     {
//         name: 'Ploy',
//         score: 75,
//         grade: 'B'
//     },
//     {
//         name: 'Pim',
//         score: 60,
//         grade: 'C'
//     }
// ];

// let student = students.find((s) => {// ค้นหาข้อมูลโดยใช้ find โดยหาใน object)
//     if (s.name == 'Mook') {
//         return true;
//     }
// }) 

// let doubleScore = students.map((s) => { 
//     s.score =  s.score * 2; // คูณค่าใน object
// });

// let highScore = students.filter((s) => { 
//     if (s.score >= 80) {
//         return true;
//     }
// });

// console.log('student :', student); 
// console.log('High score :', highScore);