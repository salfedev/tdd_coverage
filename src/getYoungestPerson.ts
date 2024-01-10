export default function getYoungestPerson(people) {
  return people.reduce(function (youngest, person) {
    return person.age < youngest.age ? person : youngest;
  }, people[0]);
}
