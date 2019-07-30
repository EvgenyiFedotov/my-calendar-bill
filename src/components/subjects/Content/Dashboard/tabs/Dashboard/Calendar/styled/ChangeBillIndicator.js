import styled from 'styled-components';

const backgroundColor = ({ color = 'var(--main-color)' }) => `background-color: ${color}`;

export default styled.div`
  width: 6px;
  height: 6px;
  border: 1px solid var(--bg-color);
  border-radius: var(--border-radius);
  ${backgroundColor};
`;
