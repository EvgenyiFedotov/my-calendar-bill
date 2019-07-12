import styled from 'styled-components';

export default styled.input`
  border: 1px solid var(--main-color);
  border-radius: calc(var(--space) * 0.5);
  background-color: transparent;
  color: var(--main-color);
  padding: var(--space);
  width: 100%;
  font-size: inherit;

  &::placeholder {
    color: var(--main-dk-color);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
