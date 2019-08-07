import styled from 'styled-components';

import { blockCss } from 'components/core/styled/Block';

const color = ({ color = 'var(--text-color)' }) => `color: ${color}`;
const backgroundColor = ({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`;

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  cursor: pointer;
  position: relative;
  ${color};
  ${backgroundColor};
  ${blockCss({
    widthStep: 1,
    minWidthStep: 1,
    heightStep: 1,
    minHeightStep: 1,
  })};

  /* background-color: pink; */
`;
