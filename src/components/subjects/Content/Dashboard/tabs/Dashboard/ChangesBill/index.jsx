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
      <div>
        <i>Checks bill list is empty</i>
      </div>

      <>Loading...</>
    </Branch>
  );
};

export default ChecksBill;
