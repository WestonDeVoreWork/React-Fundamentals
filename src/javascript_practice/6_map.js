const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];

let instructor_name = [];
speechSynthesis.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);
// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map( i => i.name);
console.log(instructorNames);