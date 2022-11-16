import styled from 'styled-components';
import { Twitter } from 'styled-icons/boxicons-logos';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
`;

export const MainForm = styled.div`
  width: min(450px, 90%);
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  flex-shrink: 0;
`;
export const TwitterIcon = styled(Twitter)`
  width: 50px;
  height: 41px;
  fill: ${(props) => props.theme.colors.twitter};
`;
export const FormTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 36px 0px;
  text-align: left;
  width: 100%;
  font-weight: 900;
  font-size: 42px;
  line-height: 49px;
`;
export const Input = styled.input`
  width: 100%;
  height: 70px;
  background: white;
  border-radius: 6px;
  margin-bottom: 25px;
  padding: 23px 20px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const HelpSection = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.twitter};

    &:visited {
      color: ${(props) => props.theme.colors.twitter};
    }
  }
`;
