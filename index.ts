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

type Place = "home" | "work" | { custom: string };
type Todo = Readonly<{
  id: number; //readonly id:number;
  text: string; //readonly text:string;
  done: boolean; //readonly done:boolean;
  place?: Place;
}>;

type CompletedTodo = Todo & {
  readonly done: true;
};

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }));
}

function placeToString(place: Place): string {
  if (place === "home") {
    return "Home";
  } else if (place === "work") {
    return "Work";
  } else {
    return place.custom;
  }
}

function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  };
}

const todo = toggleTodo({ id: 3, text: "thang", done: true });
console.log("todo", todo);
const completeTodos = completeAll([{ id: 1, text: "thang1", done: false }]);
console.log("completeTodos", completeTodos);
//Compare Alias with Interface
//Inteface ko thể gán trực tiếp kiểu string như Name
type Name = string;

interface OK {
  Name: string;
}

type Other = Name;

let a: Name = "okmen";
let b: OK = { Name: "odododo" };
console.log("b.Name", b.Name);
