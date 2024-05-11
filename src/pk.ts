/*
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-11 15:15:33
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-11 15:38:03
 * @FilePath: \ytg_admind:\PersonalProject\TypeScript\ts-test\src\pk.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

type Deck = NormalCard[];
type Color = "♥" | "♠" | "♣" | "♦";

type NormalCard = {
    color: Color,
    mark: number
}
// 创建一幅扑克牌
function createDeck(): Deck {
    const array: Deck = [];
    for (let i = 0; i <= 13; i++) {
        array.push({
            mark: i,
            color: "♠"
        })

        array.push({
            mark: i,
            color: "♣"
        })

        array.push({
            mark: i,
            color: "♥"
        })

        array.push({
            mark: i,
            color: "♦"
        })
    }
    return array;
}


// 打印扑克牌
function printDeck(deck: Deck) {
    let result = '\n'
    deck.forEach((card,i) => {
        let str = card.color;
        if (card.mark <= 10) {
            str += card.mark
        } else if (card.mark === 11) {
            str += "J"
        } else if (card.mark === 12) {
            str += "Q"
        }else{
            str += "K"
        }
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