import "./Main.css";
import Img1 from "../../../assets/soat.png";
import Img2 from "../../../assets/toj.png";
import Img3 from "../../../assets/karnay.png";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { PiCalendarCheckDuotone } from "react-icons/pi";
const Main = () => {
  return (
    <div className="main-container">
      <div className="mains">
        <img src={Img1} className="main-soat" alt="" />
        <img src={Img3} className="main-karnay" alt="" />
        <div className="card1">
          <h1 className="main-title">Target</h1>
          <span className="main-text1">
            <b className="main-bold">Targeting</b> - Ijitimoiy tarmoqlar,
            xususan,{" "}
            <b className="main-bold">Instagram va Facebook’da reklamani</b>{" "}
            ishga tushirish va <b className="main-bold">biznesga</b> mijozlar
            oqimini yaratish bo’yicha{" "}
            <b className="main-bold">
              0 dan mutaxassis darajasigacha o’rgatiladigan kurs
            </b>
          </span>
        </div>
        <div className="card2">
          <div className="card-titles">
            <h1 className="main-title2">
              0 dan <b className="pro">Pro</b> <br /> darajagacha
            </h1>
            <img src={Img2} alt="" className="main-toj" />
          </div>
          <div className="kardlar">
            <div className="kard">
              <span className="kard-text">
                Individual <b className="kard-bold">Target online</b> kursi
              </span>
              <HiOutlineSpeakerphone className="kard-icon" />
            </div>
            <div className="kard">
              <span className="kard-text">
                Kurs boshlanishi sanasi <b className="kard-bold">15-mart</b>
              </span>
              <PiCalendarCheckDuotone className="kard-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="registr">
        <div className="reg-texts">
            <h1 className="reg-name">{`Kamol To'ymurodov`}</h1>
            <span className="kasb">PROFESSIONAL TARGETOLOG</span>
        </div>
        <div className="reg-btns">
            <a href="#kurstarif" className="reg-btn">INDIVIDUALGA RO’YHATDAN O’TISH</a>
            <span className="btn-text">{`Ma’lumotlaringizni qoldirganingizdan so’ng mutaxasisslarimiz siz bilan bog'lanishadi`}</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
