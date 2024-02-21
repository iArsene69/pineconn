import type { PublicThread, Thread } from "../global.types";
import { mediaTransformer } from "./media";
import { userTransformer } from "./user";

export const threadTransformer: any = (thread: Thread) => {
  return {
    id: thread.id,
    thread: thread.thread,
    media: !!thread.media ? thread.media.map(mediaTransformer) : [],
    likeCount: !!thread.likes ? thread.likes.length : 0,
    replies: !!thread.replies ? thread.replies.map(threadTransformer) : [],
    repliesCount: !!thread.replies ? thread.replies.length : 0,
    replyTo: thread.replyTo,
    author: !!thread.author ? userTransformer(thread.author) : {},
  };
};
