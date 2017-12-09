import React from 'react';
import styled from 'styled-components';
import { Media } from '../utils/StyleUtils';

const Container = (props) => (
  <ContainerWrapper className={props.className}>
    {props.children}
  </ContainerWrapper>
)

const ContainerWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;

  @media (max-width: ${Media.tablet}) {
    flex-direction: column;
  }
`;

export default Container;
