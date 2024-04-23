// Definig the promise object with the producer code

let promiseObj = new Promise ((resolve, reject) => {
    // produce code
    console.log("Getting the name from DB");
    setTimeout(() => {
        //resolve("Manoj Rajagopal");
        reject("No Data!!!");
    }, 2000);
});


// consumer code

promiseObj.then(
    (val)=> {
        console.log(`Name received from DataBase = ${val}.`);
    },
    (err) => {
        console.log(`Error occured = ${err}!!!`);
    }
);