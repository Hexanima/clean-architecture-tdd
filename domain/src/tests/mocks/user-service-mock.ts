import { User } from "../../entitites/user";
import { UserService } from "../../services/user-service";

export interface UserServiceMock extends UserService {
  users: User[];
}

export function createUserServiceMock(users: User[] = []): UserServiceMock {
  return {
    users,
    async findAllSafe() {
      return this.users.map((user) => ({ ...user, password: undefined }));
    },
  };
}
