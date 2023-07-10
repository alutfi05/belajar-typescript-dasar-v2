// const user: (string | number)[] = ['lutfi', 1];
const user: [string, number, boolean] = ['lutfi', 1, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, 'example@gmail.com'];

newUser[1] = 'Lutfi@gmail.com';
// newUser[1] = 1; // error

// newUser.push(true); // error

export {};
