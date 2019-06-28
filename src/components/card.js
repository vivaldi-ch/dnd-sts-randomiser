import PropTypes from 'prop-types';
import React from 'react';
import { randomHitDie } from '../utils/random';

const getContentFromType = (type) => {
  switch (type) {
    case 'extra-hit-die':
      return {
        title: 'Extra Hit Die',
        desc: `Add a d${randomHitDie()} to your hit die.`,
      };
    case 'extra-attribute1':
      return {
        title: '+1 Attribute Score',
        desc: 'Add 1 to a chosen attribute score.',
      };
    case 'extra-attribute2':
      return {
        title: '+2 Attribute Score',
        desc: 'Add 2 to a chosen attribute score.',
      };
    case 'extra-proficiency':
      return {
        title: 'Extra Proficiency',
        desc: `
          Gain a proficiency in any skill or language.
          If you are already proficient with that skill, you gain double proficiency instead.
        `,
      };
    case 'extra-proficiency-bonus':
      return {
        title: 'Extra Proficiency Bonus',
        desc: 'Add 1 to your proficiency bonus.',
      };
    case 'feats':
      return {
        title: 'Feats',
        desc: 'Gain 1 feat.',
      };
    case 'consumables':
      return {
        title: 'Consumables',
        desc: 'Placeholder description.',
      };
    case 'gold':
      return {
        title: 'Gold',
        desc: 'Placeholder description.',
      };
    default:
      return {
        title: 'Nothing',
        desc: 'Really. Nothing.',
      };
  }
};

const Card = ({ type }) => {
  const { title, desc } = getContentFromType(type);
  return (
    <div className="card disable-scrollbars">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-800 text-base">{desc}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf([
    'extra-hit-die',
    'extra-attribute1',
    'extra-attribute2',
    'extra-proficiency',
    'extra-proficiency-bonus',
    'features',
    'spells',
    'feats',
    'consumables',
    'magic-equipment',
    'gold',
  ]),
};

Card.defaultProps = {
  type: '',
};

export default Card;
