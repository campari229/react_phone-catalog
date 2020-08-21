import React, { useState } from 'react';

import './Slider.scss';

const arr = [1, 2, 3];

export const Slider: React.FC = () => {
  const [tr, setTr] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);

  const l = () => {
    const slider = document.getElementById('slider');
    const width = slider?.offsetWidth;

    if (width && tr < 0) {
      setTr(tr + width);
      setActiveSlide(activeSlide - 1);
    }
  };

  const r = () => {
    const slider = document.getElementById('slider');
    const width = slider?.offsetWidth;

    if (width && -tr < width * (arr.length - 1)) {
      setTr(tr - width);
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleSliderMove = (id: number) => {
    const slider = document.getElementById('slider');
    const width = slider?.offsetWidth;

    if (width) {
      setTr(-(width * (id - 1)));
      setActiveSlide(id);
    }
  };

  return (
    <>
      <div className="slider">
        <div className="slider__wrapper">
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
        <div className="slider__buttons">
          {arr.map(item => (
            <button
              aria-label="slider-button"
              type="button"
              className={activeSlide === item ? 'slider__button  slider__button--active' : 'slider__button'}
              id={`${item}`}
              onClick={() => handleSliderMove(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
