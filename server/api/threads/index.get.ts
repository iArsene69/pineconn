import { getThreads } from "~/server/turso/queries/threads";

export default defineEventHandler(async (event) => {
  const allThreads = await getThreads()

  return {
    threads: allThreads
  }
});
