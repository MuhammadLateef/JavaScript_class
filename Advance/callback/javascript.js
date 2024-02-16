
// callback hall 

function getData(dataId, nextGetDat) {
    setTimeout(() => {
        console.log('data ', dataId);
        if (nextGetDat) {
            nextGetDat();
        }
    }, 2000);
}
 


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