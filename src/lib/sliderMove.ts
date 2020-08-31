export function sliderMove(
  direction: string,
  itemWidth: number | undefined,
  curentTranslate: number,
  numberOfSlides: number,
) {
  let translate = curentTranslate;

  switch (direction) {
    case 'right':
      if (itemWidth && translate > -(itemWidth * (numberOfSlides - 1))) {
        translate -= itemWidth;
      }

      break;
    case 'left':
      if (itemWidth && translate < 0) {
        translate += itemWidth;
      }

      break;
    default:
      translate = curentTranslate;
  }

  return translate;
}
