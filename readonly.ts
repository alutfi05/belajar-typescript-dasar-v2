type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDeatils?: number; // Optional
};

const myUser: User = {
    _id: '1234',
    name: 'Lutfi',
    email: 'lutfi@gmail.com',
    isActive: true,
};

myUser.email = 'ahmadlutfi@gmail.com';
// myUser._id = '123' // error -> because readonly

type CardNumber = {
    cardNumber: string;
};

type CardDate = {
    cardDate: string;
};

type CardDetails = CardNumber &
    CardDate & {
        cvv: number;
    };
