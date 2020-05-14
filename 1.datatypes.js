/**
 * kiểu Number
 * kiểu String
 * kiểu Boolean
 * undefined
 * null
 * kiểu Object
 * kiểu Array
 */

//Kiểu Number
var a = 12;
var b = 56;
console.log(a + b);
console.log('- Kiểu dữ liệu:', typeof(a));

//Kiểu String
var c = "Hello, World"; //Kiểu String
console.log(c);
console.log('- Kiểu dữ liệu:', typeof(c));


//Đây là một Object
var Object1 = {
    // key: value,
    fullname: "Pham Van Dinh",
    age: 30,
    gender: "Male",
    adress: "Vung Tau",
};

console.log(Object1);
console.log('- Thuộc tính fullname của Object1 là:', Object1.fullname);
console.log('- Thuộc tính age của Object1 là:', Object1.age);
console.log('- Thuộc tính gender của Object1 là:', Object1.gender);
console.log('- Thuộc tính adress của Object1 là:', Object1.adress);
//Thay đổi một giá trị của 1key
Object1.gender = "Female";
console.log('- Kiểu dữ liệu: ', typeof(Object1));
console.log(Object1);
//Thay đổi giá trị của key theo cách 2
Object1['gender'] = 'Male';
console.log(Object1);

//Kiểu Bolean
var isMale = true;
var isFemale = false;
console.log('Giới tính của bạn là: Male ?', isMale);
console.log('- Kiểu dữ liệu: ', typeof(isMale));