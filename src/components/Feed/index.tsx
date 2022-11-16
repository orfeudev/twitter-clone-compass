import React, { useEffect, useState } from 'react';
import { Container, Tab, Tweets } from './styles';
import Tweet from '../Tweet';
import { getTweets } from '../../services';
import { ITweet } from '../../@types';
const Feed: React.FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  useEffect(() => {
    const getAllTweets = async () => {
      const data = await getTweets();
      setTweets(data);
    };
    getAllTweets();
  }, []);

  console.log(tweets);
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
        {/* <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet /> */}
      </Tweets>
    </Container>
  );
};

export default Feed;
