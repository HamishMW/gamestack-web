import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ClassNames from '../utils/ClassNames';

const Footer = (props) => (
  <footer className={ClassNames(['Footer', props.className])}>
    <div className="Footer__row">
      <Link className="Footer__link" to="/support">Support</Link>
      <a className="Footer__link" href="mailto:contact@gamestackapp.com">Contact</a>
      <Link className="Footer__link" to="/terms">Legal</Link>
      <a className="Footer__link" href="https://twitter.com/gamestackapp">Twitter</a>
      <div className="Footer__item">{`© ${new Date().getFullYear()} Hamish Williams`}</div>
    </div>
  </footer>
)

export default Footer;
