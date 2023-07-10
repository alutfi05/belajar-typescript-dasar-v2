const addTwo = (num: number): number => {
    return num + 2;
    // return 'hello' // error
};

const getUpper = (value: string) => {
    return value.toUpperCase();
};

const signUpuser = (name: string, email: string, isPaid: boolean) => {};

const loginUser = (name: string, email: string, isPaid: boolean = false) => {}; // function with default value

const getHello = (s: string): string => {
    return '';
};

const heros = ['thor', 'spiderman', 'ironman'];

heros.map((hero): string => {
    return `Hero is ${hero}`;
    // return 1; // error
});

const consoleError = (errorMessage: string): void => {
    console.log(errorMessage);
    // return 1; // error
};

const handleError = (errorMessage: string): never => {
    throw new Error(errorMessage);
};

addTwo(5);
getUpper('hello world');
signUpuser('Lutfi', 'lutfi@gmail.com', false);
loginUser('Ahmad Lutfi', 'ahmad@gmail,com');

export {};
