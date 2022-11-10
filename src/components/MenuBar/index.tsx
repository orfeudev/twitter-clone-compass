import React from 'react';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  BookmarkIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';
import Button from '../Button';
const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Explore</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>
        <MenuButton>
          <BookmarkIcon />
          <span>Bookmarks</span>
        </MenuButton>
        <MenuButton>
          <ListIcon />
          <span>Lists</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>
        <MenuButton className={'active'}>
          <MoreIcon />
          <span>More</span>
        </MenuButton>
        <Button>
          <span>Tweet</span>
        </Button>
      </TopSide>
      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>name name</strong>
          <span>@asasasasas</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
