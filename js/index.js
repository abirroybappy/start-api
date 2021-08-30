const user = { id: 11, name: 'Abir Roy', job: 'developer' };

const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);


const shop = {
    name: 'Alia Store',
    address: 'Banani',
    profit: 25000,
    products: ['glossary', 'mobile', 'pen'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor',
    },
    isExpansive: false
}

const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);