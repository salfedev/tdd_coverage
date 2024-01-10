export default function groupPeopleByCountry(people) {
    return people.reduce((acc, person) => {
        if (!acc[person.country]) {
            acc[person.country] = [];
        }
        acc[person.country].push(person);
        return acc;
    }, {});
}