import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  return {
    //@ts-ignore
    user: userTransformer(event.context.auth?.user),
  };
});
