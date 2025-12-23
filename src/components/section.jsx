import { memo } from 'react';
import './section.css'
import img1 from '../assets/image.png'
import img2 from '../assets/card.png'
import img3 from '../assets/card1.png'
const Section = () => {
  return (
    <>

<h1>  Специально для Вас видео наших кухонь</h1>
<div className="yutub">
  <img src={img1} alt="" />
  <img src={img1} alt="" />
  <img src={img1} alt="" />
</div>
<button>Смотреть больше видео</button>
<h1>Живые фотографии наших работ от реальных клиентов 🥰</h1>

<div className="card">
  <img src={img2} alt="" />
  <img src={img3} alt="" />
</div>
<div className="card">
  <img src={img2} alt="" />
  <img src={img3} alt="" />
</div>
    </>
  );
};

export default memo(Section);