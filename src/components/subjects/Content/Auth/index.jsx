import * as React from 'react';

import Branch from 'components/core/Branch';
import UserContext from 'components/subjects/contexts/User/context';
import InputText from 'components/core/styled/InputText';
import Button from 'components/core/styled/Button';
import Column from 'components/core/styled/Column';
import useField from 'hooks/use-field';

import Styled from './styled';
import Content from './styled/Content';

const Auth = ({ children }) => {
  const {
    data: { hashKey },
    signIn,
  } = React.useContext(UserContext);

  const [loginRef, login] = useField();
  const [passRef, pass] = useField();

  const signinUser = React.useCallback(() => {
    const loginValue = login.getValue();
    const passValue = pass.getValue();
    if (loginValue && passValue) signIn(loginValue, passValue);
  }, [login, pass, signIn]);

  return (
    <Branch value={!!hashKey}>
      <>{children}</>

      <Styled>
        <Content step={2}>
          <Column>
            <label>Login</label>
            <InputText placeholder="Login" ref={loginRef} />
          </Column>

          <Column>
            <label>Password</label>
            <InputText placeholder="Password" type="password" ref={passRef} />
          </Column>
          <Button onClick={signinUser}>Sign in</Button>
        </Content>
      </Styled>
    </Branch>
  );
};

export default Auth;