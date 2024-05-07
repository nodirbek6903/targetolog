import "./Tarif.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import Img1 from "../../assets/toj.png";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Tarif = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTarif, setSelectedTarif] = useState(null);
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleOpenModal = (tarif) => {
    setOpenModal(true);
    setSelectedTarif(tarif);
  };
  const handleCloseModal = () => {
    setSelectedTarif(null);
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(firstName);
    console.log(phone);
    console.log("Tarif:", selectedTarif);
    setOpenModal(false);
  };

  return (
    <div className="tarif-container">
      <img src={Img1} className="position-img" alt="" />
      <div className="tarifs">
        <h1 className="tarif-title">{`Ta'riflar`}</h1>
        <div className="tarif-cards">
          <div className="tarif-card">
            <span className="tarif-card-title">Standart</span>
            <div className="tarif-items-btnlar">
              <div className="tarif-items">
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Target online
                  darsliklar
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kurator
                  yordami
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Yopiq guruhda
                  savol-javoblar
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Haftada 1
                  marta zoom uchrashuv
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kurs oxirida
                  individual masterklass
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Eng yaxshi{" "}
                  <b>7 kishiga</b> loyiha beriladi
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Eng yaxshi{" "}
                  <b>1 kishi</b> jamoaga olinadi
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> <b>BONUS</b>{" "}
                  SMM instrumentlari va Tildada sayt tayyorlash
                </span>
              </div>
              <div className="tarif-btns">
                <del className="del-text">{`2,000,000 so'm`}</del>
                <span className="btns-text1">
                  400,000 <span className="uzs">{`so'm`}</span>
                </span>
                <button
                  onClick={() => handleOpenModal("standart")}
                  className="tarif-btn btn1"
                >
                  Standart tarifini tanlash
                </button>
                <span className="btns-text2">
                  Onlayn: <b>300</b> ta joy
                </span>
              </div>
            </div>
          </div>
          <div className="tarif-card">
            <span className="tarif-card-title">
              <FaMedal /> Premium
            </span>
            <div className="tarif-items-btnlar">
              <div className="tarif-items">
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Target online
                  darsliklar
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" />{" "}
                  <b>Kamol Targetolog</b> bilan offlayn dars
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Yopiq guruhda
                  savol-javoblar
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kurator
                  yordami
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kursni
                  muvaffaqqiyatli yakunlagan barchaga loyiha beriladi
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Natijaga
                  chiqishga <b>100%</b> kafolat
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> Kurs yakunida
                  imtihon bo'ladi va eng yaxshi <b>3 kishi</b> jamoaga olinadi
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" />{" "}
                  <b>Kamol Targetologdan</b> individual yordam
                </span>
                <span className="tarif-item">
                  <BsFillPatchCheckFill className="tarif-icon" /> <b>BONUS</b>{" "}
                  SMM instrumentlari va Tildada sayt tayyorlash
                </span>
              </div>
              <div className="tarif-btns">
                <del className="del-text">{`9,000,000 so'm`}</del>
                <span className="btns-text1">
                  5,000,000 <span className="uzs">{`so'm`}</span>
                </span>
                <button
                  onClick={() => handleOpenModal("premium")}
                  className="tarif-btn"
                >
                  Premium tarifini tanlash
                </button>
                <span className="btns-text2">
                  Oflayn: <b>20</b> ta joy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="modal-container">
          <span className="modal-close" onClick={handleCloseModal}>
            &times;
          </span>
          <div className="modal">
            <h1 className="modal-title">{selectedTarif} tarifini tanlash</h1>
            <form action="" className="modal-form" onSubmit={handleSubmit}>
              <span className="form-text">
                Ma’lumotlaringizni qoldirganingizdan so’ng yopiq telegram
                kanalga a’zo bo’lasiz
              </span>
              <input
                type="text"
                className="form-input"
                placeholder="Ismingiz"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <PhoneInput
                defaultCountry="UZ"
                international
                value={phone}
                autoComplete="off"
                onChange={(phone) => setPhone(phone)}
                placeholder="99-999-9999"
              />
              <button className="form-btn">Ariza Yuborish</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tarif;
