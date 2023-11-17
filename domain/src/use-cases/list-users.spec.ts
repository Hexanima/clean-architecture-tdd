import { User } from "../entitites/user";
import { UnauthorizedError } from "../errors/unauthorized";
import { createUserMock } from "../tests/mocks/user-mock";
import {
  UserServiceMock,
  createUserServiceMock,
} from "../tests/mocks/user-service-mock";
import { listUsers } from "./list-users";

describe("List Users", () => {
  const ADMIN_USER: User = createUserMock({ role: "admin" });
  const NON_ADMIN_USER: User = createUserMock({ role: "user" });

  let userService: UserServiceMock;

  beforeEach(() => {
    userService = createUserServiceMock([
      createUserMock(),
      createUserMock(),
      createUserMock(),
    ]);
  });

  test("Given an admin user, it should list all users", async () => {
    const result = await listUsers({ currentUser: ADMIN_USER, userService });

    expect(result.users).toHaveLength(userService.users.length);
    result.users.forEach((user) => {
      //@ts-expect-error
      expect(user.password).toBeUndefined();
    });
  });

  test("Given an non-admin user, it should throw", async () => {
    expect(
      listUsers({ currentUser: NON_ADMIN_USER, userService })
    ).rejects.toThrow(new UnauthorizedError());
  });
});
