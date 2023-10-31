let students =[
    {
        id:1,
        firstName:"Tadas",
        lastName: "Tadauskas",
        email:"tadas.tadauskas@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:7
            },

            {
                subject:'IT',
                mark:8
            },

            {
                subject:'Math',
                mark:5
            }
        ]
    },

    {
        id:2,
        firstName:"Ieva",
        lastName: "Ievute",
        email:"Ieva.Ievute@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:4
            },

            {
                subject:'IT',
                mark:9
            },

            {
                subject:'Math',
                mark:4
            }
        ]
    },

    {
        id:3,
        firstName:"Migle",
        lastName: "Tadauskaite",
        email:"migle.tadauskaite@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:6
            },

            {
                subject:'IT',
                mark:4
            },

            {
                subject:'Math',
                mark:6
            }
        ]
    },

    {
        id:4,
        firstName:"Petras",
        lastName: "Tadauskiukas",
        email:"petras.tadauskiukas@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:10
            },

            {
                subject:'IT',
                mark:10
            },

            {
                subject:'Math',
                mark:10
            }
        ]
    },

    {
        id:5,
        firstName:"Rokas",
        lastName: "Tadauskas",
        email:"Rokas.tadauskas@stud.kitm.lt",
        group: "students",

    }
]


console.log('Studentai:')
for(let student of students){
console.log('---------------')
    for(let studentData in student){
        if(studentData=='group'){
            console.log(`Grupe:${student[studentData]}`)
        }
        else{
            if(studentData=='marks'){
                console.log('Ivertinimai:');
                for(marks of student[studentData])[
                    console.log(`${marks.object}:${marks.mark}`)
                ]

            }
        console.log(student[studentData])
     
}
}
}
       
let studentData = prompt('Iveskite studento varda')
let found = false
for(const student of students){
    if (student.firstName == studentName) 

    found = true
    studentData(student)
    break;
}

if (found == false) {
    alert ('Studentas nerastas')
}

