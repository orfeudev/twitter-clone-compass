import React from 'react';
import ProfilePage from '../ProfilePage';
import ThemeToggler from '../ThemeToggler';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  BellIcon,
  HomeIcon,
  SearchIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Orfeu</strong>
          <span>123 Tweets</span>
        </ProfileInfo>
        <ThemeToggler />
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
