import styled from 'styled-components';

const backgroundColor = ({ color = 'var(--main-color)' }) => `background-color: ${color}`;

export default styled.div`
  display: flex;
  padding: calc(var(--space) * 0.5) calc(var(--space));
  border-radius: var(--border-radius);
  color: #ffffff;
  ${backgroundColor};
`;
