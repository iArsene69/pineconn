import { useSafeValidatedQuery, useValidatedQuery, z } from "h3-zod";
import { threadTransformer } from "~/server/transformers/thread";
import { getThreads, getThreadsBySearch } from "~/server/turso/queries/threads";

export default defineEventHandler(async (event) => {
 const {search} = getQuery(event)
 
  if(!!search){
    const threadsBysearch = await getThreadsBySearch(search)

    return {
      threads: threadsBysearch.map(threadTransformer)
    }
  }

  const allThreads = await getThreads();

  return {
    threads: allThreads.map(threadTransformer)
  };
});
