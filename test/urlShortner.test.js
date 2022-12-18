import { dbConnection } from "../database/db.js";
import { User } from "../models/User.js";
describe("checking all apis", () => {
  beforeAll(() => {
    dbConnection();
  });

  it("User Created", async () => {
    const mockUser = { name: "John" };
    await User.create(mockUser);
    const insertedUser = await User.findOne({ name: mockUser.name });
    expect({ name: insertedUser.name }).toEqual(mockUser);
  });
});
