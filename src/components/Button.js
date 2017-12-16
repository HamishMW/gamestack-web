import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import Icon from '../utils/Icon';

const Button = (props) => {
  const { disabled, onClick, text, icon, flat,
    secondary, shadow, className } = props;

  return (
    <ButtonWrapper
      disabled={disabled}
      className={className}
      onClick={onClick}
      data-gtm={props['data-gtm']}
    >
      <ButtonFill
        secondary={secondary}
        shadow={shadow}
        disabled={disabled}
        flat={flat}
      />
      <ButtonContent>
        { icon && <ButtonIcon icon={icon} color="white"/> }
        <ButtonText secondary={secondary}>{text}</ButtonText>
      </ButtonContent>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  height: 48px;
  border-radius: 6px;
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  position: relative;
  color: ${props => props.theme.colorText(1)};

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    cursor: default;
    opacity: 0.8;
  }

  &:disabled:hover {
    cursor: default;
  }
`;

const ButtonFill = styled.div`
  background: ${props => props.theme.colorPrimary(1)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 6px;
  transition: all 0.3s ${props => props.theme.curveFastoutSlowin};

  ${ButtonWrapper}:hover &,
  ${ButtonWrapper}:focus &,
  ${ButtonWrapper}:active & {
    background: ${props => Color(props.theme.colorPrimary(1)).darken(0.1).string()};
    transform: scale3d(1.05, 1.05, 1);

    ${props => props.flat &&`
      background: ${props.theme.colorText(0.1)};
    `}

    ${props => props.secondary &&`
      background: ${props.theme.colorWhite(0.8)};;
      outline: none;
    `}
  }

  ${props => props.flat &&`
    background: transparent;
  `}

  ${props => props.secondary &&`
    background: ${props.theme.colorWhite(1)};
  `}

  ${props => props.shadow &&`
    box-shadow:
      0 4px 16px 0 rgba(0, 0, 0, 0.15),
      0 12px 36px 0 rgba(0, 0, 0, 0.2);
  `}

  ${ButtonWrapper}:disabled:hover & {
    background: inherit;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
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

  ${props => props.secondary &&`
    color: ${props.theme.colorPrimary(1)};
  `}
`;

export default Button;
