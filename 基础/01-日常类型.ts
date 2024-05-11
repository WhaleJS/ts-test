/*
 @@ 日常类型 主要是三类
 @@ string
 @@ number
 @@ boolean
*/

let str: string = 'hello';

let num: number = 123;

let ble: boolean = true;


/*
 @@ 数组类型
*/

let arrnum:number[] = [1,2,3] // 表示数组类型 内部的值均为数字
let arrstr:string[] = ['1','2'] // 表述数组类型 内部的值均为字符串


/*
 @@ any类型
 @@ any 表示任意类型
 @@ 当没有给变量指定类型的时候，TS会进行自动推断类型 编译器默认会采用any
 @@ 通过编译配置  noImplicitAny 可以把any类型标记为错误
*/

let anyResult:any;
anyResult = 123;
anyResult = 'hello';
anyResult = {};


/*
 @@ 函数
*/

// 函数参数类型注解 - TS会针对参数进行类型检查
function test (name:string) {
    console.log(name)
}

// 函数返回值类型注解
function test1():number{
    return 26;
}

// 返回一个Promise函数
// async function getData():Promise<number>{
//     return 26;
// }



/*
 @@ 对象类型
*/

function setObj(data:{x:number,y:number}){
    console.log(data.x)
    console.log(data.y)
}

setObj({x:1,y:2})

/*
 @@ 对象类型
 @@ 对象属性可选 ?
*/

function setObj2 (data:{x:number,y?:number}) {
    console.log(data.x)
}
setObj2({x:1,y:4})


/*
 @@ 联合类型 - 表示由两个或者多个组成的类型组合 变量的类型可以是任意一种
*/

// a 接下来可以赋值为数字或者字符串
let a:number | string; 

// 参数X接下来可以赋值为数字或者字符串
function testa (x:number | string)  {
    if(typeof x == 'number'){
        // 执行数字类型的操作
    }else{
        // 执行字符串类型的操作
    }
}
testa(1);
testa('hello');



/*
 @@ 类型别名 - 通俗来说就是可以自定义类型,然后再把这个类型赋值给我们的变量 其实就相当于一个中传变量
*/

// 声明一个类型
type myType = {
    x:number,
    y:string,
    z?:string
}

// 使用类型
function testMyType(data:myType){
    console.log(data)
}

testMyType({x:1,y:'hello'})

// 声明一个类型
type ID = string;

function myID(x:ID){
    console.log(x)
}
myID('hello')


/*
 @@ 接口 - 是一种命名对象类型的方式 通过interface 来修饰
*/

// 声明接口
interface user {
    name:string,
    age:number
}

// 使用接口
const user:user = {
    name:'小明',
    age:24
}

// 使用接口
function setUser(data:user){
    console.log(data)
}
setUser({name:'小红',age:34})

// 类型和接口区别
// 类型和接口相似，接口的功能类型都可以使用，但是类型不能扩展，定义了以后就不能再更改 接口可以通过entends进行扩展

// 声明了一个名为nameString的接口
interface nameString {
    value:string
}

// 再声明一个ageNumber  他可以扩展至nameString接口
interface ageNumber extends nameString {
    age?:number
}

const data:ageNumber = {
    value:'我是value',
    age:24
}




/*
 @@ 类型断言 - 断言其实就一种深度肯定的意思 就是语文字面意思
 @@ 在JS中 有时候会得到TS 无法知道的类型的信息，例如document.getElementById,TS只会知道这个方法会返回一个HTML元素 -HTMLElement
 @@ 但是我们可能知道他返回的到底是一个什么样的HTML元素  比如canvas
 @@ 这种情况下 我们就可以使用类型断言来指定变量类型
 @@ 类型断言 不会影响代码的编译结果 它会被编译器删除，说白了其实就静态类型检查
*/

// 断言示例 - canvas
const canvas = document.getElementById('canvs-container') as HTMLCanvasElement;



/*
 @@ 字面量类型
 @@ 其实就是定义一组同类型的常量
*/


let resultValue:'小红' = '小红';
let resultValue2:'1' | '2';
function test2 (str:'1' | '2') {

}

let booleanValue:true | false;



/*
 @@ null 和 undefined  JS中这两个值都是基础的数据类型 TS中也有两个同名的类型
 @@ 通过strictNullChexks开启关闭
*/

function dosomeThing (x:string | null) {

}



/*
 @@ 数组
*/

let arr1:number[];
let arr2:Array<number>;
let arr3:Array<any>;


/*
 @@ 元组 就是固定长度的数组
*/

let arr4:[string,number]


/*
 @@ 枚举 enum
*/

let enumdata:{name:string,age:number}