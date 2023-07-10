"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = 'lutfi';
var lutfi = {
    name: 'Ahmad Lutfi',
    id: 1,
};
lutfi = {
    username: 'alutfi05._',
    id: 1,
};
console.log(lutfi);
// const getDBId = (id: number | string) => {
//     console.log(`DB id is: ${id}`);
// };
// it's good, but you must check the type first
var getDBId = function (id) {
    if (typeof id === 'string') {
        return id.toLowerCase();
    }
    else if (typeof id === 'number') {
        return id + 2;
    }
};
console.log(getDBId(3));
console.log(getDBId('AHMAD LUTFI'));
// Array
// const data: number[] = [1, 2, 3, '4']; // error
// const data2: string[] = [1, 2, 3, '4']; // error
var data3 = [1, 2, '3', '4', true, false];
console.log(data3);
var seatAllotment;
seatAllotment = 'aisle';
