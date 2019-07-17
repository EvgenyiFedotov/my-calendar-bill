import * as React from 'react';
import sha3 from 'crypto-js/sha3';

import Column from 'components/core/styled/Column';
import InputText from 'components/core/styled/InputText';
import Button from 'components/core/styled/Button';
import useField from 'hooks/use-field';
import UserContext from 'components/subjects/contexts/User/context';

const Auth = () => {
  const {
    key: [, setKey],
  } = React.useContext(UserContext);

  const [passRef, pass] = useField();
  const send = React.useCallback(() => {
    const passValue = pass.getValue();
    if (passValue) setKey(sha3(passValue));
  }, [pass, setKey]);

  return (
    <Column justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <InputText placeholder="Password" ref={passRef} />
      <Button onClick={send}>Send</Button>
    </Column>
  );
};

export default Auth;
