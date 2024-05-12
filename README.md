<!--
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-10 10:36:15
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-12 23:32:10
 * @FilePath: \ytg_admind:\PersonalProject\TypeScript\ts-test\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# TypeScript特征
* 静态类型检查器
  * TS 可以在代码运行前，就检查出类型的错误，以防止出现错误的行为，比如一个字符串，作为函数调用了
* 推断类型
* 定义类型
* 组合类型
# TypeScript 安装
` npm install -g typescript`
安装完成后就有了TSC 编译器，`TypeScript`没有提供运行环境，只能编译器把`TS`转为`JS`执行
默认情况下，`TS`以`ES3`为转换目标

# 类型
* 数字类型 - `number`
* 字符串 - `string`
* 布尔值 - `boolean`
* `null = undefined =>` 可以作为其他类型的子类型 如下,通过 `strictNullChecks`进行控制
`let str:string = null`
* `void类型` - 用于约束函数的返回值 表示该函数没有任何返回
* `never类型` - 用于约束函数的返回值 表示该函数永远不会结束
* 字面量类型`let str:'A'` 表示该变量将来只能赋值成对应的字面量
* 元组类型 - 一个固定长度的数组 且类型一致
* `any`类型 - 表示所有类型 开启`any`可以绕过类型检查

# 类型别名
其实就是自定义类型  相当于中转变量
```typescript
type myuser = {
  name:string,
  age:number
}
const user:myuser = {
  name:'哈哈',
  age:387
}

type Gender = '男' | '女'
```

# 枚举
```typescript
enum Gender{
  male = '男',
  female = '女'
}

let str = Gender.male;
```
枚举会出现在编译结果中  以对象的形式呈现
# 接口
用于约束 类、对象、函数的标准 或者说叫做命名对象类型的一种形式,接口和类型别名区别不大，接口可以扩展 还可以用于约束类
同时接口不会出现在编译结果中


1.接口约束类

2.接口约束对象

# 泛型
抒写函数时，丢失了类型信息(多位置的类型应该保持一致 或者有关联)。
泛型是附属于类、接口、类型别名上的类型,相当于类型变量,TS 会根据传递的参数进行类型推导,如果无法推导，默认为空对象
```typescript

function test<T>(array:T[],info?:object){

}
test<string>(['1'],'2')
```
1. 在函数中使用泛型 - 在函数名字后使用即可
2. 在类型别名、接口中使用泛型
3. 泛型约束就是限制泛型的取值
4. 多泛型
```typescript
function test<T,K>(arr1:T[],arr2::K[]):(T | K)[]{
  let result:(T | K)[] = []
}
```

# TypeScript总结
**如何约束类型**
变量、参数、函数的返回值
- 基本类型:`boolean、number、string、object、array、void、never、null、undefined`
  - `null` 和 `undefined` 在开启了 `strictNullChecks` 后只能赋值给自身
- 扩展类型：类型别名、枚举、接口、类

类型别名、接口不产生编译结果，枚举和类会产生编译结果,枚举编译后为对象，类编译后为JS类

TS类：属性列表、修饰符(readonly、访问修饰符：public、private、protected)

泛型: 就是用于类型变量

类型断言：开发者很清楚类型  但是TS难以分辨时使用 


