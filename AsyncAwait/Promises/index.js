// let promise = new Promise((resolve,reject)=>{
//     console.log("Promise is calling");  // pending, resolve, reject;
//     reject(401)

// });

// let promise = new Promise((resolve, reject) => {
//     console.log("the promise is calling");
//     reject('error');
// });

// const getDataAsync = ()=> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Program is Run');
//             reject('reject');
//         }, 6000)
//     })
// }

// let promise1 = getDataAsync();

// promise1.then((res)=>{
//     console.log('run Program: ', res);
// })
// promise1.catch((err)=>{
//     console.log('Error on code: ', err);
// })


function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data1');
            resolve('success run')
        }, 3000);
    })

}
function getData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data1');
            resolve('success run')
        }, 3000);
    })

}
function getData4() {
    return new Promise((resolve, reject) => {
        console.log('loading ...');
        setTimeout(() => {
            console.log('data');
            resolve('success run')
        }, 3000);
    })

}
getData2().then((res) => {
    return getData3();
}).then((res) => {
    return getData4();
}).then((res) => {
    })
// ------------------
// let getPromise = () => {
//    return new Promise((resolve,reject)=>{
//         console.log("Promise is calling");  // pending, resolve, reject;
//         resolve('successfuly run')

//     });
// }

// let promise1 = getPromise();

// promise1.then((res)=>{
//     console.log("Resove: ", res)
// })
// promise1.catch((err)=>{
//     console.log("failed to executed ", err)
// })
// ---------------------
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data ", dataId);
//             resolve("code run successfuly")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 7000);
//     })
// }


// --------------- Promise chain --------------


// function getAsycData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve('success')
//         }, 3000)
//     })
// }
// function getAsycData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve('success fundtion 1')
//         }, 3000)
//     })
// }

// console.log('function 1 is loading......')
// getAsycData1().then((res) => {
//     console.log("function 2 is loading......");
//     getAsycData2().then((res) => {
//     })
// })


