import styled, { css } from 'styled-components';

const beforeAfter = css`
  content: '';
  display: block;
  width: calc(var(--space) * 0.5);
  height: calc(var(--space) * 0.5);
  border-radius: 100%;
`;

const before = ({ isOut }) => (isOut
  ? css`
        &:before {
          ${beforeAfter};
          background-color: var(--red-color);
        }
      `
  : undefined);

const afterMarginLeft = ({ isOut, isIn }) => (isOut && isIn
  ? css`
        margin-left: calc(var(--space) * 0.5);
      `
  : undefined);

const after = ({ isIn }) => (isIn
  ? css`
        &:after {
          ${beforeAfter};
          ${afterMarginLeft};
          background-color: var(--main-color);
        }
      `
  : undefined);

export default styled.div`
  position: absolute;
  left: 10%;
  bottom: calc(var(--space) * 0.5);
  width: 80%;
  height: calc(var(--space) * 0.5);
  border-radius: calc(var(--space) * 0.5);
  overflow: hidden;
  display: flex;
  justify-content: center;

  ${before};
  ${after};
`;
