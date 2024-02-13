import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const parseHeader = JSON.parse(event.headers.get("user") || "{}");
  return {
    //@ts-ignore
    user: userTransformer(parseHeader),
  };
});
