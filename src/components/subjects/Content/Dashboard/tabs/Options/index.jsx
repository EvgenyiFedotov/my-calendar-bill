import * as React from 'react';

import Column from 'components/core/styled/Column';
import { BlockRow } from 'components/core/styled/BlockOLD';
import Button from 'components/core/styled/ButtonLink';
import ThemeContext from 'components/subjects/contexts/Theme/context';
import OptionsContext from 'components/subjects/contexts/Options/context';

const Options = () => {
  const theme = React.useContext(ThemeContext);
  const [{ mode }, { setMode }] = React.useContext(OptionsContext);

  return (
    <Column>
      <BlockRow>
        <span>Theme:</span>
        <Button onClick={() => theme.toggleTheme()}>
          {theme.data === 'white' ? 'dark' : 'white'}
        </Button>
      </BlockRow>

      <BlockRow>
        <span>Mode:</span>
        <Button onClick={() => setMode(mode === 'default' ? 'desktop' : 'default')}>
          {mode === 'default' ? 'desktop' : 'default'}
        </Button>
      </BlockRow>
    </Column>
  );
};

export default Options;
