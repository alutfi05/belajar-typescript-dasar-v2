const User = {
    name: 'Lutfi',
    email: 'lutfi@gmail.com',
    isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

let newUser = { name: 'Lutfi', isPaid: false, email: 'lutfi@gmail.com' };

createUser(newUser);

// bad syntax
const createCourse = (): { name: string; price: number } => {
    return { name: 'Typescript', price: 399 };
};

export {};
