/*
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-11 18:26:10
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-12 13:45:42
 * @FilePath: \ytg_admind:\PersonalProject\TypeScript\ts-test\src\interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// interface User {
//     name:string,
//     age:number,
//     sayHello?:() => void;
// }

// const user:User = {
//     name:'小红',
//     age:34
// }

type str = string;
function test<T,K>(arr1:T[],arr2:K[]):(T | K)[]{
    return arr1;
}
test([1,2,3],['1','2'])