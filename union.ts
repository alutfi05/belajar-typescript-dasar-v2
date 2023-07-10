let score: number | string = 33;
score = 44;
score = 'lutfi';

type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let lutfi: User | Admin = {
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

const getDBId = (id: number | string) => {
    if (typeof id === 'string') {
        return id.toLowerCase();
    } else if (typeof id === 'number') {
        return id + 2;
    }
};

console.log(getDBId(3));
console.log(getDBId('AHMAD LUTFI'));

// Array
// const data: number[] = [1, 2, 3, '4']; // error
// const data2: string[] = [1, 2, 3, '4']; // error
const data3: (string | number | boolean)[] = [1, 2, '3', '4', true, false];

console.log(data3);

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'aisle';
// seatAllotment = 'crew'; // error
