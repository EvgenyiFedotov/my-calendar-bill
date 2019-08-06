import * as React from 'react';

import Column from 'components/core/styled/Column';
import { Row } from 'components/core/styled/FlexBlock';
import { BlockSpan } from 'components/core/styled/Block';
import Button from 'components/core/styled/ButtonLink';
import ThemeContext from 'components/subjects/contexts/Theme/context';
import OptionsContext from 'components/subjects/contexts/Options/context';

const Options = () => {
  const theme = React.useContext(ThemeContext);
  const [{ mode }, { setMode }] = React.useContext(OptionsContext);

  return (
    <Column>
      <Row>
        <BlockSpan>Theme:</BlockSpan>
        <Button onClick={() => theme.toggleTheme()}>
          {theme.data === 'white' ? 'dark' : 'white'}
        </Button>
      </Row>

      <Row>
        <BlockSpan>Mode:</BlockSpan>
        <Button onClick={() => setMode(mode === 'default' ? 'desktop' : 'default')}>
          {mode === 'default' ? 'desktop' : 'default'}
        </Button>
      </Row>
    </Column>
  );
};

export default Options;
