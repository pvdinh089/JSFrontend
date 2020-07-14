/** Toán tủ số học
+   --> Cộng
-   --> Trừ
*   --> Nhân
**  --> Lũy thừa
/   --> Chia
%   --> Chia lấy dư
++  --> Tăng 1 giá trị số
--  --> Giảm 1 giá trị số
 */

var a = 1;
var b = 2;
console.log("a = 1");
console.log("b = 2");

console.log("Phép cộng: " + (a + b));
console.log("Phép trừ: " + (a - b));
console.log("Phép nhân " + a * b);
console.log("Phép lũy thừa: " + a ** b);
console.log("Phép chia: " + a / b);
console.log("Phép chia lấy dư: " + (a % b));

a++; // a -> 2
console.log("Tăng a lên 1 với a++ :" + a);

b--; // b -> 1
console.log("Giảm b đi 1 với b-- :" + b);
// Có thể làm bài tập nâng cao với các bài tính diện tích

/** TOÁN TỬ SO SÁNH
 ==     -> bằng
 !=     -> Khác
 >      -> Lớn hơn
 <      -> Nhỏ hơn
 =>     -> Lớn hơn hoặc bằng
 <=     -> Nhỏ hơn hoặc bằng

 ===    -> So sánh bằng; so sánh cả giá trị và kiểu dữ liệu
 !==    -> Ngược lại với ===

 Được dùng nhiều trong câu lệnh điều kiện hoặc vòng lặp
 */
//cái này in ra kết quả là a lớn hơn b vì đã thực hiện phép tiền tố ở trên
if (a > b) {
    console.log('a lớn hơn b');
} else {
    console.log('a nhỏ hơn b');
};


/** Kiểu dữ liệu boolean
 là giá trị true hoặc false
 trong Python thì là True hoặc False

Các giá trị dưới đây trả về giá trị False khi convert về kiểu Boolean
 0
 '' _ ""
 undefined
 NaN
 null
 */

// in ra màn hình kết quả của phép so sánh 2 biến a và b
console.log('a có lớn hơn b không? ', a > b);


/** TOÁN TỬ LOGIC
 && - and tương đương với and trong Python
        -> Trả về true nếu cả hai biểu thức đầu true
 || - hoặc - tương đương với or trong Python
        -> Trả về true nếu một trong 2 biểu thức true
 ! - khác - tương đương với not trong Python
 */

if (a > b && a > 0) {
    console.log('a là số dương và lơn hơn b');
}

/**Toán tử chuỗi
 Dùng để nối các chuỗi lại với nhau
 */

var firstName = 'Dinh';
var lastName = 'Pham';

// Nối hai chuỗi lại với nhau
console.log(firstName + ' ' + lastName);

firstName += 'Pham';
console.log(firstName);