// Footer.jsx
import "./Footer.css";

function Footer({footerTitle, footerEmail, footerNumber, footerAddress, footerButtonOne, footerButtonTwo, footerButtonThree, footerButtonFour}) {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>{footerTitle}</h3>
        <p>{footerEmail}</p>
        <p>{footerNumber}</p>
        <p>{footerAddress}</p>
      </div>

      <div className="footer-buttons">
        <button>{footerButtonOne}</button>
        <button>{footerButtonTwo}</button>
        <button>{footerButtonThree}</button>
        <button>{footerButtonFour}</button>
      </div>
    </footer>
  );
}

export default Footer;
