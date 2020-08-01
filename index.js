/*
 *intersection types:
    type A = {foo: boolean};
    type B = {foo: true};
    type AandB = A & B;
    type AandB = {foo: true};
 *Union types;
    type Foo = number | string;
    const a: Foo = 1;
    const b: Foo = 'hello';
 *Optional properties:
   type Foo = {
      bar?: number
   }
   const a: Foo = {};
   const b: Foo = {bar: 1}
 *readonly: chặn việc thay đổi property;
 *Todo thứ 2 trong toggleTodo đảm bảo kết quả return same vs type Todo;
 *Readonly<...> setup tất cả property ->readonly.Cú pháp này là mapped types;
 *Khai báo 1 type có property cụ thể -> literal types;
 *Vì Todo và CompletedTodo phần khai báo id,text same -> use intersection types;
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function completeAll(todos) {
    return todos.map(function (todo) { return (__assign(__assign({}, todo), { done: true })); });
}
function placeToString(place) {
    if (place === "home") {
        return "Home";
    }
    else if (place === "work") {
        return "Work";
    }
    else {
        return place.custom;
    }
}
function toggleTodo(todo) {
    return {
        id: todo.id,
        text: todo.text,
        done: !todo.done
    };
}
var todo = toggleTodo({ id: 3, text: "thang", done: true });
console.log("todo", todo);
var completeTodos = completeAll([{ id: 1, text: "thang1", done: false }]);
console.log("completeTodos", completeTodos);
var a = "okmen";
var b = { Name: "odododo" };
console.log("b.Name", b.Name);
