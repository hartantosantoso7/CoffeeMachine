// const coffeeStock = require('./state');

// destructing object
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// import coffeeStock from './state.js';

import {coffeeStock, isCoffeeMachineReady} from './state.js';

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
const makeCoffee = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat");
    } else {
        console.log("Biji kopi habis!");
    }
}

const orderCoffee = callback => {
    let coffee = null;
    console.log("sedang membuat kopi, silahkan tunggu ...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi";
        callback(coffee);
    }, 3000);
}

displayStock(coffeeStock);
makeCoffee("robusta", 80);

orderCoffee(coffee => {
    console.log(coffee);
});

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

