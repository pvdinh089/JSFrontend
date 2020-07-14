/** CHUỖI VÀ THAO TÁC VỚI CHUỖI
 Đây là nội dung quan trọng được sử dụng rất nhiều sau này
 JS cung cấp rất nhiều phương thức để làm việc với chuỗi
 */
var str = 'Học Javascript tại trang F8, JS ! ';

/**1. length - trả về độ dài của chuỗi 
    string.length
    -> tương đương với string.len() trong Python
 */
console.log(`Độ dài của chuỗi str là: ${str.length}`);

/** 2. Find Index
    string.indexOf('char', location) 
    --- tương đương với index() trong Python
 */

console.log('Vị trí của chuỗi JS trong str là' +
    ` ${str.indexOf('JS', 0)}`
);

console.log('Vị trí của chuỗi Văn trong str là' +
    ` ${str.lastIndexOf('JS')}`
);
//trường hợp không tìm thấy thì sẽ trả về giá trị là -1


/**  3. Cắt chuỗi (slice())
    string.slice(positon1, position2)
    cú pháp Python string[pos1, pos2]
    có thể cắt từ cuối chuỗi trở lại
    hoặc từ đầu chuỗi
 */
console.log(`Cắt chuỗi JS ra khỏi chuỗi: ${str.slice(4, 6)}`);


/** 4. Thay thế chuỗi cũ bằng một chuỗi mới
    str.replace(old_str, new_str)
    trong Python cũng cùng cú pháp
 */
console.log(`Thay chuỗi JS bằng Javascript: ${str.replace(/JS/g, 'Javascript')}`);


/** 5. Chuyển định dạng chuỗi
    5.1 str.toUpperCase ->Chuyển đổi tất cả thành chuỗi in hoa
    5.2 str.toLowerCase ->Chuyển đổi tất cả thành chuỗi in thường
    trong Python là str.upper() và str.lower() 
 */
console.log(`Chuyển thành in hoa: ${str.toUpperCase()}`);

console.log(`Chuyển thành in thường: ${str.toLowerCase()}`);


/** 6. Trim - bỏ ký tự khoảng trắng ở đầu và cuối chuỗi
    str.trim()
    trong Python phương thức này là str.strip()
 */
console.log(`Chuỗi mới đã bỏ khoảng trắng hai đầu: ${str.trim()}`);

/** 7. Tách chuỗi thành một mảng
    str.split('ký tự muốn tách');
*/
console.log(`Tách chuỗi:${str.split(' ')} ${typeof str.split(' ')}`);

/** 8. Lấy ký tự khi biết vị trí của nó
    dùng chatAt(pos)
    hoặc str[pos]
 */