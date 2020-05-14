/*
Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
 * {name}: string;
 * {age}: number;
*/
var animal1 = {
    type: 'Dog',
    weigt: 30,
    hight: 90,
    name: 'Husky',
    age: 1
};
var animal2 = {
    type: 'Bird',
    weigt: 0.5,
    hight: 10,
    name: 'Husky',
    age: 1
};
var animal3 = {
    type: 'Chicken',
    weigt: 3,
    hight: 30,
    name: 'Husky',
    age: 1
};
var listAnimal = [animal1, animal2, animal3];
console.log(listAnimal);