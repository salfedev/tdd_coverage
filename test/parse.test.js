const parsePeople = require('../src/parsePeople')
const getYoungestPerson = require('../src/getYoungestPerson')
const groupPeopleByCountry = require('../src/groupPeopleByCountry')

jest.mock('../src/getYoungestPerson', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../src/groupPeopleByCountry', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('parsePeople', () => {
  let mockPeople;

  beforeEach(() => {
    mockPeople = [{ name: 'Alice', age: 30, country: 'USA' }];
    getYoungestPerson.mockReturnValue({ name: 'Alice', age: 30, country: 'USA' });
    groupPeopleByCountry.mockReturnValue({ 'USA': [mockPeople[0]] });
  });

  it('should call getYoungestPerson and groupPeopleByCountry', () => {
    parsePeople(mockPeople);
    expect(getYoungestPerson).toHaveBeenCalledWith(mockPeople);
    expect(groupPeopleByCountry).toHaveBeenCalledWith(mockPeople);
  });

  it('should return mocked values for youngestPerson and peopleGroupedByCountry', () => {
    const result = parsePeople(mockPeople);
    expect(result.youngestPerson).toEqual({ name: 'Alice', age: 30, country: 'USA' });
    expect(result.peopleGroupedByCountry).toEqual({ 'USA': [mockPeople[0]] });
  });
});
