import { getUserByUsername } from "~/server/turso/queries/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import {
  createRefreshToken,
  getRefreshTokenByUserId,
} from "~/server/turso/queries/refreshToken";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid Credentials" })
    );
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "User does not exist" })
    );
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Incorrect password" })
    );
  }

  const savedRefreshToken = await getRefreshTokenByUserId(user.id);

  if (savedRefreshToken) {
    sendRefreshToken(event, savedRefreshToken.token);
    return {
      user: userTransformer(user),
    };
  }
  const { accessToken, refreshToken } = generateTokens(user);

  await createRefreshToken(refreshToken, user.id);

  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
