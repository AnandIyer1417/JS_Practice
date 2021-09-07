const balls = document.querySelectorAll('.ball')
const body = document.querySelector('body')

const arr = [1,2,3,4,5]

while(arr.length < 15){
    arr.push("iteration")
}

console.log(arr)

arr.forEach((element, iteration) => {
    console.log(element, iteration)
})
