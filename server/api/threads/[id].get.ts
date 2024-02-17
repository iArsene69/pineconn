import { useValidatedParams, zh } from "h3-zod";
import { threadTransformer } from "~/server/transformers/thread";
import { getThreadById } from "~/server/turso/queries/threads";

export default defineEventHandler(async (event) => {
  const { id } = await useValidatedParams(event, {
    id: zh.intAsString,
  });

  const thread = await getThreadById(id);

  return {
    thread: threadTransformer(thread),
  };
});
