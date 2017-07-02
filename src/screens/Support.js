import React from 'react';
import './Support.css';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Icon from '../utils/Icon';
import { Link } from 'react-router-dom';

const Support = () => (
  <div className="Support">
    <div className="Container">
      <div className="backgroundHeader"/>
      <div className="Support__text-section">
        <h2 className="Support__text-section-title">Gamestack Support</h2>
        <p className="Support__text-section-description">Reach out to us if you have feedback or want to report a technical problem.</p>
        <Button text="Contact Support" style={{marginTop: 20}} shadow onClick={() => window.location='mailto:contact@gamestackapp.com?subject=Gamestack Support Request'} />
      </div>
    </div>
    <Footer />
  </div>
)

export default Support;
