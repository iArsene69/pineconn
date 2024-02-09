import type { FormUser, User } from "~/server/global.types";
import bcrypt from "bcrypt";
import { users } from "~/drizzle/schema";
import { eq } from "drizzle-orm";

export const createUser = async (user: FormUser) => {
  const db = useDB();
  try {
    const userData: FormUser = {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    };

    const [returnDataUser] = (await db
      .insert(users)
      .values(userData)
      .returning({
        id: users.id,
        name: users.name,
        username: users.username,
        email: users.email,
        profileImg: users.profileImg,
      })) as unknown as User[];

    if (!returnDataUser) {
      throw new Error("Error creating user");
    }

    return returnDataUser;
  } catch (error) {
    return null;
  }
};

export const getUserByUsername = async (username: string) => {
  const db = useDB();
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, username));

    if (!user) throw new Error("User not found");

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: number) => {
  const db = useDB();
  const [user] = await db.select().from(users).where(eq(users.id, id));

  if(!user) return null

  return user
};
