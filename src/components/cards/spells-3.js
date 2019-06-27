import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { randomEntriesFromArray } from '../../utils/random';
import SpellGenericContent from './spells-generic';

const NO_OF_SPELLS = 1;
const NO_OF_SLOTS = 1;

const useSpellThree = () => {
  const {
    allSpellsJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allSpellsJson(filter: { level: { eq: 3 } }) {
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

const SpellThreeContent = () => {
  const spells = useSpellThree();

  const chosenIndex = randomEntriesFromArray(spells.length, NO_OF_SPELLS);

  return (
    <>
      <SpellGenericContent
        level={3}
        noOfSlots={NO_OF_SLOTS}
        spells={chosenIndex.map(i => spells[i])}
      />
    </>
  );
};

export default SpellThreeContent;
