/*
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-11 15:15:33
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-11 18:06:45
 * @FilePath: \ytg_admind:\PersonalProject\TypeScript\ts-test\src\pk.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

type Deck = NormalCard[];

// 枚举颜色
enum Color {
    heart = '♥',
    spade = '♠',
    club = "♣",
    diamond = "♦"

}

// 枚举牌面
enum Mark {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K"
}


type NormalCard = {
    color: Color,
    mark: Mark
}
// 创建一幅扑克牌
function createDeck(): Deck {
    const array: Deck = [];
    const markArr = Object.values(Mark);
    const colorArr = Object.values(Color)
    for(const m of markArr){
        for(const c of colorArr){
            array.push({
                color:c,
                mark:m
            })
        }
    }
    return array;
}


// 打印扑克牌
function printDeck(deck: Deck) {
    let result = '\n'
    deck.forEach((card,i) => {
        let str = card.color + card.mark;
        result += str + '\t'
        if((i + 1) % 6 === 0){
            result += '\n'
        }
    })
    console.log(result)
}

// 查询扑克牌
function findCards() {

}

const deck = createDeck()
printDeck(deck)