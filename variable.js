"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'Hello Lutfi';
greetings.toLowerCase();
console.log(greetings);
// number
var userId = 334455.5;
// let userId = 334455.5; // best practice
userId.toFixed();
console.log(userId);
// boolean
var isLoggedIn = false;
// let isLoggedIn = false; // best practice
console.log(isLoggedIn);
// any
var hero; // any - don't use it - better avoid that
// let hero: string; // best practice
function getHero() {
    return 'thor';
}
hero = getHero();
