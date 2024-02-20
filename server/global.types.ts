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
};

export type Media = {
  id: number;
  url: string;
  publicId: string;
  threadId: number;
  userId: number;
};

export type PlainThread = {
  id: number;
  thread: string;
  userId: number;
  replyToId: number | null;
};

export type FormThread = {
  thread: string,
  userId: number,
  replyToId: number | null
}

export type FormMedia = {
  url: string,
  publicId: string,
  userId: number,
  threadId: number
}

export type PlainLikes = {
  id: number,
  userId: number,
  threadId: number
}

export type Thread = {
  id: number;
  thread: string;
  userId: number;
  media: Media[];
  replies: Thread[];
  replyTo: PlainThread | null;
  author: User,
  likes: PlainLikes[]
};

export type PublicMedia = {
  id: number;
  url: string;
};

export type PublicThread = {
  id: number;
  thread: string;
  media: PublicMedia[] | [];
  userId: number;
  likeCount: number;
  replies: PublicThread[] | [];
  repliesCount: number;
};

export type PublicUser = {
  id: number;
  name: string | null;
  username: string | null;
  profileImg: string | null;
  email: string;
  handle: string;
};
