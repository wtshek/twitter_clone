import { faker } from "@faker-js/faker";

type TWEET = {
  id: string;
  avatar: string;
  username: string;
  name: string;
  tweet: string;
  createdAt: number;
  retweetNum?: number;
  likeNum?: number;
  commentNum?: number;
  image?: string;
};

export const createTweets = (length = 10): TWEET[] => {
  const Tweets: TWEET[] = [];
  let haveImage = false;

  Array.from({ length }).forEach(() => {
    haveImage = !haveImage;

    Tweets.push({
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      name: faker.name.fullName(),
      tweet: faker.lorem.paragraph(),
      createdAt: faker.date.past().getTime(),
      retweetNum: faker.datatype.number(),
      likeNum: faker.datatype.number(),
      commentNum: faker.datatype.number(),
      image: haveImage ? faker.image.image() : undefined,
    });
  });

  return Tweets;
};
