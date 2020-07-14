/** Toán tử gán
 Toán tử        Ví dụ       Tương đương
 =              x = y       x = y
 +=             x += y      x = x + y
 -+             x -= y      x = x - y
 *=             x *= y      x = x * y
 /=             x /= y      x = x / y
 %=             x %= y      x = x % y
 **=            x **= y     x = x ** y
 
 Dùng để gán giá trị cho biến
 */

var a = 3;
var b = 12;

a += b; // a = a + b <=> a = 3 + 12 => 15
console.log(a);

// Các phép gán khác cũng tương đương