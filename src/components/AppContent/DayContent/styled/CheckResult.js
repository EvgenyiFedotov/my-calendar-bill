import styled, { css } from 'styled-components';

const colorsByResult = ({ value }) => {
  switch (value) {
    case true:
      return css`
        background-color: var(--green-color);
        color: var(--bg-color);
      `;
    case false:
      return css`
        background-color: var(--red-color);
        color: var(--bg-color);
      `;
    case null:
      return css`
        background-color: var(--bg-lg-color);
      `;
    default:
      return undefined;
  }
};

export default styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${colorsByResult}
`;
