import * as React from 'react';
import sha3 from 'crypto-js/sha3';

import Column from 'components/core/styled/Column';
import InputText from 'components/core/styled/InputText';
import Button from 'components/core/styled/Button';
import useField from 'hooks/use-field';
import UserContext from 'components/subjects/contexts/User/context';
import Branch from 'components/core/Branch';

const Auth = ({ children }) => {
  const { data, dispatch } = React.useContext(UserContext);

  const [loginPass, login] = useField();
  const [passRef, pass] = useField();

  const send = React.useCallback(() => {
    const loginValue = login.getValue();
    const passValue = pass.getValue();

    if (loginValue && passValue) {
      dispatch('login', loginValue);
      dispatch('key', sha3(passValue));
    }
  }, [login, pass, dispatch]);

  return (
    <Branch value={data.login && data.key}>
      <>{children}</>
      <Column justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <InputText placeholder="Login" ref={loginPass} />
        <InputText placeholder="Password" type="password" ref={passRef} />
        <Button onClick={send}>Send</Button>
      </Column>
    </Branch>
  );
};

export default Auth;
