import {
  FaPinterestSquare,
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
} from 'react-icons/fa'
import myFooterImage from '../Backgroundpics/Vectorfooter.png'

import './index.css'

const Footer = () => (
  <div className="Footer-container">
    <div className="footer-logo">
      <img src={myFooterImage} alt="website-footer-logo" />
      <h1>Tasty Kitchens</h1>
    </div>
    <p>The only thing we are serious about is food. Contact us on</p>
    <div className="social-icons">
      <FaPinterestSquare testid="pintrest-social-icon" />
      <FaInstagram testid="instagram-social-icon" />
      <FaTwitter testid="twitter-social-icon" />
      <FaFacebookSquare testid="facebook-social-icon" />
    </div>
  </div>
)
export default Footer
