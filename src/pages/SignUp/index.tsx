import React from 'react';
import {
  Container,
  Footer,
  Content,
  SidePanel,
  Form,
  FooterContent,
  TwitterIcon,
  Title,
  Subtitle,
  LoginOption,
  PolicyText,
  LoginText,
} from './styles';
import BackTwitter from '../../assets/images/back-twitter.png';
import GoogleLogo from '../../assets/images/google-logo.png';
import { Apple } from 'styled-icons/fa-brands';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <Container>
      <Content>
        <SidePanel image={BackTwitter} />
        <Form>
          <TwitterIcon />
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today</Subtitle>
          <LoginOption>
            <img src={GoogleLogo} />
            <span>Sign up with Google</span>
          </LoginOption>
          <LoginOption>
            <Apple />
            <span>Sign up with Apple</span>
          </LoginOption>
          <LoginOption>
            <span>Sign up with phone or email</span>
          </LoginOption>
          <PolicyText>
            By singing up you agree to the{' '}
            <Link to="/termsOfService">Terms of Service</Link> and{' '}
            <Link to="/privacyPolicy">Privacy Policy</Link> , including{' '}
            <Link to="/cookiesPolicy">Cookie Use</Link>.
          </PolicyText>
          <LoginText>
            Already have an account? <Link to="/login">Log in</Link>
          </LoginText>
        </Form>
      </Content>
      <Footer>
        <FooterContent>
          <Link to="/about">About</Link>
          <Link to="/helpCenter">Help Center</Link>
          <Link to="/termsOfService">Terms of Service</Link>
          <Link to="/privacyPolicy">Privacy Policy</Link>
          <Link to="/cookiesPolicy">Cookie Policy</Link>
          <Link to="/adsInfo">Ads info</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/status">Status</Link>
          <Link to="/carrers">Carrrers</Link>
          <Link to="/brandResources">Brand Resources</Link>
          <Link to="/advertising">Advertising</Link>
          <Link to="/marketing">Marketing</Link>
          <Link to="/twitterForBusiness">Twitter for Business</Link>
          <Link to="/developers">Developers</Link>
          <Link to="/directory">Directory</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/trademark">© 2021 Twitter, Inc.</Link>
        </FooterContent>
      </Footer>
    </Container>
  );
};
