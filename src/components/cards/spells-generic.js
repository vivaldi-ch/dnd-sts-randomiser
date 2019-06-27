import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const SpellGenericContent = ({ level, spells, noOfSlots }) => (
  <div>
    <div className="card-type">Spells</div>
    <div className="card-header">{level > 0 ? `Level ${level}` : 'Cantrip'}</div>
    {noOfSlots > 0 ? (
      <div className="text-base">
        You get {noOfSlots} level {level} spell slot
      </div>
    ) : (
      ''
    )}
    <div className="text-base mb-2">You get {spells.length} of the following spell{spells.length > 1 ? 's' : ''}</div>
    <ul className="list-disc">
      {spells.map((randomSpell, actualIndex) => (
        <li key={actualIndex}>
          <div className="font-bold card-desc">{randomSpell.name}</div>
          <div className="card-desc">{map(randomSpell.classes, 'name').join(', ')}</div>
        </li>
      ))}
    </ul>
  </div>
);

SpellGenericContent.propTypes = {
  level: PropTypes.number.isRequired,
  spells: PropTypes.arrayOf(PropTypes.object).isRequired,
  noOfSlots: PropTypes.number,
};

SpellGenericContent.defaultProps = {
  noOfSlots: 0,
};

export default SpellGenericContent;
