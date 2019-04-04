import React from 'react';
import styled from 'styled-components/macro';

const Input = ({ value, label, className, ...props }) => {
  const hasValue = value.length > 0;

  return (
    <InputWrapper className={className}>
      <InputElement
        value={value}
        {...props}
      />
      <InputLabel hasValue={hasValue}>
        {label}
      </InputLabel>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
`;

const InputElement = styled.input`
  background: white;
  border-radius: 6px;
  padding: 0;
  border: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  padding-left: 16px;
  padding-top: 16px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px ${props => props.theme.colorBlue()};
  }
`;

const InputLabel = styled.label`
  position: absolute;
  pointer-events: none;
  color: ${props => props.theme.colorBlack(0.5)};
  margin-left: 16px;
  font-weight: 600;
  font-size: 18px;
  transform-origin: left top 0px;
  transition: all 0.4s ${props => props.theme.curveFastoutSlowin};

  ${/* sc-selector */InputElement}:focus + & {
    transform: translate3d(0, -7px, 0) scale(0.7);
  }

  ${props => props.hasValue && `
    transform: translate3d(0, -7px, 0) scale(0.7);
  `}
`;

export default Input;
