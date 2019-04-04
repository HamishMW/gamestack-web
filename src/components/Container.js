import styled from 'styled-components/macro';

export default styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${props => props.theme.tablet}) {
    flex-direction: column;
  }
`;
