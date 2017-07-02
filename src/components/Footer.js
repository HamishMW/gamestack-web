import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__row">
      <Link className="Footer__link" to="/support">Support</Link>
      <a className="Footer__link" href="mailto:contact@gamestackapp.com">Contact</a>
      <Link className="Footer__link" to="/terms">Terms of Service</Link>
      <Link className="Footer__link" to="/privacy">Privacy</Link>
      <a className="Footer__link" href="https://twitter.com/gamestackapp">Twitter</a>
    </div>
    <div className="Footer__row">
      <div className="Footer__item">{`© ${new Date().getFullYear()} Hamish Williams`}</div>
    </div>
  </footer>
)

export default Footer;
