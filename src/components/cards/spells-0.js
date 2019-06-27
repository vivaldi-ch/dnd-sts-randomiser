import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { randomEntriesFromArray } from '../../utils/random';
import SpellGenericContent from './spells-generic';

const NO_OF_SPELLS = 4;
const NO_OF_SLOTS = 0;

const useCantrips = () => {
  const {
    allSpellsJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allSpellsJson(filter: { level: { eq: 0 } }) {
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

const CantripContent = () => {
  const spells = useCantrips();

  const chosenIndex = randomEntriesFromArray(spells.length, NO_OF_SPELLS);

  return (
    <>
      <SpellGenericContent
        level={0}
        noOfSlots={NO_OF_SLOTS}
        spells={chosenIndex.map(i => spells[i])}
      />
    </>
  );
};

export default CantripContent;
