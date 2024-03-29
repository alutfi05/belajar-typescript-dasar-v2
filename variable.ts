let greetings: string = 'Hello Lutfi';

greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 334455.5;
// let userId = 334455.5; // best practice
userId.toFixed();

console.log(userId);

// boolean
let isLoggedIn: boolean = false;
// let isLoggedIn = false; // best practice

console.log(isLoggedIn);

// any
let hero; // any - don't use it - better avoid that
// let hero: string; // best practice

function getHero() {
    return 'thor';
}

hero = getHero();

export {};
