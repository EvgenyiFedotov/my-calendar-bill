import styled, { css } from 'styled-components';

const color = ({ backgroundColor, color = 'var(--text-color)' }) => (backgroundColor
  ? css`
        color: #ffffff;
      `
  : css`
        color: ${color};
      `);
const backgroundColor = ({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`;

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - (var(--space) * 1.5));
  min-width: calc(100% - (var(--space) * 1.5));
  height: calc(100% - (var(--space) * 1.5));
  min-height: calc(100% - (var(--space) * 1.5));
  border-radius: var(--border-radius);
  ${color};
  ${backgroundColor};
`;
