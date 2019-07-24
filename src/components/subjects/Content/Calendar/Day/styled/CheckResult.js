import styled, { css } from 'styled-components';

const colorsByResult = ({ count, planCount }) => {
  if (count === null && typeof planCount === 'number') {
    return css`
      background-color: var(--bg-lg-color);
    `;
  }
  if (count > planCount) {
    return css`
      background-color: var(--green-color);
      color: var(--bg-color);
    `;
  }
  if (count < planCount) {
    return css`
      background-color: var(--red-color);
      color: var(--bg-color);
    `;
  }
  if (typeof count === 'number' && typeof planCount === 'number' && count === planCount) {
    return css`
      background-color: var(--main-color);
      color: var(--bg-color);
    `;
  }
};

export default styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${colorsByResult};
`;
