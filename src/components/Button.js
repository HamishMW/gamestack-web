import React from 'react';
import styled from 'styled-components';
import Icon from '../utils/Icon';

const Button = (props) => {
  const { disabled, onClick, text, icon, flat,
    secondary, shadow, className } = props;

  return (
    <ButtonWrapper
      flat={flat}
      secondary={secondary}
      shadow={shadow}
      className={className}
      disabled={disabled}
      onClick={onClick}
      data-gtm={props['data-gtm']}
    >
      <ButtonContent>
        { icon && <ButtonIcon icon={icon} color="white"/> }
        <ButtonText>{text}</ButtonText>
      </ButtonContent>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  height: 48px;
  background: ${props => props.theme.colorPrimary(1)};
  border-radius: 6px;
  border: 0;
  transition: background-color 0.3s ease;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  color: ${props => props.theme.colorText(1)};

  &:hover,
  &:focus,
  &:active {
    background: #2B6FE2;
    outline: none;
  }

  ${props => props.flat &&`
    background: transparent;

    &:hover,
    &:focus,
    &:active {
      background: ${props.theme.colorText(0.1)};
      outline: none;
    }
  `}

  ${props => props.secondary &&`
    background: ${props.theme.colorWhite(1)};
    color: ${props.theme.colorPrimary(1)};

    &:hover,
    &:focus,
    &:active {
      background: ${props.theme.colorWhite(0.8)};;
      outline: none;
    }
  `}

  ${props => props.shadow &&`
    box-shadow:
      0 4px 16px 0 rgba(0, 0, 0, 0.15),
      0 12px 36px 0 rgba(0, 0, 0, 0.2);
  `}

  &:disabled {
    cursor: default;
    opacity: 0.8;
  }

  &:disabled:hover {
    cursor: default;
    background: inherit;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const ButtonIcon = styled(Icon)`
  margin-right: 6px;
  margin-left: -8px;
`;

const ButtonText = styled.div`
  font-size: 14px;
  position: relative;
  font-weight: 600;
  line-height: 1;
`;

export default Button;
