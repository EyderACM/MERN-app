import React from 'react';
import { MainImage } from '../../components/MainImage/MainImage';
import { ImageWrapper } from './components/ImageWrapper';
import { TitleText } from './components/TitleText';
import { H3 } from '../../components/ui/H3/H3';
import { LandingTextWrapper } from './components/LandingTextWrapper';
import { Button } from '../../components/ui/Button/Button';
import { LandingButtonWrapper } from './components/LandingButtonWrapper';
import { LandingPageWrapper } from './components/LandingPageWrapper';
import { LandingInformation } from './components/LandingInformation';

export const LandingPage: React.FC = () => (
  <LandingPageWrapper>
    <ImageWrapper>
      <MainImage imageSize='mobile' />
    </ImageWrapper>
    <LandingInformation>
      <LandingTextWrapper>
        <TitleText weight='semi-bold' color='primary'>
          Change the game.
        </TitleText>
        <H3 color='secondary'>
          Meet the most talented developers in your zone, network, and share cool hacks.
        </H3>
      </LandingTextWrapper>
      <LandingButtonWrapper>
        <Button color='primary'>Sign up</Button>
        <Button color='transparent'>Login</Button>
      </LandingButtonWrapper>
    </LandingInformation>
  </LandingPageWrapper>
);
