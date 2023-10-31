// Mokomes javasrcipt

// Primityvus duomenu tipai
 
let first_name='Jonas'; //string
let last_name='Andriuskevicius'; //string
let item_price=12.56;
let user_age=25;
let user_online=true;
 
// Inteligentiski duomenu tipai
 
// Masyvas
let product_cart=['Computer','Phone','Tablet','Pencil'];
 
// Objektas
let product={
    tittle:'Apple MacBook Pro',
    price:2366.12,
    location:'Kaunas'
};
 
// Masyvo objektas
let products=[
{
    tittle:'Apple MacBook Pro',
    price:2366.12,
    location:'Kaunas'
},
{
    tittle:'Apple MacBook Pro',
    price:2366.12,
    location:'Kaunas'
},
{
    tittle:'Apple MacBook Pro',
    price:2366.12,
    location:'Kaunas'
},
];
 
// Tipai kintamuju
 
console.log(typeof(first_name));
console.log(typeof(item_price));
console.log(typeof(user_age));
console.log(typeof(user_online));
console.log(typeof(product_cart));
console.log(typeof(product));
console.log(product_cart);
 
// console.log isvedimas
console.log(`Vartotojo pavarde yra ${last_name}, o jo vardas ${first_name}`);
console.log("Man galbut patinka JS: "+first_name);
 
// Konstantos deklaravimas
const user_role='admin';
// userRole='sale'; negalima perrasyti konstantos
 
console.log(`Vartojo role yra ${user_role}`);
 