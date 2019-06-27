import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import last from 'lodash/last';
import capitalize from 'lodash/capitalize';

import Layout from '../../components/layout';
import CardList from '../../components/card-list';
import { randomGoldLoot } from '../../utils/random';

const EncounterPage = (props) => {
  const {
    location: { pathname },
  } = props;

  const encounterType = last((pathname || '/').split('/'));

  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <h1>{capitalize(encounterType)} Encounter</h1>
        <div className="text-right pb-3 underline text-blue-500 hover:text-gray-600">
          <Link to="/">Back</Link>
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        You gain {randomGoldLoot() * (encounterType === 'deadly' ? 3 : 1)} gp
      </p>
      <>
        <p>Choose one from the following: </p>
        <CardList type="normal" />
      </>
      {
        encounterType === 'deadly' ? (
          <div className="my-6">
            <p>Also choose one from the following: </p>
            <CardList type="deadly" />
          </div>
        ) : ''
      }
    </Layout>
  );
};

EncounterPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default EncounterPage;
