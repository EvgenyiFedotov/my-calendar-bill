import styled from 'styled-components';

/**
 * Get side box
 * @param {number} value
 */
export const side = (value = 1) => `calc(var(--space) * 5 * ${value} + (var(--space) * ${value - 1}))`;

// Get background color
export const backgroundColor = ({ disabled }) => (disabled ? 'var(--main-dk-color)' : 'var(--main-color)');

/**
 * Styled component
 * @param {number} [width]
 * @param {number} [height]
 * @param {boolean} [disabled]
 */
export default styled.div`
  width: ${({ width }) => side(width)};
  height: ${({ height }) => side(height)};
  border-radius: calc(var(--space) * 0.5);
  color: ${backgroundColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
