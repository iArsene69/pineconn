import { eq } from "drizzle-orm";
import { refreshToken } from "~/drizzle/schema";

export const createRefreshToken = async (token: string, userId: number) => {
  const db = useDB();

  await db.insert(refreshToken).values({ token, userId });
};

export const getRefreshTokenByToken = async (token: string) => {
  const db = useDB();
  const [rToken] = await db
    .select()
    .from(refreshToken)
    .where(eq(refreshToken.token, token));
  if (!rToken) {
    return null;
  }
  return rToken;
};

export const removeRefreshToken = async (token: string) => {
  const db = useDB();
  await db.delete(refreshToken).where(eq(refreshToken.token, token));
};

export const getRefreshTokenByUserId = async (userId: number) => {
  const db = useDB();
  const [rToken] = await db
    .select()
    .from(refreshToken)
    .where(eq(refreshToken.userId, userId));
  if (!rToken) return null;
  return rToken;
};
