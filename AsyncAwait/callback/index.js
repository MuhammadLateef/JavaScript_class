// function getData(dataId, GetTextData) {
//     setTimeout(()=>{
//         console.log("data ", dataId);
//         if(GetTextData) {
//             GetTextData()
//         }
//     },3000)
// }

// getData(3,()=>{
//     getData(4);
// });
// // getData(5);


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", dataId);
            resolve('success')
           
        }, 2000)
    }
    )
}

getData(1).then((res)=>{
    console.log(res);
    return getData(2);
}).then((res)=>{
    console.log(res);
    return getData(3)
}).then((rs)=>{
    console.log(res);
})

// console.log("loading task 1.......");

// getData(1, () => {
//     console.log("loading task 2.......");
//     getData(2, () => {
//         console.log("loading task 3.......");
//         getData(3, () => {
//             console.log("loading task 4.......");

//             getData(4, () => {
//                 console.log("loading task 5.......");

//                 getData(5, () => {
//                     console.log("loading task 6.......");

//                     getData(6)
//                 })
//             })
//         })
//     });
// });
// getData(3);
// getData(4);
// getData(5);
// getData(6);