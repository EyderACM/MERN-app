import React from 'react';
import { MainImage } from '../../components/MainImage/MainImage';
import { ImageWrapper } from './components/ImageWrapper';
import { H1 } from '../../components/ui/H1/H1';
import { H3 } from '../../components/ui/H3/H3';
import { LandingTextWrapper } from './components/LandingTextWrapper';

export const LandingPage: React.FC = () => (
  <React.Fragment>
    <ImageWrapper>
      <MainImage imageSize='mobile' />
    </ImageWrapper>
    <LandingTextWrapper>
      <H1 weight='semi-bold'> Change the game. </H1>
      <H3 color='secondary'>
        Meet the most talented developers in your zone, network, and share cool
        hacks.
      </H3>
    </LandingTextWrapper>
  </React.Fragment>
);
