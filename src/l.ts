/*
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-12 14:15:36
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-12 14:57:27
 * @FilePath: \ytg_admind:\PersonalProject\TypeScript\ts-test\src\l.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class User {
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }

}

const user = new User('小红',15)