import * as React from 'react';

import { Row, Column } from 'components/core/styled/Flex';
import Button from 'components/core/styled/ButtonLink';
import ThemeContext from 'components/subjects/contexts/Theme/context';
import OptionsContext from 'components/subjects/contexts/Options/context';

const Options = () => {
  const theme = React.useContext(ThemeContext);
  const [{ mode }, { setMode }] = React.useContext(OptionsContext);

  return (
    <Column>
      <Row alignItems="center">
        <span>Theme:</span>
        <Button onClick={() => theme.toggleTheme()}>
          {theme.data === 'white' ? 'dark' : 'white'}
        </Button>
      </Row>

      <Row alignItems="center">
        <span>Mode:</span>
        <Button onClick={() => setMode(mode === 'default' ? 'desktop' : 'default')}>
          {mode === 'default' ? 'desktop' : 'default'}
        </Button>
      </Row>
    </Column>
  );
};

export default Options;
