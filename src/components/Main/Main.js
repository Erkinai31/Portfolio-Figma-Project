import "./Main.css";
import img from "./Image/BSPP2266.png";
import SkillList from "./SkillList/SkillList";
import Footer from "../Footer/Footer";
import newImg from "./Image/newImg.png"

function Main() {
  return (
    <div className="main">
      <div className="main_wrapper">
        <hr className="line" />
        <div className="first_part">
          <div className="name">Inants Hayk</div>
          <div className="profession">web developer 28 years old, Yerevan</div>
          <div className="language">
            <span className="language_color">RU</span> | ENG
          </div>
        </div>
        <img src={img} className="img" />
        <img src={newImg} className="new_img" />
      </div>
      <div className="second_part">
        <h2>About me</h2>
        <p>
          Hi, I'm Hayk - web developer from Yerevan.
          <br />
          I'm interested in development and everything connected with it.
        </p>
        <br />
        <br />
        <p>
          Ready to implement excellent projects
          <br />
          with wonderful people.
        </p>
      </div>
      <div className="third_pard">
        <div className="third_head">
            <h2>Skills</h2>
            <p>I work in such technologies as</p>
        </div>
        <SkillList />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Main;
