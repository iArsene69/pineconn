import { useValidatedQuery, z } from "h3-zod";
import { threadTransformer } from "~/server/transformers/thread";
import { getThreads } from "~/server/turso/queries/threads";

export default defineEventHandler(async (event) => {
  
  const allThreads = await getThreads();

  return {
    threads: allThreads.map(threadTransformer),
  };
});
