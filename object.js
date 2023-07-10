"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Lutfi',
    email: 'lutfi@gmail.com',
    isActive: true,
};
// const createUser = ({ name: string, isPaid: boolean }) => {};
// let newUser = { name: 'Lutfi', isPaid: false, email: 'lutfi@gmail.com' };
// createUser(newUser);
// bad syntax
var createCourse = function () {
    return { name: 'Typescript', price: 399 };
};
var createUser = function (user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
};
console.log(createUser({ name: 'Lutfi', email: 'lutfi@gmail.com', isActive: false }));
