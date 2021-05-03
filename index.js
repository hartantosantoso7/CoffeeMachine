// const coffeeStock = require('./state');

// destructing object
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// import coffeeStock from './state.js';

import {coffeeStock, isCoffeeMachineReady} from './state.js';

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

// const makeCoffee = (type, miligrams) => {
//     if(coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// callback Function
const orderCoffee = callback => {
    let coffee = null;
    console.log("sedang membuat kopi, silahkan tunggu ...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi";
        callback(coffee);
    }, 3000);
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan");
            } else {
                reject("Mesin sedang sibuk");
            }
        }, 2000)
    })
}

// constructing promise object
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if(isCoffeeMachineReady) {
        resolve("kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}

const stock = {
    coffeeBeans: 250,
    water: 1000,
}
// consuming promise
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if(stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup, Bisa membuat kopi");
        } else {
            reject("stock tidak cukup");
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

// menangani hasil yang akan dikembalikan
checkStock().then(handleSuccess, handleFailure);

displayStock(coffeeStock);
// makeCoffee("robusta", 80);

orderCoffee(coffee => {
    console.log(coffee);
});

// const makeCoffee = () => {
//     return new Promise(executorFunction);
// }
// const coffeePromise = makeCoffee();
// console.log(coffeePromise);

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan Air");
        setTimeout(() => {
            resolve("Air panas sudah siap");
        }, 2000);
    })
}

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi");
        setTimeout(() => {
            reject("kopi sudah siap");
        }, 1000);
    })
}

async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("kopi didapatkan");
            } else {
                reject("biji kopi habis");
            }
    }, 1000);
  })
}

// promise all
// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then((value) => {
//             console.log(value);
//             const promises = [boilWater(), grindCoffeeBeans()];
//             return Promise.all(promises);
//         })
//         .then((value) => {
//             console.log(value);
//             return brewCoffee();
//         })
//         .then((value) => {
//             console.log(value);
//             state.isCoffeeMachineBusy = false;
//         })
//         .then((rejectedReason) => {
//             console.log(rejectedReason);
//             state.isCoffeeMachineBusy = false;
//         })
// }

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
    
}
makeEspresso();
makeCoffee();
// console.log("Menjalankan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// console.log("selamat datang");
// setTimeout(() => {
//     console.log("Terima Kasih sudah mampir, silahkan datang kembali");
// }, 3000 );
//     console.log("ada yang bisa dibantu")

