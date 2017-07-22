import React from 'react';
import './Support.css';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Icon from '../utils/Icon';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Support = () => (
  <div className="Support">
    <Helmet>
      <title>Support</title>
      <meta name="description" content='Contact Gamestack support if you‘re having problems'/>
    </Helmet>

    <div className="Container">
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
