const asyncExecutor = null; // TODO: add Promise and provide output after 1s


console.log("> before then");

asyncExecutor.then(
    (value) => { // successCallback
        console.log(`"${value}"`); // expected output: "data resolved"
    },
    (err) => { // failureCallback
    });

console.log("> after then");
