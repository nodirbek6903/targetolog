import "./Main.css";
import Odam from "../../../assets//main.png";
import Bg from "../../../assets/bg.png";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { PiCalendarCheckDuotone } from "react-icons/pi";
const Main = () => {
  return (
    <div className="main-container">
      <div className="mains">
        <img src={Bg} className="main-bg-image" alt="" />
        <div className="main-card1">
          <div className="card1-cards">
            <div className="card1-card">
              <HiOutlineSpeakerphone className="main-icons" />
              <span className="card1-text">
                Individual <b>Target online</b> kursi
              </span>
            </div>
            <div className="card1-card">
              <PiCalendarCheckDuotone className="main-icons" />
              <span className="card1-text">
                Kurs boshlanishi sanasi <b>15-mart</b>
              </span>
            </div>
          </div>
          <div className="card2-cards">
            <div className="card2-card">
              <h1 className="text-pro">
                Targeting <span className="text-underline">0 dan pro</span>{" "}
                darajagacha
              </h1>
              <span className="card2-text1">Onlayn + Individual kurs</span>
              <del className="del-text1">{`2,000,000 so'm`}</del>
              <span className="card2-text2">{`400,000 so'm`}</span>
            </div>
          </div>
          <div className="card3-cards main-btns">
            <a href="#kurstarif" className="main-btn">
              {`Ro'yhatdan o'tish`}
            </a>
            <span className="main-btn-text">
              {`Ma’lumotlaringizni qoldirganingizdan so’ng mutaxasisslarimiz siz
              bilan bog'lanishadi`}
            </span>
          </div>
        </div>
        <div className="main-card2">
          <img src={Odam} className="odam-img" alt="" />
          <div className="main-card2-texts">
            <span className="imgcard-text1">{`Kamol To'ymurodov`}</span>
            <span className="imgcard-text2">Professional Targetolog</span>
            <div className="card3-cards main-btns2">
            <a href="#kurstarif" className="main-btn">
              {`Ro'yhatdan o'tish`}
            </a>
            <span className="main-btn-text">
              {`Ma’lumotlaringizni qoldirganingizdan so’ng mutaxasisslarimiz siz
              bilan bog'lanishadi`}
            </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
