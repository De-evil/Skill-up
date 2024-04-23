const getStates = (callback) => {
    setTimeout(() => {
        let state = "TamilNadu";
        console.log(state);
        callback();
    }, 1000);
};

const getCities = (callback) => {
    setTimeout(() => {
        let city = "Coimbatore";
        console.log(city);
        callback();
    }, 1000);
};

const getDistrtict = (callback) => {
    setTimeout(()=> { // setting a timer to delay the result
        let district = "Coimbatore";
        console.log(district);
        callback();
    }, 1000);
}
const done = () => {
    console.log("Done!");
};

const getAddress = () => {  // callback hell
        getStates(() => {
            getCities(() => {
                getDistrtict(() =>{
                    done();
                })
            });
         });
};

getAddress();

