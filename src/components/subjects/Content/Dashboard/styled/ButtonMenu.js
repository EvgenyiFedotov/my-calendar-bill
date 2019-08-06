import styled, { css } from 'styled-components';

import Button from 'components/core/styled/ButtonLink';

const color = ({ active = false }) => css`
  color: ${active ? 'var(--text-color)' : 'var(--text-second-color)'};
`;

export default styled(Button)`
  text-align: left;
  ${color};
`;
