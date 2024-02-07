import { useValidatedBody, z } from "h3-zod";
import { users } from "~/drizzle/schema";

export default eventHandler(async (event) => {
  try {
    const { username, email } = await useValidatedBody(event, {
      username: z.string().min(1).max(7),
      email: z.string().email(),
    });
    if (!username || !email)
      return {
        statusCode: 400,
        message: "Invalid username or email",
      };
    await useDB().insert(users).values({ username, email });

    return {
      statusCode: 200,
      message: "User created successfully",
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      message: error.message,
    };
  }
});
