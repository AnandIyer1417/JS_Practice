console.log("Merged Class 2 ES6")

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


const person = {
    fname: "Anand",
    mname: "C",
    lname: "Iyer",
    age: 20,
}


let {age, fname, lname, mname=""} = person
console.log(age)
console.log(fname)
console.log(lname)
console.log(mname)

let add = (x,y) => console.log(x+y)
add(10,20)


const counter = {
    count: 1,
    manipulate: function() {
        return ++(this.count)
    },
    key: this.count
}

console.log(counter)
console.log(counter.manipulate())
console.log(counter)
console.log(counter.manipulate())
console.log(counter)
console.log(counter.manipulate())