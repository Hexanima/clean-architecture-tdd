import { UserViewModel } from "../view-models/user-view-model";

export interface UserService {
  findAllSafe(): Promise<UserViewModel[]>;
}
