import styled, { css } from 'styled-components';
import { Chat, Retweet, Favorite, Share } from '../../styles/Icons';
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  max-width: 100%;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
`;
export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: ${(props) => props.theme.colors.gray};
`;
export const RocketseatIcon = styled(Retweet)`
  width: 16px;
  height: 16px;

  margin-left: 36px;
  margin-right: 9px;

  > path {
    fill: ${(props) => props.theme.colors.gray};
  }
`;
export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;
export const Avatar = styled.div<{ imageURL?: string }>`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: ${(props) => props.theme.colors.gray};
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: ${(props) => props.theme.colors.gray};
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: ${(props) => props.theme.colors.outline};
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;
  @media (min-width: 600px) {
    padding-right: 87px;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    color: ${(props) => props.theme.colors.gray};
    &,
    > svg path {
      fill: ${(props) => props.theme.colors.gray};
    }
  }

  &:nth-child(2) {
    color: ${(props) => props.theme.colors.retweet};
    &,
    > svg path {
      fill: ${(props) => props.theme.colors.retweet};
    }
  }

  &:nth-child(3) {
    color: ${(props) => props.theme.colors.like};
    &,
    > svg {
      fill: ${(props) => props.theme.colors.like};
    }
  }

  &:nth-child(4) {
    color: ${(props) => props.theme.colors.twitter};
    &,
    > svg {
      fill: ${(props) => props.theme.colors.twitter};
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;

export const ShareIcon = styled(Share)`
  ${iconCSS}
`;
