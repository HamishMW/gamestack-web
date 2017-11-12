import React from 'react';
import Icon from '../utils/Icon';
import './Button.css';

const Button = (props) => {
  const { disabled, style, onClick, text, icon, flat, secondary, shadow, className } = props;
  const flatCn = flat ? 'Button--flat' : '';
  const secondaryCn = secondary ? 'Button--secondary' : '';
  const shadowCn = shadow ? 'Button--shadow' : '';

  return (
    <button className={`Button ${flatCn} ${secondaryCn} ${shadowCn} ${className}`} disabled={disabled} style={style} onClick={onClick}>
      <div className="Button__content">
        { icon && <Icon className="Button__icon" icon={icon} color="white"/> }
        <div className="Button__text">{text}</div>
      </div>
    </button>
  );
}

export default Button;
