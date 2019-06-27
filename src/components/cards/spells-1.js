import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { randomEntriesFromArray } from '../../utils/random';
import SpellGenericContent from './spells-generic';

const NO_OF_SPELLS = 3;
const NO_OF_SLOTS = 2;

const useSpellOne = () => {
  const {
    allSpellsJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allSpellsJson(filter: { level: { eq: 1 } }) {
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

const SpellOneContent = () => {
  const spells = useSpellOne();

  const chosenIndex = randomEntriesFromArray(spells.length, NO_OF_SPELLS);

  return (
    <>
      <SpellGenericContent
        level={1}
        noOfSlots={NO_OF_SLOTS}
        spells={chosenIndex.map(i => spells[i])}
      />
    </>
  );
};

export default SpellOneContent;
