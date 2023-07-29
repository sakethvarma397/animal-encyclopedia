import { addUserStateToSpecies } from "../utils/Animals";

describe("Favourite Traits", () => {
  test("should properly add user's favourite traits of a species", () => {
    expect(addUserStateToSpecies([], {})).tobe([]);
  });
});
