// async function getData() {
//     setTimeout(()=>{
//         console.log("Async function is here!");
//     },7000)
// }

// getData();


async function getData4() {
    try {
        let response = fetch('https://jsonplaceholder.typicode.com/todos/1');
        let json = (await response).json();
        console.log(json);
    } catch (err) {
        console.log('Error', err);
    }

}

getData4();