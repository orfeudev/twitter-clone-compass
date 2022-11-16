import { IUser, ITweet, ILike, IComment, IRetweet } from '../@types';
export const getTweets = async (): Promise<ITweet[]> => {
  let tweets = localStorage.getItem('tweets');
  if (!tweets) {
    return new Promise((resolve, reject) => {
      reject(new Error('Tweets not found'));
    });
  }
  let parsedTweets = JSON.parse(tweets);

  let users = await getUsers();

  let tweetsWithUsers: ITweet[] = parsedTweets.map((tweet: Partial<ITweet>) => {
    let user = users.find((user) => user.id === tweet.userId);
    return { ...tweet, user };
  });

  return new Promise((resolve, reject) => {
    resolve(tweetsWithUsers);
  });
};

export const getTweet = async (
  tweetId: string
): Promise<ITweet | undefined> => {
  let tweets: ITweet[] = await getTweets();
  let tweet = tweets.find((tweet) => tweet.id === tweetId);

  return new Promise((resolve, reject) => {
    resolve(tweet);
  });
};

export const getUsers = async (): Promise<IUser[]> => {
  let users = localStorage.getItem('users');
  if (!users) {
    return new Promise((resolve, reject) => {
      reject(new Error('Users not found'));
    });
  }
  let parsedUsers: IUser[] = JSON.parse(users);

  return new Promise((resolve, reject) => {
    resolve(parsedUsers);
  });
};

export const getUser = async (userId: string): Promise<IUser | undefined> => {
  let users: IUser[] = await getUsers();
  let user = users.find((user) => user.id === userId);
  return new Promise((resolve, reject) => {
    resolve(user);
  });
};
