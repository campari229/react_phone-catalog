import React, { useState } from 'react';

import './Slider.scss';

const arr = [1, 2, 3];

export const Slider: React.FC = () => {
  const [tr, setTr] = useState(0);

  const l = () => {
    const slider = document.getElementById('slider');
    const width = slider?.offsetWidth;

    if (width && tr < 0) {
      setTr(tr + width);
    }
  };

  const r = () => {
    const slider = document.getElementById('slider');
    const width = slider?.offsetWidth;

    if (width && -tr < width * (arr.length - 1)) {
      setTr(tr - width);
    }
  };

  return (
    <div className="slider">
      <button className="slider__btn" type="button" onClick={l}>{'<'}</button>
      <ul id="slider" className="slider__images">
        {arr.map(item => (
          <li className="slider__item" style={{ transform: `translateX(${tr}px)` }}>
            <img
              alt=""
              src={`img/slider-img/slide${item}.png`}
              className="slider__image"
            />
          </li>
        ))}
      </ul>
      <button className="slider__btn" type="button" onClick={r}>{'>'}</button>
    </div>
  );
};
