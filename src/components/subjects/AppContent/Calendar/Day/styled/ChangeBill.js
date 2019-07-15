import styled, { css } from 'styled-components';

const indicator = css`
  content: '';
  display: block;
  width: calc(var(--space) * 0.75);
  height: calc(var(--space) * 0.75);
  border-radius: 100%;
  border: 1px solid var(--bg-color);
`;

export const In = styled.div`
  ${indicator}
  background-color: var(--green-color);
`;

export const Out = styled.div`
  ${indicator};
  background-color: var(--red-color);
`;

export default styled.div`
  position: absolute;
  left: 10%;
  bottom: calc(var(--space) * 0.5 - 2px);
  width: 80%;
  height: calc(var(--space) * 0.5 + 2px);
  border-radius: calc(var(--space) * 0.5);
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
