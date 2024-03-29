const User = {
    name: 'Lutfi',
    email: 'lutfi@gmail.com',
    isActive: true,
};

// const createUser = ({ name: string, isPaid: boolean }) => {};

// let newUser = { name: 'Lutfi', isPaid: false, email: 'lutfi@gmail.com' };
// createUser(newUser);

// bad syntax
const createCourse = (): { name: string; price: number } => {
    return { name: 'Typescript', price: 399 };
};

// type alias
type User = {
    name: string;
    email: string;
    isActive: boolean;
};

const createUser = (user: User): User => {
    return { name: user.name, email: user.email, isActive: user.isActive };
};

console.log(
    createUser({ name: 'Lutfi', email: 'lutfi@gmail.com', isActive: false })
);

export {};
