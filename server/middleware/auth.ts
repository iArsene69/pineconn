import URLPattern from "url-pattern";
import { getUserById } from "../turso/queries/users";

export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user", "/api/status/thread"];

  const isHandled = endpoints.some((endpoint) => {
    const pattern = new URLPattern(endpoint);

    return pattern.match(event.path);
  });

  if (!isHandled) return;

  const token = getCookie(event, 'refresh_token')

  if (!token) return;
  const decoded = decodeRefreshToken(token);

  if (!decoded) return;

  try {
    //@ts-ignore
    const userId = decoded.userId;
    const user = await getUserById(userId);
    event.headers.set("user", JSON.stringify(user));
  } catch (error) {
    return;
  }
});
