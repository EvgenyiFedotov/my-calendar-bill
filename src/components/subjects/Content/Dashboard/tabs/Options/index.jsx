import * as React from 'react';

import Column from 'components/core/styled/Column';
import { BlockRow } from 'components/core/styled/Block';
import Button from 'components/core/styled/ButtonLink';
import ThemeContext from 'components/subjects/contexts/Theme/context';

const Options = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Column>
      <BlockRow>
        <span>Theme:</span>
        <Button onClick={() => theme.toggleTheme()}>
          {theme.data === 'white' ? 'dark' : 'white'}
        </Button>
      </BlockRow>
    </Column>
  );
};

export default Options;
