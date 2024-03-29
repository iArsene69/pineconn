import type { User } from "../global.types";
import jwt from "jsonwebtoken";

const generateAccessToken = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "10m",
  });
};

const generateRefreshToken = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret);
};

export const decodeRefreshToken = (token: string) => {
  const config = useRuntimeConfig();

  try {
    const decodedToken = jwt.verify(token, config.jwtRefreshSecret);
    return decodedToken
  } catch (error) {
    return null;
  }
};

export const decodeAccessToken = (token: string) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtAccessSecret);
  } catch (error) {
    return null;
  }
};

export const generateTokens = (user: User) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event: any, token: string) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
};
