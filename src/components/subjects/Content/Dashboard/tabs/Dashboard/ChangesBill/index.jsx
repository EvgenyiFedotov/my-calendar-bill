import * as React from 'react';

import TablesContext from 'components/subjects/contexts/Tables/context';
import Branch from 'components/core/Branch';

const ChecksBill = () => {
  const {
    maps: {
      checksBill: [checksBill],
    },
  } = React.useContext(TablesContext);

  return (
    <Branch value={checksBill}>
      <i>Checks bill list is empty</i>

      <>Loading...</>
    </Branch>
  );
};

export default ChecksBill;
