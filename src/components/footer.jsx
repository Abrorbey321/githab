import { memo } from 'react';
import "./footer.css"
const Footer = () => {
  return (
 
    <div>
        <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Стиль</h4>
          <ul>
            <li>Классика</li>
            <li>Неоклассика</li>
            <li>Прованс</li>
            <li>Современный</li>
            <li>Лофт</li>
            <li>Барокко</li>
            <li>Минимализм</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Фасад</h4>
          <ul>
            <li>МДФ</li>
            <li>Эмаль</li>
            <li>Пластик</li>
            <li>Массив дерева</li>
            <li>Акрил</li>
            <li>ЛДСП</li>
            <li>Дуб</li>
            <li>Шпон</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Цвет</h4>
          <ul className="colors">
            <li><span className="dot white"></span> Белые</li>
            <li><span className="dot gray"></span> Серые</li>
            <li><span className="dot black"></span> Черные</li>
            <li><span className="dot gray"></span>Мятный </li>
            <li><span className="dot white"></span>Коричневые </li>
            <li><span className="dot gray"></span>Капучино </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Размер</h4>
          <ul>
            <li>Кухни 4 метра</li>
            <li>Кухни 6 метра</li>
            <li>Кухни 8 метра</li>
            <li>Кухни 10 метра</li>
            <li>Кухни 12 метра</li>
            <li>Кухни 14 метра</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 Аната-Кухни</p>
      </div>
    </footer>
    </div>
  
  );
};

export default memo(Footer);