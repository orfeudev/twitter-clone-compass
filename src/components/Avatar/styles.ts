import styled from 'styled-components';
import { AvatarProps } from './index';

export const Avatar = styled.div<AvatarProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  border-radius: 50%;
  flex-shrink: 0;
  /* background: url(${(props) => props.imageURL}); */
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
