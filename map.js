// console.log("Merged Class 2 ES6")

// let ranks = [1,2,3,4]
// console.log(
//     ranks.map((e, index)=> {
//         return e * 100
//     })
// )
// console.log(
//     ranks.forEach((e, index)=> {
//         return e * 100
//     })
// )

// let newmapArr = ranks.map((e, index) => {
//     if(e%2===0)
//         return e
// })
// console.log(newmapArr)

// let newfilterArr = ranks.filter((e, index) => {
//     if(e%2===0)
//         return e
// })
// console.log(newfilterArr)

let concert = false;
let attendConcert = new Promise(function(resolve, reject)
{
    setTimeout(() => {
        if(concert){
            resolve("BOB ATTENDED THE CONCERT")
        }
        else{
            reject("BOB FAILED TO ATTEND THE CONCERT")
        }
    }, 2000);
}
);

// console.log(attendConcert)
console.log(attendConcert)

// attendConcert.then((data) => console.log(data));

// attendConcert.catch((error) => console.log(error));

// attendConcert.then((data) => console.log(data)).catch((error) => console.log(error));

// async function afunc() 
// {
//     try
//     {
//         let result = await attendConcert;
//         console.log(result);
//         return result;
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }

let afunc = async() =>  
{
    try
    {
        let result = await attendConcert;
        console.log(result);
        return result;
    }
    catch(e)
    {
        console.log(e);
    }
}

afunc()



console.log("HI, I WON'T WAIT FOR ANYONE")
