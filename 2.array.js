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
var len = listAnimal.length;
var endarry = len - 1;

//In ra mảng listAnimal
console.log('Cho một mảng như sau:');
console.log(listAnimal);
console.log('- Độ dài của mảng là: ', len);
console.log('')
    //Truy cập đến một phần tử của mảng
console.log('Phần tử số 0 của mảng là:');
console.log(listAnimal[0]);
console.log('')
console.log('Phần tử cuối cùng của mảng là:');

console.log(listAnimal[endarry]);
console.log('');
//Khai báo một Obj mới
var animal4 = {
    type: 'pig',
    weigt: 60,
    hight: 60,
    name: 'Pigpy',
    age: 2
};
console.log('Cho một Object mới như sau:');
console.log(animal4);
console.log('');

//Thêm nó vào mảng listAnimal
console.log('Mảng sau khi thêm phần tử mới vào là:')
listAnimal.push(animal4);
//push sẽ thêm phần tử vào cuối mảng

console.log(listAnimal);
var newlen = listAnimal.length;
console.log('- Độ dài mới của mảng là: ', newlen);
console.log('');

//Tạo một mảng mới với các elements là nhân viên trong ngân hàng
var employVIB = [
    { name: 'Phạm Văn Đình', gender: 'Male', old: 30, mobile: '0937913568' },
    { name: 'Lã Văn Tuyên', gender: 'Male', old: 36, mobile: '0935789012' },
    { name: 'Phùng Nhật Thiện', gender: 'Male', old: 28, mobile: '0937911221' },
    { name: 'Thái Chiêu Ngân', gender: 'Female', old: 29, mobile: '0937913123' },
    { name: 'Trần Thị Linh', gender: 'Female', old: 31, mobile: '0937913988' },
    { name: 'Nguyễn Thị Thu Hương', gender: 'Female', old: 25, mobile: '0937913333' },
    { name: 'Phạm Thị Thân', gender: 'Female', old: 24, mobile: '0937914444' },
    { name: 'Hà Xuân Thuận', gender: 'Male', old: 26, mobile: '0937915555' },
    { name: 'Hồ Trung Tín', gender: 'Male', old: 27, mobile: '0937916666' },
    { name: 'Hồng Mỹ Hậu', gender: 'Female', old: 28, mobile: '0937917777' },
    { name: 'Huỳnh Anh Thư', gender: 'Female', old: 25, mobile: '0937918888' },
    { name: 'Lê Quốc Huy', gender: 'Male', old: 26, mobile: '0937910000' }
];
console.log('Danh sách nhân viên VIB là:');
console.log(employVIB);
console.log('');
console.log('Số lượng nhân viên hiện tại: ', employVIB.length);
console.log('');

//Tạo một danh sách nhân viên mới vào và thêm nó vào danh sách hiện tại
console.log('------------------------------------------------------------');
console.log('Nhân viên mới vào:');
var newEmloy = [
    { name: 'Huỳnh Thái Tài', gender: 'Male', old: 32, mobile: '09379143434' },
    { name: 'Phạm Anh Vũ', gender: 'Male', old: 29, mobile: '0935784321' },
    { name: 'Nguyễn Mỹ Nhân', gender: 'Female', old: 27, mobile: '0937911221' },
];
console.log(newEmloy);
console.log('');
console.log('------------------------------------------------------------');
console.log('Danh sách nhân viên sau khi thêm các nhân viên mới');

//Dùng vòng lặp for in để thêm các nhân viên mới vô danh sách nhân viên VIB
var x;
for (x in newEmloy) {
    employVIB.push(newEmloy[x]);
};
console.log(employVIB);
console.log('Số lượng nhân viên sau khi tuyển thêm người là: ', employVIB.length);
console.log('');