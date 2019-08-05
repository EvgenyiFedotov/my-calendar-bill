import styled from 'styled-components';

import { sideCalc } from 'components/core/styled/Block';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: ${sideCalc(7)};
  max-width: 100%;
  height: ${sideCalc(8)};
  min-height: ${sideCalc(8)};
  flex: 1;
`;
