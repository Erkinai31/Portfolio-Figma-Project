import "./Footer.css";
import icon1 from "./Icons/Group2.svg";
import icon2 from "./Icons/Group8.svg";
import icon3 from "./Icons/behance.svg";
import icon4 from "./Icons/Group10.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="last_part">
          <h2>Contacts</h2>
          <p>
            Want to know more or just chat?
            <br /> You are welcome!
          </p>
          <button>Send message</button>
        </div>
        <div className="icons">
          <div>
            <img src={icon1} />
          </div>
          <div>
            <img src={icon2} />
          </div>
          <div>
            <img src={icon3} />
          </div>
          <div>
            <img src={icon4} />
          </div>
        </div>
        <div className="footer_text">
          <p>
            Like me on <br />
            LinkedIn, Instagram, Behance, Dribble
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
