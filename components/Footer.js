import Image from 'next/image';
import logo from '../assets/logo.svg';

const Footer = () => {

  return (
    <footer className="footer">
        <div className="contain">
            {/* <img src={logo} alt="react logo"/> */}
            <Image src='/assets/logo.svg' height={300} width={30}/>
        <ul className="container-flex">
        {/* <img src={facebook}/> */}
          <li><img src="../public/icon-twitter.svg"/></li>
          <li><img src="../public/icon-pinterest.svg"/></li>
          <li><img src="../public/icon-instagram.svg"/></li>
        </ul>
      </div>

      <div className="container">
      <h4>Features</h4>
        <ul className="containers">
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>

      <div className="container">
        <h4>Resources</h4>
        <ul className="containers">
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="container">
        <h4>Company</h4>
        <ul className="containers">
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
