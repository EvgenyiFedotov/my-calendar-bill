import styled, { css } from 'styled-components';

export const side = (step = 1) => `var(--space) * 4.5 * ${step} + (var(--space) * ${step - 1})`;
export const sideCalc = (step = 1) => `calc(${side(step)})`;

export const blockCss = ({ minWidthStep = 1, minHeightStep = 1 }) => css`
  margin: var(--space);
  min-width: ${sideCalc(minWidthStep)};
  min-height: ${sideCalc(minHeightStep)};
`;

export default styled.div`
  ${blockCss};
`;
