let items = ['Phone', 'Pencil', 'Box', 'Table'];

let user = {
    id:1,
    name: "Jonas",
    email: 'jonux123@gmail.com',
    role: "Admin"
}

for(let userData in user){
    console.log(`${userData}:${user[userData]}`)
}


// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);
// console.log(items[3]);

// console.log('For ciklas:')

// for(let i=0;i<items.length;i++){
//     console.log(items[i])
// }

// for(let item in items){
//     console.log(items[item])
// }