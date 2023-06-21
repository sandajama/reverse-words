// Good Luck 💪🏾
 const reverseWords = (sentence) => {
    const words = sentence.split(" ")
    const revwords = words.reverse()
    return revwords.join(" ")
}


console.log(reverseWords("fikrcamp bootcamp"))// ➞ "bootcamp fikrcamp"
console.log(reverseWords("hello there!")) //➞ "there! hello"
console.log(reverseWords("welcome to my city")) //➞ "city my to welcome"