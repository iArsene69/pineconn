import URLPattern from "url-pattern";
import { getUserById } from "../turso/queries/users";

export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user"];

  const isHandled = endpoints.some((endpoint) => {
    const pattern = new URLPattern(endpoint);

    return pattern.match(event.path);
  });

  if (!isHandled) return;

  const token = event.headers.get("Authorization")?.split(" ")[1];

  if (!token)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );
  const decoded = decodeAccessToken(token);

  if (!decoded)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );

  try {
    //@ts-ignore
    const userId = decoded.userId;
    const user = await getUserById(userId);
    event.headers.set("user", JSON.stringify(user))
  } catch (error) {
    return
  }
});
