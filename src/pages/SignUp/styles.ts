import styled from 'styled-components';
import { Twitter } from 'styled-icons/boxicons-logos';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const SidePanel = styled.div<{ image: any }>`
  width: 60%;
  height: 100%;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const TwitterIcon = styled(Twitter)`
  width: 50px;
  height: 41px;
  fill: ${(props) => props.theme.colors.twitter};
  margin-top: 200px;
`;

export const Title = styled.h1`
  margin-top: 57px;
  font-style: normal;
  font-weight: 900;
  font-size: 4rem;
  line-height: 98px;

  font-family: 'Roboto', sans-serif;
`;

export const Subtitle = styled.h2`
  margin-top: 46px;
  margin-bottom: 31px;

  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  line-height: 49px;
`;

export const Form = styled.div`
  width: 40%;
  padding-left: 40px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  width: 1481px;
  display: flex;
  justify-content: space-between;
  > a {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;

    color: #000000;
  }
`;

export const LoginOption = styled.button`
  width: 403px;
  height: 62px;
  border-radius: 42px;
  border: 1px solid #e4eaed;
  margin-bottom: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }

  > img,
  svg {
    width: 31px;
    height: 32px;
    margin-right: 6px;
  }
`;

export const PolicyText = styled.div`
  margin-top: 9px;
  width: 373px;
  font-size: 14px;
  > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.twitter};
  }
`;

export const LoginText = styled.div`
  margin-top: 20px;
  font-size: 16px;
  > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.twitter};
  }
`;
