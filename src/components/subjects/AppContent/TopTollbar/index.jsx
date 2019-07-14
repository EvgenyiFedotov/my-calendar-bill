import * as React from 'react';

import Button from '../../../core/styled/Button';
import AppContext from '../../contexts/App/context';

import Styled from './styled';

const TopTollbar = () => {
  const {
    theme: [, { toggleTheme }],
  } = React.useContext(AppContext);

  return (
    <Styled>
      <Button color="var(--bg-color)" onClick={toggleTheme}>
        Change theme
      </Button>
      <b>1000</b>
    </Styled>
  );
};

export default TopTollbar;
