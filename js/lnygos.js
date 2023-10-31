let catalogs = {
    grozine:[
        {
            ISBN: "GR1241K",
            leidimo_metai: "2005",
            pavadinimas: 'Mano mintys debesyse',
            Puslapiu_skaicius: "200",
    
        },
    
        {
            ISBN: "9786094940705",
            leidimo_metai: "2023",
            pavadinimas: 'Carienė',
            Puslapiu_skaicius: "522",
    
        },
    
        {
            ISBN: "9786090156810",
            leidimo_metai: "2021",
            pavadinimas: 'Mergina jo šešėlyje',
            Puslapiu_skaicius: "416",
    
        },
    
        {
            ISBN: "9786094666186",
            leidimo_metai:  "2022",
            pavadinimas: '(Ne)paskutinis veiksmas',
            Puslapiu_skaicius: "296",
    
        }
    ],

// mokomoji

    mokomoji:[
        {
            ISBN: "9785430072285",
            leidimo_metai:  "2022",
            pavadinimas: 'Eksperimentuokite. Inžinerijos mokslas',
            Puslapiu_skaicius: "80",
    
        },

        {
            ISBN: "9789955263678",
            leidimo_metai:  "2022",
            pavadinimas: 'Žemė 6, geografijos atlasas 6 kl.',
            Puslapiu_skaicius: "132",
    
        },

        {
            ISBN: "9785430063207",
            leidimo_metai:  "2014",
            pavadinimas: 'OPA PA! Priešmokyklinuko užduočių bloknotas 2 dalis',
            Puslapiu_skaicius: "144",
    
        },

        {
            ISBN: "9785430063214",
            leidimo_metai:  "2015",
            pavadinimas: 'OPA PA! Priešmokyklinuko užduočių bloknotas, 3 dalis',
            Puslapiu_skaicius: "152",
    
        }
    ],
    
    laisvalaikio:[
        {
            ISBN: "9789955310778",
            leidimo_metai:  "2023",
            pavadinimas: 'Pasaulių gėlė',
            Puslapiu_skaicius: "151",
    
        },

        {
            ISBN: " 9786094731976",
            leidimo_metai:  "2021",
            pavadinimas: '100 patarimų, kaip išlaikyti vairavimo egzaminą',
            Puslapiu_skaicius: "208",
    
        },

        {
            ISBN: "9786094690952",
            leidimo_metai:  "2020",
            pavadinimas: '360 Laipsnių ministerija',
            Puslapiu_skaicius: "419",
    
        },

        {
            ISBN: "9786098196108",
            leidimo_metai:  "2021",
            pavadinimas: '4 keliai prie gyvybės medžio',
            Puslapiu_skaicius: "312",
    
        }
    ],

}

for (let kategorija in catalogs){
    console.log(`${kategorija} (${catalogs[kategorija].length} knygos)`);
    console.log("---------------")
    for(knyga of catalogs[kategorija]){
        console.log(`ISBN: ${knyga.ISBN}`);
        if (knyga.leidimo_metai == 2023){
            console.log(`Leidimo metai: ${knyga.leidimo_metai} + " " + "Nauja knyga"`)
        }
        else{
            console.log(`Leidimo metai: ${knyga.leidimo_metai}`)
        }
        console.log(`Pavadininimas: ${knyga.pavadinimas}`)
        console.log(`Puslapiu skaicius: ${knyga.Puslapiu_skaicius}`)
        console.log("--------------------")


    }
}