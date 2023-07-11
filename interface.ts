interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string;
    startTrail(): string;
    getCoupon(couponName: string, value: number): number;
}

const lutfi: User = {
    dbId: 1,
    email: 'Lutfi@gmail.com',
    userId: 2211,
    startTrail: () => {
        return 'trail started';
    },
    getCoupon: (name: 'Lutfi', off: 10) => {
        return 10;
    },
};

export {};
