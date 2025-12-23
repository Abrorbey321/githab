import { memo } from 'react';
import Img1 from "../assets/mebel.png"
import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <div>
      <div className="hero-container">
      
      <header className="header">
        <div className="logo-section">
          <div className="logo-icon">A</div>
          <div className="logo-text">
            <strong>Аната</strong> — Кухни
          </div>
        </div>

        <nav className="nav-menu">
          <a href="#">Каталог</a>
          <a href="#">Наши работы</a>
          <a href="#">Отзывы</a>
          <a href="#">Видео</a>
          <a href="#"><span className="tg-icon">✈</span> Телеграм</a>
        </nav>

        <div className="contact-info">
          <div className="address">Москва, Дмитровское шоссе, д 62 стр 5</div>
          <div className="phone">+7 499 321-20-63</div>
          <div className="work-hours">9:00 - 20:00 ежедневно</div>
        </div>

        <div className="header-actions">
          <button className="btn-outline">Проект + Расчет</button>
          <button className="btn-outline">Вызвать замерщика</button>
        </div>
      </header>

      <main className="main-banner">
        <div className="image-side">
          <img  src={Img1} alt="Modern Kitchen" />
          <div className="arrow left-arrow">‹</div>
        </div>

        <div className="content-side">
          <div className="promo-box">
            <h1>Кухни от производителя</h1>
            <div className="discount-badge">-40%</div>
            <p>На коллекции кухонь</p>
            <button className="btn-primary">Выбрать</button>
          </div>
          <div className="arrow right-arrow">›</div>
        </div>
      </main>
    </div>
    </div>
    </div>
  );
};

export default memo(Navbar);