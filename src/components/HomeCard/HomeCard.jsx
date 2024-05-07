import { useState } from "react"
import "./HomeCard.css"
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import PhoneImg from "../../assets/phone.png"
import BookImg from "../../assets/book.png"
import Bg from "../../assets/blur_2-min.png"
const HomeCard = () => {
    const [firstName,setFirstName] = useState("")
    const [phone,setPhone] = useState("")
  return (
    <div className="homecard-container">
        <div className="homecard">
        <img src={BookImg} className="homecard-book" alt="" />
        <img src={PhoneImg} className="homecard-phone" alt="" />
        <img src={Bg} className="homecard-bg" alt="" />
            <h1 className="homecard-title">Savollaringiz bormi</h1>
            <span className="homecard-text">Ma’lumotlaringiz qoldiring, tez orada siz bilan bog’lanamiz</span>
            <form action="" className="homecard-form">
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
              <button className="homecard-btn">Yuborish</button>
            </form>
        </div>
    </div>
  )
}

export default HomeCard