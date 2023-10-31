// let names = ['Jonas', 'Andrius', 'Ieva', 'Karolis'];

// names = names.join(',');

// names= names.split(',');


// names.push('Giedrius')

// names.pop()

// names.unshift('Kristina')

// names.splice(3,0, "Gintaras")

// console.log(names);


// let user = prompt('Ivesk vartotojo varda')

// console.log(user)


// let skaicius = prompt('Ivesk sveciu skaiciu')

// let user = prompt('Ivesk svecio varda')
// console.log(`Sveciu sarasas:`)
// console.log(user)


function syHi(a){
    return a*2;
}

console.log(syHi(5))


const calc = function(...numbers){
    return numbers.reduce((prev, current)=>prev*current);
}

console.log(calc(5,6,7,8,9,6,4,4))