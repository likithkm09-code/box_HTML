console.log('array & object');
let num=[1,2,3,4,5,6];
let num1=[11,22,33,44,55,66];
    console.log(num[5]);
    console.log(num.concat(num1));
 console.log(num.fill(4));
         console.log(num.concat(num1));
        console.log(num.indexOf(5));
          console.log(num1.length);
          console.log(num.push(100));
             console.log(num.concat(num1));
         console.log(num.pop(3));  
           console.log(num);
let student={
    id: 1,
   name:'likith k m',
        department: 'ai&ml',
   year:3,
            age: 21,
    clg:'mitt',
height:"10cm",
skill: ['html', 'java', 'css', 'js', 'ai&ml'],
    address: {
    city: 'piriyapattana',
        state: 'karnataka'
}
 }
console.log(student.name);
console.log(student.age);
console.log(student.department);
console.log(student.clg);
console.log(student.skill, length);
console.log(student.skill[2]);
console.log(student.skill.includes('java'));
console.log(student.id);

console.log(student.height);
let height2 = parseInt(student.height) / 100
console.log(height2 + 'm');


let n1 = '10cm';
console.log(n1);

let n2 = parseInt(n1) / 100;
console.log(n2 + 'm');
op
et a = 10;
hile(a < 14)

console.log(a);
a++;


let k = 20;
do {
    console.log(k);
    k++;
} while (k < 14);
console.log('hii');

let n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let n2 = [];
for (let i = 0; i < n1.length; i++) {
    if (n1[i] % 2 == 0) {
        n2.push(n1[i]);
    }
}
console.log(n2);