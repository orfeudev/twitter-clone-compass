import React from 'react';
import moment from 'moment';
import { ITweet } from '../../@types';
import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
  // Avatar,
} from './styles';
import { Avatar } from '../Avatar';
export interface TweetProps {
  tweet: ITweet;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const imageURL =
    'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png';

  return (
    <Container>
      {/* <Retweeted>
        <RocketseatIcon />
        Voce retweetou
      </Retweeted> */}

      <Body>
        <Avatar width={49} height={49} imageURL={imageURL} />

        <Content>
          <Header>
            <strong>{`${tweet.user.firstName} ${tweet.user.lastName} `}</strong>
            <span>{`@${tweet.user.username}`}</span>
            <Dot />
            <time>{`${moment(tweet.createdAt).format('MMM DD')}`}</time>
          </Header>

          <Description>Lorem ipsum dolor sit, amet consectetur</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              {`${tweet.commentsCount}`}
            </Status>
            <Status>
              <RetweetIcon />
              {`${tweet.retweetsCount}`}
            </Status>
            <Status>
              <LikeIcon />
              {`${tweet.likesCount}`}
            </Status>
            <Status>
              <ShareIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
