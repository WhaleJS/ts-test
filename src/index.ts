/*
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-10 18:10:08
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-11 14:35:02
 * @FilePath: \ytg_admind:\PersonalProject\TypeScript\ts-test\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let value1:number = 1; // 基本数字类
let value2:string = '2'; // 基本字符串类
let value3:boolean = true; // 基本布尔类

let value4:null = null; // null
let value5:undefined = undefined; // undefined

// null和undefined可以作为自他类型的子类 如下  但是开启strictNullChecks后就不行了 就必须严格检查
// let test:string = null;

let arr1:number[] = [1,2,3,4] // 数组类型
let arr4:Array<string> = ['1','2'] // 数组类型  两者等价 前者是语法糖


// 联合类型 在多个类型中 任意一个
let value6:number | string;

// void 用于约束函数的返回值  表示不返回任何值
function testVoid ():void {
    // 只执行语句 无返回值  可用void修饰  不写的话 TS会自动推导
}


// never - 表示永远不会结束函数执行 一般用于报错
function testNver():never{
    throw new Error('错误')
}


// 字面量  类似常量  只能给变量赋值给定义时候的值
let value7:'A';
// value7 = 'A'

let value8:"男" | "女";


// 元组类型 数组长度确定 且元素类型一致的数组
let arr5:[number,number]

// any类型 - 绕过类型检查