import "./Service.css";
import Img1 from "../../assets/muallif1.png";
import Img2 from "../../assets/muallif2.png";
import Img3 from "../../assets/muallif3.png";
import Img4 from "../../assets/muallif4.png";
import Img5 from "../../assets/muallif5.png";
import Img6 from "../../assets/muallif6.png";
import Img7 from "../../assets/muallif7.png";
import Imgcard from "../../assets/asosiy.png"
import { BsFillPatchCheckFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service">
        <div className="service-cards">
          <div className="service-card muallif-section">
            <div className="muallif">
              <h2 className="service-title">Kamol</h2>
              <span className="ser-muallif">Muallif haqida</span>
            </div>
            <h2 className="service-title">{`To'ymurodov`}</h2>
            <span className="service-kasb">Professional Targetolog</span>
            <div className="ser-hr">
              <span className="ser-loyiha">Loyihalar</span>
              <hr className="hrs" />
            </div>
            <div className="ustozlar">
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img1} alt="" />
                </div>
                <span className="ustoz-text">Ibrahim Gulyamov</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img2} alt="" />
                </div>
                <span className="ustoz-text">{`Axrolxo'ja Rahmatxo'jayev`}</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img3} alt="" />
                </div>
                <span className="ustoz-text">Mahsulot</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img4} alt="" />
                </div>
                <span className="ustoz-text">Elmobile</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img5} alt="" />
                </div>
                <span className="ustoz-text">Naqshi</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img6} alt="" />
                </div>
                <span className="ustoz-text">Gamepoint</span>
              </div>
              <div className="ustoz">
                <div className="ustoz-img">
                  <img src={Img7} alt="" />
                </div>
                <span className="ustoz-text">Intelect school</span>
              </div>
              <div className="ustoz">
                <span className="loyihatext">30+ loyihalar</span>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-items">
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  2 yildan ortiq tajriba
                </span>
              </div>
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  @mahsulotcom da bir oyda 1 mlrd+ savdo
                </span>
              </div>
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  $400K reklamaga sarflangan byudjet
                </span>
              </div>
              <div className="service-item">
                <BsFillPatchCheckFill className="service-icon" />
                <span className="service-item-text">
                  30 dan ortiq proyektlar
                </span>
              </div>
            </div>
            <img src={Imgcard} alt="" className="imgcard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
