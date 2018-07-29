import styled from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: row;

  @media (max-width: ${props => props.theme.tablet}) {
    flex-direction: column;
  }
`;
