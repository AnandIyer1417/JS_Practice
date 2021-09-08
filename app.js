
console.log("Merged Class 1 ES6")

const arr = [1,2,3,4]

console.log(arr[2])

var [one, two, three, four, five] = [1,2,3,4]

console.log(three)
console.log(five)

function getScores() {
    return [90,100]
}

let [x,y,z] = getScores();
console.log(x)
console.log(y)
console.log(z)

const obj = {
    fname: "Anand",
    lname: "Iyer",
    age: 20,
    mname: "C"
}

let {age, fname, lname, mname=""} = obj

console.log(age)
console.log(fname)

console.log(lname)
console.log(mname)
