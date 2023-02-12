export type TweetType = {
  name: string;
  username: string;
  tweet: string;
  commentsNum: number;
  retweetNum: number;
  likeNum: number;
  isVerified: boolean;
  createdAt: number;
  avatar?: string | undefined;
  id: string;
};
