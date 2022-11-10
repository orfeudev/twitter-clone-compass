import React from 'react';

import { Container, Title, Item } from './styles';

export { Item };

interface ListProps {
  title: string;
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ title, children }) => {
  return (
    <Container>
      <Item>
        <Title> {title}</Title>
      </Item>

      {children}
    </Container>
  );
};

export default List;
