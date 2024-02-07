import type { User } from "~/server/global.types";
import bcrypt from "bcrypt";
import { users } from "~/drizzle/schema";

export const createUser = async (user: User) => {
  const db = useDB();
  const userData: User = {
    ...user,
    password: bcrypt.hashSync(user.password, 10),
  };

  return await db.insert(users).values(userData).returning({
    name: users.name,
    username: users.username,
    email: users.email,
    profileImg: users.profileImg,
  }) as unknown as User;
};
