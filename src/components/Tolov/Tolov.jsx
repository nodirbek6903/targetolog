import "./Tolov.css"
const Tolov = () => {
  return (
    <div className="tolov-container">
      <div className="tolov-cards">
        <div className="tolov-kartalar-card">
          <div className="kartalar">
            <span className="karta-raqam">9860 1766 0699 4307</span>
            <span className="kartaraqam-ism">{`Kamol To'ymurodov`}</span>
          </div>
          <div className="kartalar">
            <span className="karta-raqam">8600 1404 3617 7522</span>
            <span className="kartaraqam-ism">{`Kamol To'ymurodov`}</span>
          </div>
        </div>
        <div className="admin-kartalar">
          <div className="admin-texts">
            <span className="admin-text">{`Shu kartalardan biriga to'lov qilib bo'lgan bo'lsangiz Adminga yozishingiz mumkin`}</span>
          </div>
          <div className="amdin-btns">
            <a href="https://t.me/izzatbek_Digital" className="admin-btn">Adminga Yozish</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tolov