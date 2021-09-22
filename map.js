console.log("Merged Class 2 ES6")

let ranks = [1,2,3,4]
console.log(
    ranks.map((e, index)=> {
        return e * 100
    })
)
console.log(
    ranks.forEach((e, index)=> {
        return e * 100
    })
)

let newmapArr = ranks.map((e, index) => {
    if(e%2===0)
        return e
})
console.log(newmapArr)

let newfilterArr = ranks.filter((e, index) => {
    if(e%2===0)
        return e
})
console.log(newfilterArr)

