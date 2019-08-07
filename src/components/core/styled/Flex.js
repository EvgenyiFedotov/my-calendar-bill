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

const marginRight = ({ step }) => typeof step === 'number'
  && css`
    margin-right: ${`calc(var(--space) * ${step})`};
  `;

export const rowCss = props => css`
  ${flexCss(props)};

  & > *:not(:last-child) {
    ${marginRight(props)};
  }
`;

export const Row = styled.div`
  ${rowCss};
`;

const marginBottom = ({ step }) => typeof step === 'number'
  && css`
    margin-bottom: ${`calc(var(--space) * ${step})`};
  `;

export const columnCss = props => css`
  ${flexCss(props)};

  & > *:not(:last-child) {
    ${marginBottom(props)};
  }
`;

export const Column = styled.div`
  flex-direction: column;
  ${columnCss}
`;

export default styled.div`
  ${flexCss};
`;
