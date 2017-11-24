import React from 'react';
import Icon from '../utils/Icon';
import ClassNames from '../utils/ClassNames';
import './Button.css';

const Button = (props) => {
  const { disabled, style, onClick, text, icon, flat, secondary, shadow, className } = props;
  const flatCn = flat && 'Button--flat';
  const secondaryCn = secondary && 'Button--secondary';
  const shadowCn = shadow && 'Button--shadow';
  const classList = ClassNames(['Button', flatCn, secondaryCn, shadowCn, className]);

  return (
    <button className={classList} disabled={disabled} style={style} onClick={onClick}>
      <div className="Button__content">
        { icon && <Icon className="Button__icon" icon={icon} color="white"/> }
        <div className="Button__text">{text}</div>
      </div>
    </button>
  );
}

export default Button;
