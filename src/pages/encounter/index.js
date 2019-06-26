import React from 'react';
import PropTypes from 'prop-types';
import last from 'lodash/last';
import capitalize from 'lodash/capitalize';

import Layout from '../../components/layout';
import CardList from '../../components/card-list';

const EncounterPage = (props) => {
  const {
    location: { pathname },
  } = props;

  const encounterType = last((pathname || '/').split('/'));

  return (
    <Layout>
      <h1>{capitalize(encounterType)} Encounter</h1>
      <p>Choose one from the following: </p>
      <CardList type={encounterType} />
    </Layout>
  );
};

EncounterPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default EncounterPage;
