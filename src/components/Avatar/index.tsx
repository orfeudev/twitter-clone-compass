import React from 'react';
import * as S from './styles';

export interface AvatarProps {
  imageURL: string;
  width: number;
  height: number;
}

export const Avatar: React.FC<AvatarProps> = ({ width, height, imageURL }) => {
  console.log(width, height, imageURL);
  return <S.Avatar height={49} width={49} imageURL={imageURL} />;
};
