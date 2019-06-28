import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import reduce from 'lodash/reduce';
import { percentileDie } from '../../utils/random';

const useFeatures = () => {
  const {
    allFeaturesJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allFeaturesJson(filter: { level: { lte: 5 } }) {
          nodes {
            level
            name
            desc
            class {
              name
            }
          }
        }
      }
    `,
  );

  return nodes;
};

const sortFeaturesByLevel = features =>
  reduce(
    features,
    (sorted, f) => {
      const currentSorted = sorted;
      if (!currentSorted[f.level]) {
        currentSorted[f.level] = [];
      }

      currentSorted[f.level].push(f);

      return currentSorted;
    },
    {},
  );

const getRandomFeaturesByLevel = (features) => {
  const sortedFeatures = sortFeaturesByLevel(features);
  const percentileRoll = percentileDie();

  if (percentileRoll <= 40) return sortedFeatures[1];
  if (percentileRoll <= 69) return sortedFeatures[2];
  if (percentileRoll <= 94) return sortedFeatures[3];
  if (percentileRoll <= 99) return sortedFeatures[4];
  return sortedFeatures[5];
};

const FeatureCard = () => {
  const features = useFeatures();
  const sortedFeatures = getRandomFeaturesByLevel(features);

  const randomFeature = sortedFeatures[
    Math.floor(Math.random() * sortedFeatures.length)
  ];

  return (
    <div className="card bg-yellow-100 disable-scrollbars">
      <div className="px-6 py-4">
        <div className="text-xs text-gray-500">Feature</div>
        <div className="font-bold text-xl mb-2">{randomFeature.name}</div>
        <div className="text-gray-600 text-sm">{randomFeature.class.name}</div>
        <div className="text-gray-600 text-sm mb-1">Level: {randomFeature.level}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
