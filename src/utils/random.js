/* eslint-disable no-unused-vars */
function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin)) + intMin;
}

function getRandomIntInclusive(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin;
}

export const coinFlip = () => getRandomIntInclusive(0, 1) === 1;

export const randomHitDie = () => 2 * getRandomIntInclusive(3, 6);

export const randomGoldLoot = () => {};
