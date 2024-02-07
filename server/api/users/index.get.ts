import { users } from "~/drizzle/schema";

export default eventHandler(async (event) => {
  try {
    const user = await useDB().select().from(users).orderBy(users.id);
   
    if (!user) throw new Error("cannot fetch users");
    return { data: user, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
});
