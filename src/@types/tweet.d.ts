import { IUser } from './user';

export interface ITweet {
  id: string;
  userId: string;
  text: string;
  media: string;
  commentsCount: number;
  retweetsCount: number;
  likesCount: number;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}
