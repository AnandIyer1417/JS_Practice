// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')

function logName(Name = "Anvesha Shukla", age = 20) {
    console.log(Name + " you are " + age)
}

logName("Anvesha")

function add(a = 0, b = 0) {
    return a + b
}

const result = add()

console.log(result)
