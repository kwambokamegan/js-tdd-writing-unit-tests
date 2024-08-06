// Your tests here
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const answer = currentYear - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);

    expect(ageOfPerson).toEqual(answer);
  });

  it("returns the current year for a person born in year 0", () => {
    const birthYear = 0;
    const currentYear = new Date().getFullYear();
    const answer = currentYear - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);

    expect(ageOfPerson).toEqual(answer);
  });
});
