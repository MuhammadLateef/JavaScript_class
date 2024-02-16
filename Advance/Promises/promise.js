// let promise = new Promise((resolve,reject)=>{
//     console.log('Promise is HERE!');
//     reject('failed to run execute'); // API code Application Programming Interface
// });

// console.log(promise);


// const getData = () => {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('SetTimeOut function running'); /// 
//         resolve(200)
//     },7000);
//   })
// }
// getData().then((res)=>{
//     console.log("successfully executed!!", res);
// }).catch((err)=>{
//     console.log("Error on fetching data: ", err);
// });

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data ', dataId);
            resolve("successfully: ", 200)

        }, 2000);
    })

}
// Async and await 

(async ()=> {
    console.log('data 1 is fetching .....');
    await getData(1);
    console.log('data 2 is fetching .....');
    await getData(2);
    console.log('data 3 is fetching .....');
    await getData(3);
    console.log('data 4 is fetching .....');
    await getData(4);
    console.log('data 5 is fetching .....');
    await getData(5);

} )()

// Promises 
// getData(1).then((res) => {
//     console.log(res);
//     return getData(2)
// }).then((res) => {
//     console.log(res);
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })


/// callback hell
// console.log("data 1 is loading");
// getData(1, () => {
// console.log("data 2 is loading");
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5, () => {    // Promises..
//                     getData(6)
//                 })
//             });
//         });
//     }); 
// });