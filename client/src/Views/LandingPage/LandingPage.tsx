import React from 'react';
import { MainImage } from '../../components/MainImage/MainImage';
import { ImageWrapper } from './components/ImageWrapper';

export const LandingPage: React.FC = () => (
  <React.Fragment>
    <ImageWrapper>
      <MainImage imageSize='mobile' />
    </ImageWrapper>
  </React.Fragment>
);
