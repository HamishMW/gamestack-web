import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Color from 'color';
import Icon from '../utils/Icon';

const ButtonInner = ({ text, icon, flat, secondary, shadow, size, ...props }) => (
  <React.Fragment>
    <ButtonFill
      secondary={secondary}
      size={size}
      shadow={shadow}
      flat={flat}
      {...props}
    />
    <ButtonContent size={size}>
      {icon && <ButtonIcon icon={icon} color="white" />}
      <ButtonText secondary={secondary} size={size}>{text}</ButtonText>
    </ButtonContent>
  </React.Fragment>
);

const Button = ({ disabled, onClick, className, flat, secondary, size, ...props }) => (
  <ButtonWrapper
    disabled={disabled}
    flat={flat}
    size={size}
    secondary={secondary}
    className={className}
    onClick={onClick}
    data-gtm={props['data-gtm']}
  >
    <ButtonInner secondary={secondary} size={size} {...props} />
  </ButtonWrapper>
);

const AnchorButton = ({ disabled, href, className, style, target, flat, secondary, rel, size, ...props }) => (
  <AnchorButtonWrapper
    disabled={disabled}
    flat={flat}
    size={size}
    secondary={secondary}
    className={className}
    style={style}
    href={href}
    target={target}
    data-gtm={props['data-gtm']}
    rel={rel}
  >
    <ButtonInner secondary={secondary} size={size} {...props} />
  </AnchorButtonWrapper>
);

const LinkButton = ({ disabled, to, className, flat, secondary, size, ...props }) => (
  <ButtonWrapper
    disabled={disabled}
    flat={flat}
    size={size}
    secondary={secondary}
    className={className}
    data-gtm={props['data-gtm']}
  >
    <ButtonLink to={to}>
      <ButtonInner secondary={secondary} size={size} {...props} />
    </ButtonLink>
  </ButtonWrapper>
);

const ButtonFill = styled.div`
  background: ${props => props.theme.colorBlueDark()};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 6px;
  transition: all 0.3s ${props => props.theme.curveFastoutSlowin};

  ${props => props.flat && `
    background: transparent;
  `}

  ${props => props.secondary && `
    background: ${props.theme.colorWhite(1)};
  `}

  ${props => props.shadow && `
    box-shadow:
      0 4px 16px 0 rgba(0, 0, 0, 0.15),
      0 12px 36px 0 rgba(0, 0, 0, 0.2);
  `}
`;

const ButtonWrapper = styled.button`
  height: 56px;
  border-radius: 6px;
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  position: relative;
  color: ${props => props.theme.colorText(1)};
  text-decoration: none;

  &:hover ${ButtonFill},
  &:focus ${ButtonFill} {
    background: ${props => Color(props.theme.colorBlueDark()).darken(0.1).string()};
    transform: scale3d(1.05, 1.05, 1);

    ${props => props.flat && `
      background: ${props.theme.colorText(0.1)};
    `}

    ${props => props.secondary && `
      background: ${props.theme.colorWhite(0.8)};
      outline: none;
    `}
  }

  &:active ${ButtonFill} {
    transform: scale3d(1, 1, 1);
  }

  &:disabled:hover ${ButtonFill} {
    background: inherit;
  }

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

  ${props => props.size === 'small' && `
    height: 40px;
  `}
`;

const AnchorButtonWrapper = ButtonWrapper.withComponent('a');

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  position: relative;
  height: 100%;

  ${props => props.size === 'small' && `
    padding: 0 16px;
  `}
`;

const ButtonIcon = styled(Icon)`
  margin-right: 12px;
  margin-left: -8px;
`;

const ButtonText = styled.div`
  font-size: 18px;
  position: relative;
  font-weight: 600;
  line-height: 1;

  ${props => props.secondary && `
    color: ${props.theme.colorBlueDark()};
  `}

  ${props => props.size === 'small' && `
    font-size: 16px;
  `}
`;

export { Button, LinkButton, AnchorButton };
