import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useFeatures = () => {
  const {
    allFeaturesJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allFeaturesJson(filter: { level: { gt: 0, lte: 3 } }) {
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

const FeatureCard = () => {
  const features = useFeatures();

  const randomFeature = features[Math.floor(Math.random() * features.length)];

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
