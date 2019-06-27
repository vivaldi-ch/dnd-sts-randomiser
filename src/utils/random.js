/* eslint-disable no-unused-vars */

import times from 'lodash/times';

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

export const randomGoldLoot = () => getRandomIntInclusive(100, 300);

export const percentileDie = () => getRandomIntInclusive(1, 100);

export const randomEntriesFromArray = (arrLength, noOfEntries = 1) => {
  const indexArray = times(arrLength, Number);

  for (let i = arrLength - 1; i > 1; i -= 1) {
    const r = Math.floor(Math.random() * i);
    const t = indexArray[i];
    indexArray[i] = indexArray[r];
    indexArray[r] = t;
  }

  return indexArray.slice(0, noOfEntries);
};
