export type User = {
  id: number;
  name: string | null;
  username: string | null;
  profileImg: string | null;
  email: string;
  password: string;
};

export type FormUser = {
  name: string | null;
  username: string | null;
  profileImg: string | null;
  email: string;
  password: string;
}

export type Media = {
  id: number,
  url: string,
  publicId: string,
  threadId: number,
  userId: number
}

export type Thread = {
  id: number,
  thread: string,
  userId: number,
  replyTo: number | null,
  likeCount: number,
  media: Media[],
  replies: Thread[]
}

export type PublicMedia = {
  id: number,
  url: string
}

export type PublicThread = {
  id: number,
  thread: string,
  media: PublicMedia[] | [],
  userId: number,
  likeCount: number,
  replies: PublicThread[] | [],
  repliesCount: number
}

export type PublicUser = {
  id: number;
  name: string | null;
  username: string | null;
  profileImg: string | null;
  email: string;
  handle: string;
}