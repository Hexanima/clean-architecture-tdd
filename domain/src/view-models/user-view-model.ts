import { User } from "../entitites/user";

export type UserViewModel = Omit<User, "password">