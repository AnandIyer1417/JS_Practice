const a = '99'

if(typeof a === 'number'){
    if(a % 2 === 0){
        console.log("Number is even")
    }
    else if(a===0){
        console.log("Neither Even nor Odd")
    }
    else {
        console.log("Number is Odd")
    }
}
else {
    console.error("Not a number")
}

