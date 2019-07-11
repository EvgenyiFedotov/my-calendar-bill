import styled, { css } from 'styled-components';

// Get backbround color
const backbroundColor = ({ color }) => {
  switch (color) {
    case 'red':
      return css`
        background-color: var(--red-color);
      `;
    case 'green':
      return css`
        background-color: var(--green-color);
      `;
    default:
      return css`
        background-color: var(--bg-color);
      `;
  }
};

export default styled.div`
  display: flex;
  padding: calc(var(--space) * 0.25) calc(var(--space) * 0.5);
  border-radius: var(--border-radius);
  color: var(--bg-color);
  ${backbroundColor};
`;
