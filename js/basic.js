var vardas = 'Bilas';

var pakeistasVardas = vardas.replace("Bi","Gi"); 

console.log(`pakeistos vardo ${pakeistasVardas} 2 pirmos raides`);

console.log(`vardo iligis ${vardas.length} raides`);

var vardas = 'Domantas';

console.log(`Konkretaus eilutės ${vardas[3]} simbolio gavimas`);

var vardas = 'Domantas';

console.log(`ar yra: ${vardas.indexOf("tas")} raides`);

console.log(`pirmos dvi vardo ${vardas.slice(0,2)} raides`);



const language="default";

switch(language){
    case "lt":
        console.log("Sveiki");
        break;
    case "en":
        console.log("Hello");
        break;
    default:
        console.log("nesupratau kalbos")
}