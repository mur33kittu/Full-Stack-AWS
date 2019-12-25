import React from 'react';
import './footer.scss';
import facebook from '../../../../public/assets/png/facebook.png';
import twitter from '../../../../public/assets/png/twitter.png';
import instagram from '../../../../public/assets/png/instagram.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>Follow us on </div>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="faceboinstagramok" />
      </div>
    </footer>
  );
}

export default Footer;
