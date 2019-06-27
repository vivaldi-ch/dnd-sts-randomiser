import React from 'react';

import { percentileDie } from '../../utils/random';
import CantripContent from './spells-0';
import SpellOneContent from './spells-1';
import SpellTwoContent from './spells-2';
import SpellThreeContent from './spells-3';

const getSpellLevelCard = () => {
  const diceRoll = percentileDie();

  if (diceRoll <= 30) return CantripContent();
  if (diceRoll <= 60) return SpellOneContent();
  if (diceRoll <= 85) return SpellTwoContent();
  return SpellThreeContent();
};

const SpellCard = () => (
  <div className="card bg-purple-100 disable-scrollbars">
    <div className="px-6 py-4">
      {getSpellLevelCard()}
    </div>
  </div>
);

export default SpellCard;
