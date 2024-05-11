<!--
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-10 10:36:15
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-11 14:41:29
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
安装完成后就有了TSC 编译器，TypeScript没有提供运行环境，只能编译器把TS转为JS执行
默认情况下，TS以ES3为转换目标

# 类型
* 数字类型 - number
* 字符串 - string
* 布尔值 - boolean
* null = undefined => 可以作为其他类型的子类型 如下,通过 strictNullChecks进行控制
`let str:string = null`
* void类型 - 用于约束函数的返回值 表示该函数没有任何返回
* never类型 - 用于约束函数的返回值 表示该函数永远不会结束
* 字面量类型`let str:'A'` 表示该变量将来只能赋值成对应的字面量
* 元组类型 - 一个固定长度的数组 且类型一致
* any类型 - 表示所有类型 开启any可以绕过类型检查
