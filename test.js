const randomNum = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1))
}
console.log(randomNum(10, 93))