import { useEffect, useState } from "react";
import { getTweet } from "##/api/tweets";
import { Layout } from "##/components/Layout";
import { Tweet } from "##/components/Tweet";
import { TweetType } from "##/utils/types";

export const Home = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    const fetchTweet = async () => {
      const data = await getTweet();

      setTweets(data);
    };

    fetchTweet();
  }, [setTweets]);

  return (
    <Layout>
      <div className="pt-[107px] pb-[70vh]">
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              avatar={tweet.avatar}
              name={tweet.name}
              username={tweet.username}
              tweet={tweet.tweet}
              commentsNum={tweet.commentsNum}
              retweetNum={tweet.retweetNum}
              likeNum={tweet.likeNum}
              isVerified={tweet.isVerified}
              createdAt={tweet.createdAt}
              id={tweet.id}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
