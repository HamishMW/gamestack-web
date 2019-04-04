import React from 'react';
import styled, { css, keyframes } from 'styled-components/macro';
import Logo from './Logo';
import Theme from '../utils/Theme';

const Loader = () => (
  <LoaderElem color={Theme.colorBlue(1)} />
);

const AnimLoader = props => keyframes`
  0% {
    fill: ${props.theme.colorBlack(0.4)};
  }
  100% {
    fill: ${props.theme.colorBlue(1)};
  }
`;

const LoaderElem = styled(Logo)`
  fill: ${props => props.theme.colorBlack(0.4)};
  animation: ${css`${AnimLoader}`} 1.4s ${props => props.theme.curveFastoutSlowin} 0.5s infinite alternate;
`;

export default Loader;
