import styled, { css } from 'styled-components';

export const flexCss = ({
  direction, justifyContent, alignItems, flex,
}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex: ${flex};
`;

export const Row = styled.div`
  ${flexCss};
`;

export const Column = styled.div`
  flex-direction: column;
  ${flexCss};
`;

export default styled.div`
  ${flexCss};
`;
