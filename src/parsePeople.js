export default function parsePeople (people) {
    return people.map(function (person) {
        return {
            name: person.name,
            age: parseInt(person.age)
        };
    });
}