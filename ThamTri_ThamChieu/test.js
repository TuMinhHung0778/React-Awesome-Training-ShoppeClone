
// Kiểu tham trị
let message = 'Hello!';

let phrase = message;

console.log(message);
console.log(phrase);

console.log(5 == '5');
console.log(5 === '5');

let a = {};
let b = {};
console.log(a == b);
console.log(a === b);

// 1. clone thường ( shallow copy )
// Với clone thường thì người ta thường dùng spread syntax để clone clone = {...user} hoặc dùng vòng lặp

let user = {
    name: 'Hung',
    age: 30
}
// Bây giờ clone là một object độc lập với cùng nội dung với user 
// let clone = { ...user };
// clone.name = 'Huyen';
// console.log(user.name);

// 2. Deep clone ( deep copy )
// Những ví dụ với biến object user trên thì các thuộc tính bên trong đều là tham trị. Nhưng các thuộc tính cũng có thể tham chiếu đến 1 object khác

let user2 = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
}

let clone = { ...user2 }

console.log(user2.sizes === clone.sizes);

// user2 và clone chia sẻ sizes 
user2.sizes.width++; // thay đổi thuộc tính từ 1 nơi 
console.log(clone.sizes.width);

// Để fix vấn đề này thì chúng ta có thể dùng một số phương pháp dưới đây
// - JSON.parse(JSON.stringify())
// - Dùng method _.cloneDeep(obj) của thư viện Lodash (sâu bên trong nó dùng đệ quy để lặp các thuộc tính bên trong object)
// - Dùng các thư viện như immer. Thư viện này khá hiệu quả vì đôi lúc chúng ta cũng không cần thiết clone hết cả một object lớn để chỉnh sửa 1 vài thuộc tính, cơ chế của cái này là chỉnh sửa thuộc tính nào thì nó sẽ tự tính và clone cho đúng thôi. Vậy nên giúp cải thiện về mặt performance trong một số trường hợp.
