import type { PublicThread, Thread } from "../global.types";
import { mediaTransformer } from "./media";
import { userTransformer } from "./user";

const replyToTransformer = (replyTo: any) => {
  return {
    id: replyTo.id,
    thread: replyTo.thread,
    author: !!replyTo.author ? userTransformer(replyTo.author) : {}
  }
}

export const threadTransformer: any = (thread: Thread) => {
  return {
    id: thread.id,
    thread: thread.thread,
    media: !!thread.media ? thread.media.map(mediaTransformer) : [],
    likeCount: !!thread.likes ? thread.likes.length : 0,
    replies: !!thread.replies ? thread.replies.map(threadTransformer) : [],
    repliesCount: !!thread.replies ? thread.replies.length : 0,
    replyTo: !!thread.replyTo ? replyToTransformer(thread.replyTo) : null,
    author: !!thread.author ? userTransformer(thread.author) : {},
  };
};
