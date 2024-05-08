import { useState } from "react";
import "./HomeCard.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import PhoneImg from "../../assets/phone.png";
import BookImg from "../../assets/book.png";
import Bg from "../../assets/blur_2-min.png";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HomeCard = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTarif, setSelectedTarif] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  const sendTelegramBot = async () => {
    const tg_bot_id = "6419502770:AAFqnnlYZUoPB_uzBfy8rk4-MjUqMgU5dQQ";
    const chat_id = 5716140595;
    const message = `FirstName: ${firstName} \n Phone number: ${phone} \n Tarif: ${selectedTarif}`;

    const formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append("text", message);
    if (selectedImage) {
      formData.append("photo", selectedImage);
      formData.append("caption", message);
    }
    try {
      await fetch(`https://api.telegram.org/bot${tg_bot_id}/sendPhoto`, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      sendTelegramBot();
      console.log("Ishladi");
      setFirstName("");
      setPhone("");
      setSelectedTarif("");
      setSelectedImage(null);
      
      window.location.href = "https://t.me/+998903646903"

      //modal close
      setOpenModal(false);
      
      toast.success(
        "Malumotlaringiz muvaffaqqiyatli yuborildi!.Tez orada o'zimiz sizga aloqaga chiqamiz!"
      );
    } else {
      toast.error("Skrenshotni yuklang!");
      return false;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("9860350106438590");
    setIsCopySuccess(true);
    setTimeout(() => setIsCopySuccess(false), 2000);
  };

  return (
    <div className="homecard-container">
      <div className="homecard">
        <img src={BookImg} className="homecard-book" alt="" />
        <img src={PhoneImg} className="homecard-phone" alt="" />
        <img src={Bg} className="homecard-bg" alt="" />
        <h1 className="homecard-title">Savollaringiz bormi</h1>
        <span className="homecard-text">
          Ma’lumotlaringiz qoldiring, tez orada siz bilan bog’lanamiz
        </span>
        <form action="" className="homecard-form">
          {!openModal ? (
            <>
              <label htmlFor="firstname" className="labels">
                Firstname
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Ismingiz"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label htmlFor="phonenumber" className="labels">
                Telefon Nomer
              </label>
              <PhoneInput
                defaultCountry="UZ"
                international
                value={phone}
                autoComplete="off"
                onChange={(phone) => setPhone(phone)}
                placeholder="99-999-9999"
                required
              />
              <label htmlFor="tarif" className="labels">
                Tarifni tanlang
              </label>
              <select
                name="tariflar"
                value={selectedTarif}
                onChange={(e) => setSelectedTarif(e.target.value)}
                className="tarif-select"
                id="tariflar"
                required="true"
              >
                <option value="---">---</option>
                <option value="standart" defaultValue="standart">
                  Standart
                </option>
                <option value="premium">Premium</option>
              </select>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (firstName && phone && selectedTarif) {
                    setOpenModal(true);
                  } else {
                    toast.error("Barcha maydonlarni to'ldiring");
                  }
                }}
                className="homecard-btn"
              >
                Yuborish
              </button>
            </>
          ) : (
            <>
              <label htmlFor="cardnumber" className="labels">
                Karta Raqam
              </label>
              <span className="plastik-raqam" onClick={handleCopy}>
                9860350106438590
                {isCopySuccess ? (
                  <span className="plastik-nusxa">Nusxalandi</span>
                ) : (
                  <FaRegCopy className="plastik-icon" />
                )}
              </span>
              <span className="plastik-ism">Umarov Nodirjon</span>
              <div className="raqam-label">
                <label htmlFor="">
                  Pul otkazilganligi skrenshotini joylang
                </label>
                <input
                  type="file"
                  className="form-input"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="yuborish homecard-btn"
              >
                Jonatish
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default HomeCard;
