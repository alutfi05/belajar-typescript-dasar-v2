const superHeros: string[] = [];
// const heroPowers: number[] = [];
const heroPowers: Array<number> = [];

type User = {
    name: string;
    isActive: boolean;
};

const allUsers: User[] = [];

const MLModels: number[][] = [[255, 255, 255], []]; // 2D array

superHeros.push('spiderman');
heroPowers.push(2);
allUsers.push({ name: 'Lutfi', isActive: true });

console.log(superHeros);
console.log(heroPowers);
console.log(allUsers);
console.log(MLModels);

export {};
