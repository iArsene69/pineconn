import { and, eq } from "drizzle-orm";
import { likes, media, threads } from "~/drizzle/schema";
import type { FormThread, PlainThread } from "~/server/global.types";

export const getThreads = async () => {
  const db = useDB();

  try {
    const allThreads = await db.query.threads.findMany({
      with: {
        media: true,
        replyTo: {
          with: {
            author: true,
          },
        },
        likes: true,
        author: true,
        replies: {
          with: {
            media: true,
            replyTo: {
              with: {
                author: true,
              },
            },
            likes: true,
            author: true,
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
  const db = useDB();

  try {
    const threadById = await db.query.threads.findFirst({
      where: (thr, { eq }) => eq(thr.id, id),
      with: {
        media: true,
        replyTo: {
          with: {
            author: true,
          },
        },
        likes: true,
        author: true,
        replies: {
          with: {
            media: true,
            replyTo: {
              with: {
                author: true,
              },
            },
            likes: true,
            author: true,
          },
        },
      },
    });

    return threadById;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getThreadsBySearch = async (search: any) => {
  const db = useDB();

  try {
    const foundThreads = await db.query.threads.findMany({
      where: (thr, { like }) => like(thr.thread, `${search}%`),
      with: {
        media: true,
        replyTo: {
          with: {
            author: true,
          },
        },
        likes: true,
        author: true,
        replies: {
          with: {
            media: true,
            replyTo: {
              with: {
                author: true,
              },
            },
            likes: true,
            author: true,
          },
        },
      },
    });

    return foundThreads;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createThread = async (thread: FormThread) => {
  const db = useDB();
  const date = new Date();
  let threadData = {
    ...thread,
    createdAt: date.toISOString(),
  };

  try {
    const [returningThread] = await db
      .insert(threads)
      .values(threadData)
      .returning();
    return returningThread;
  } catch (error) {
    return null;
  }
};

export const doLike = async (threadId: number, userId: number) => {
  const db = useDB();
  try {
    await db.insert(likes).values({ userId, threadId });
  } catch (error) {
    return;
  }
};

export const undoLike = async (threadId: number, userId: number) => {
  const db = useDB()
  try {
    await db.delete(likes).where(and(eq(likes.threadId, threadId), eq(likes.userId, userId)))
  } catch (error) {
    return
  }
}

export const isAlreadyLike = async (threadId: number, userId: number) => {
  const db = useDB();

  const isLike = await db.query.likes.findFirst({
    where: (like, { eq, and }) =>
      and(eq(like.threadId, threadId), eq(like.userId, userId)),
  });

  if (!isLike) return false;

  return true;
};
