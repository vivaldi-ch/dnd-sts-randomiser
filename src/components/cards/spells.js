import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import map from 'lodash/map';

const useSpells = () => {
  const {
    allSpellsJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allSpellsJson(filter: { level: { lte: 3 } }) {
          nodes {
            name
            level
            classes {
              name
            }
            desc
          }
        }
      }
    `,
  );

  return nodes;
};

const SpellCard = () => {
  const spells = useSpells();

  const randomSpell = spells[Math.floor(Math.random() * spells.length)];

  return (
    <div className="card bg-purple-100 disable-scrollbars">
      <div className="px-6 py-4">
        <div className="text-xs text-gray-500">Spell</div>
        <div className="font-bold text-xl mb-2">{randomSpell.name}</div>
        <div className="text-gray-600 text-sm">{map(randomSpell.classes, 'name').join(', ')}</div>
        <div className="text-gray-600 text-sm mb-1">
          {randomSpell.level === 0 ? 'Cantrip' : `Level: ${randomSpell.level}`}
        </div>
      </div>
    </div>
  );
};

export default SpellCard;
