import type { PublicThread, Thread } from "../global.types";
import { mediaTransformer } from "./media";

export const threadTransformer: any = (thread: Thread) => {
  return {
    id: thread.id,
    thread: thread.thread,
    media: !!thread.media ? thread.media.map(mediaTransformer) : [],
    userId: thread.userId,
    likeCount: thread.likeCount,
    replies: !!thread.replies ? thread.replies.map(threadTransformer) : [],
    repliesCount: !!thread.replies ? thread.replies.length : 0,
  };
};
