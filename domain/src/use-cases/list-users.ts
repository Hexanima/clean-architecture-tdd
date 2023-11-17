import { User } from "../entitites/user";
import { UnauthorizedError } from "../errors/unauthorized";
import { UserService } from "../services/user-service";
import { UserViewModel } from "../view-models/user-view-model";

export interface ListUserDependencies {
  userService: UserService;
  currentUser: User;
}

export interface ListUsersResponseModel {
  users: UserViewModel[];
}

export async function listUsers(
  deps: ListUserDependencies
): Promise<ListUsersResponseModel> {
  const { userService, currentUser } = deps;

  if(currentUser.role !== "admin") {
    throw new UnauthorizedError();
  } 

  const users: UserViewModel[] = await userService.findAllSafe();

  return { users };
}
