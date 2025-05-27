# Tham trị và tham chiếu

JS về bản chất thì có 2 kiểu dữ liệu chính là tham trị và tham chiếu

## Kiểu tham trị (primitive types)

Có những kiểu dưới đây:
1. number
2. string
3. boolean
4. null
5. undefined
6. BigInt
7. Symbol

## Kiểu tham chiếu (reference types)

1. Object
2. Array
3. Function

Thực ra array & function về bản chất vẫn là object cả thôi.

### Việc copy biến với tham chiếu

Object thì không giống như các kiểu dữ liệu của tham trị.

**Một biến object không lưu giữ giá trị, nó lưu trữ "địa chỉ bộ nhớ" - hay còn gọi là nó tham chiếu đến ô nhớ** 

`user` là biến object

```js
let user = {
    name: 'John'
}
```


