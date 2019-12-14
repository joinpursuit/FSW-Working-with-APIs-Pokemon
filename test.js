const randomNum = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1))
}
console.log(randomNum(10, 93))


//         let url = info.data.moves[i].move.url
//             let ppAndNameRes = await axios.get(url)
//             let p4 = document.createElement("p")
//             p4.innerText = ppAndNameRes.info.name + ", PP:" + ppAndNameRes.info.pp
//             console.log(p4.innerText)
//             pokepoke1.appendChild(p4)

//         let url = info.data.moves[i].move.url
//             let ppAndNameRes = await axios.get(url)
//             let p4 = document.createElement("p")
//             p4.innerText = ppAndNameRes.info.name + ", PP:" + ppAndNameRes.info.pp
//             mainPoke.appendChild(p4) 
//         }