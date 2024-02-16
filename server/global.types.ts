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

export type PublicUser = {
  id: number;
  name: string | null;
  username: string | null;
  profileImg: string | null;
  email: string;
  handle: string;
}