import React from 'react';
import StickyBox from 'react-sticky-box';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List, { Item } from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List title="You might like">
            <Item>
              <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />
            </Item>
            <Item>
              <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />
            </Item>
            <Item>
              <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />
            </Item>
          </List>

          <List title="O que está acontecendo">
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
          </List>
          <List title="O que está acontecendo">
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
          </List>
          <List title="O que está acontecendo">
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
          </List>
          <List title="O que está acontecendo">
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
            <Item>
              <News />
            </Item>
          </List>
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
