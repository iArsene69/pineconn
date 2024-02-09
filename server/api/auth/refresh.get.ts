import { getRefreshTokenByToken } from "~/server/turso/queries/refreshToken";
import { getUserById } from "~/server/turso/queries/users";

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, "refresh_token");

  if (!refreshToken) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Invalid refresh token" })
    );
  }

  const undecodeToken = await getRefreshTokenByToken(refreshToken);

  if (!undecodeToken) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Invalid refresh token" })
    );
  }

  const decodedToken = decodeRefreshToken(undecodeToken.token);
  if (!decodedToken) {
    return sendError(event, createError({statusCode: 401, statusMessage: "Invalid / expired token"}))
  }
  try {
    //@ts-ignore
    const user = await getUserById(decodedToken.userId);
    if (!user) throw new Error("User not found");
    const { accessToken } = generateTokens(user);

    return { access_token: accessToken };
  } catch (error: any) {
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: error.message })
    );
  }
});
