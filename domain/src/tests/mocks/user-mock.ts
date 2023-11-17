import { User } from "../../entitites/user";

export function createUserMock(opts: Partial<User> = {}) : User {
    return {
        id: opts.id ?? "any-id",
        name: opts.name ?? "Any name",
        email: opts.email ?? "test@test.com",
        password: opts.password ?? "any-password",
        role: opts.role ?? "user",
      }
}
