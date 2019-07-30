import * as React from 'react';

import TablesContext from 'components/subjects/contexts/Tables/context';
import Branch from 'components/core/Branch';

const ChangesBill = () => {
  const {
    maps: {
      changesBill: [changesBill],
    },
  } = React.useContext(TablesContext);

  return (
    <Branch value={changesBill}>
      <div>
        <i>Changes bill list is empty</i>
      </div>

      <>Loading...</>
    </Branch>
  );
};

export default ChangesBill;
