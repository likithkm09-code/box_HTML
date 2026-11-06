console.log('es6 features');
let name='likith';
let age=22;
console.log('welcome:'+name+'age is :'+age);
console.log(`hello ${name}`  );

let nums = [1, 2, 3, 4, 5, 6];
let num1 = [9, 8, 7, 6, 5, 4];
let num2 = [...num1, ...nums];
console.log(num2);

let [a,b,c]=nums;
console.log(a);
console.log(b);

let [a, b, c, ...d]= num2;


console.log(a);
console.log(b);
console.log(c);
console.log(d);

let student={
    name:'likith',
    age:21
}
 student.dpt='aiml';

let student1={
    ...student,
    dpt:'aiml'
}
 console.log(student1);
 