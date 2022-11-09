import React from 'react';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Orfeu</h1>
        <h2>@orfeudev</h2>

        <p>
          Estagiario na <a href="https://compass.uol/en/home/">@Compasss.UOL</a>
        </p>

        <ul>
          <li>
            <CakeIcon />
            Ceara, Brasil
          </li>
          <li>
            <LocationIcon />
            Nascido em 01 de janeiro de 0001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>90</strong>
          </span>
          <span>
            <strong>90</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
