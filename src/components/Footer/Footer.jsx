import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footers">
        <span className="footer-text">
          &copy; {new Date().getFullYear()} All rights reserved Limsa
        </span>
      </div>
    </div>
  );
};

export default Footer;
