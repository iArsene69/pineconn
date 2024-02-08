import { refreshToken } from "~/drizzle/schema";

export const createRefreshToken = async (token: string, userId: number) => {
  const db = useDB();

  await db.insert(refreshToken).values({ token, userId });
};
