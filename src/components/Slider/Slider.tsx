import React, { useState } from 'react';
import { sliderMove } from '../../lib/sliderMove';

import './Slider.scss';

export const Slider: React.FC = () => {
  const [translate, setTranslate] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const move = (direction: string) => {
    const slider = document.getElementById('slider');
    const width = slider?.offsetWidth;

    if (width) {
      const maxTranslate = width * 2;

      setTranslate(sliderMove(direction, width, translate, maxTranslate));
    }

    if (direction === 'left' && activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }

    if (direction === 'right' && activeSlide < 2) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleSliderMove = (id: number) => {
    const slider = document.getElementById('slider');
    const width = slider?.offsetWidth;

    if (width) {
      setTranslate(-(width * (id)));
      setActiveSlide(id);
    }
  };

  return (
    <>
      <div className="slider">
        <div className="slider__wrapper">
          <button
            className="slider__btn"
            type="button"
            onClick={() => move('left')}
            disabled={activeSlide === 0}
          >
            {'<'}
          </button>
          <ul id="slider" className="slider__images">
            <li
              className="slider__item"
              style={{ transform: `translateX(${translate}px)` }}
            >
              <img
                alt=""
                src="img/slider-img/slide1.png"
                className="slider__image"
              />
            </li>
            <li
              className="slider__item"
              style={{ transform: `translateX(${translate}px)` }}
            >
              <img
                alt=""
                src="img/slider-img/slide2.png"
                className="slider__image"
              />
            </li>
            <li
              className="slider__item"
              style={{ transform: `translateX(${translate}px)` }}
            >
              <img
                alt=""
                src="img/slider-img/slide3.png"
                className="slider__image"
              />
            </li>
          </ul>
          <button
            className="slider__btn"
            type="button"
            onClick={() => move('right')}
            disabled={activeSlide === 2}
          >
            {'>'}
          </button>
        </div>
        <div className="slider__buttons">
          <button
            aria-label="slider-button"
            type="button"
            className={activeSlide === 0
              ? 'slider__button  slider__button--active'
              : 'slider__button'}
            onClick={() => handleSliderMove(0)}
          />
          <button
            aria-label="slider-button"
            type="button"
            className={activeSlide === 1
              ? 'slider__button  slider__button--active'
              : 'slider__button'}
            onClick={() => handleSliderMove(1)}
          />
          <button
            aria-label="slider-button"
            type="button"
            className={activeSlide === 2
              ? 'slider__button  slider__button--active'
              : 'slider__button'}
            onClick={() => handleSliderMove(2)}
          />
        </div>
      </div>
    </>
  );
};
