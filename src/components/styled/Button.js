import styled from 'styled-components';

// Get color
export const color = ({ color = 'var(--main-lg-color)' }) => `color: ${color}`;

export default styled.button`
  padding: var(--space);
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  ${color};

  &:hover {
    text-decoration: underline;
  }
`;
