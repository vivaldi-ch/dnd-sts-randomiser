import PropTypes from 'prop-types';
import React from 'react';
import times from 'lodash/times';

import Card from './card';
import FeatureCard from './cards/features';
import SpellCard from './cards/spells';

import { coinFlip } from '../utils/random';

const NormalEncounter = quantity => (
  <div className="flex flex-row flex-wrap justify-center">
    <Card type="extra-hit-die" />
    <Card type="extra-proficiency" />
    {times(quantity, () => (coinFlip() ? <FeatureCard /> : <SpellCard />))}
  </div>
);

const DeadlyEncounter = () => (
  <div className="flex flex-row flex-wrap justify-center">
    <Card type="extra-attribute2" />
    <Card type="feats" />
    <Card type="extra-proficiency-bonus" />
  </div>
);

const CardList = ({ type, quantity }) => {
  switch (type) {
    case 'normal': return NormalEncounter(quantity);
    case 'deadly': return DeadlyEncounter();
    default: return <></>;
  }
};

CardList.propTypes = {
  type: PropTypes.oneOf(['normal', 'deadly', 'merchant']),
  quantity: PropTypes.number,
};

CardList.defaultProps = {
  type: 'normal-encounter',
  quantity: 6,
};

export default CardList;
