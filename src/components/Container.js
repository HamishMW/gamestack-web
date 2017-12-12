import styled from 'styled-components';
import { Media } from '../utils/StyleUtils';

export default styled.main`
  display: flex;
  flex-direction: row;

  @media (max-width: ${Media.tablet}) {
    flex-direction: column;
  }
`;
