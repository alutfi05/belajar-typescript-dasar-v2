interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string;
    startTrail(): string;
    getCoupon(couponName: string, value: number): number;
}

interface User {
    githubToken: string;
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner';
}

const lutfi: Admin = {
    dbId: 1,
    email: 'Lutfi@gmail.com',
    userId: 2211,
    role: 'admin',
    githubToken: 'github',
    startTrail: () => {
        return 'trail started';
    },
    getCoupon: (name: 'Lutfi', off: 10) => {
        return 10;
    },
};

export {};
