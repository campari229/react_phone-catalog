export function sliderMove(
  direction: string,
  itemWidth: number | undefined,
  curentTranslate: number,
  maxTranslate: number,
) {
  let translate = curentTranslate;

  switch (direction) {
    case 'right':
      if (itemWidth && curentTranslate > -maxTranslate) {
        translate -= itemWidth;
      }

      break;
    case 'left':
      if (itemWidth && translate <= -itemWidth) {
        translate += itemWidth;
      }

      break;
    default:
      translate = curentTranslate;
  }

  return translate;
}
