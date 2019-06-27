import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { randomEntriesFromArray } from '../../utils/random';
import SpellGenericContent from './spells-generic';

const NO_OF_SPELLS = 2;
const NO_OF_SLOTS = 1;

const useSpellTwo = () => {
  const {
    allSpellsJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allSpellsJson(filter: { level: { eq: 2 } }) {
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

const SpellTwoContent = () => {
  const spells = useSpellTwo();

  const chosenIndex = randomEntriesFromArray(spells.length, NO_OF_SPELLS);

  return (
    <SpellGenericContent
      level={2}
      noOfSlots={NO_OF_SLOTS}
      spells={chosenIndex.map(i => spells[i])}
    />
  );
};

export default SpellTwoContent;
