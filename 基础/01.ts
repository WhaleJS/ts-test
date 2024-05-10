function person (person:string,date:Date){
    console.log(`hello ${person}date${date.toDateString()}`)
}
person('哈哈',new Date())