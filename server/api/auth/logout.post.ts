import { removeRefreshToken } from "~/server/turso/queries/refreshToken";

export default defineEventHandler(async (event) => {
  try {
    const refreshToken = getCookie(event, "refresh_token");
    if (!refreshToken) {
      throw new Error("Invalid refresh token");
    }
    await removeRefreshToken(refreshToken);
  } catch (error: any) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: error.message })
    );
  } finally {
    sendRefreshToken(event, "");
    return { message: "Logged out" };
  }
});
