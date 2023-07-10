"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTwo = function (num) {
    return num + 2;
    // return 'hello' // error
};
var getUpper = function (value) {
    return value.toUpperCase();
};
var signUpuser = function (name, email, isPaid) { };
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // function with default value
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
    // return 1; // error
});
var consoleError = function (errorMessage) {
    console.log(errorMessage);
    // return 1; // error
};
var handleError = function (errorMessage) {
    throw new Error(errorMessage);
};
addTwo(5);
getUpper('hello world');
signUpuser('Lutfi', 'lutfi@gmail.com', false);
loginUser('Ahmad Lutfi', 'ahmad@gmail,com');
