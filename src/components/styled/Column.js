import styled from 'styled-components';

// Get justify content
const justifyContent = ({ justifyContent }) => `justify-content: ${justifyContent}`;

// Get align items
const alignItems = ({ alignItems }) => `align-items: ${alignItems}`;

export default styled.div`
  display: flex;
  flex-direction: column;
  ${justifyContent};
  ${alignItems};

  & > :not(:last-child) {
    flex: none;
    margin-bottom: var(--space);
  }
`;
