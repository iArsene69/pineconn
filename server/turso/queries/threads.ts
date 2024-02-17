import { media, threads } from "~/drizzle/schema";

export const getThreads = async () => {
  const db = useDB();

  try {
    const allThreads = await db.query.threads.findMany({
      with: {
        media: true,
        replies: {
          with: {
            media: true,
            replies: true,
          },
        },
      },
    });

    return allThreads;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getThreadById = async (id: number) => {
  const db = useDB()

  try {
    const threadById = await db.query.threads.findFirst({
      where: (thr, {eq}) => eq(thr.id, id),
      with: {
        media: true,
        replies: {
          with: {
            media: true,
            replies: true,
          },
        },
      },
    })

    return threadById
  } catch (error) {
    console.log(error)
    return null
  }
}
