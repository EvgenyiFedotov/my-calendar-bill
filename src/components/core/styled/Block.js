import styled, { css } from 'styled-components';

export const side = step => (typeof step === 'number'
  ? `var(--space) * 4.5 * ${step} + (var(--space) * ${step - 1})`
  : undefined);
export const sideCalc = step => (typeof step === 'number' ? `calc(${side(step)})` : undefined);
export const marginCalc = (step = 1) => `calc(var(--space) * ${step * 0.5})`;

export const blockCss = ({
  marginStep,
  marginTopStep,
  marginRightStep,
  marginBottomStep,
  marginLeftStep,

  widthStep,
  minWidthStep,
  maxWidthStep,

  heightStep,
  minHeightStep,
  maxHeightStep,
}) => css`
  margin: ${marginCalc(marginTopStep || marginStep)} ${marginCalc(marginRightStep || marginStep)}
    ${marginCalc(marginBottomStep || marginStep)} ${marginCalc(marginLeftStep || marginStep)};
  width: ${sideCalc(widthStep)};
  min-width: ${sideCalc(minWidthStep)};
  max-width: ${sideCalc(maxWidthStep)};
  height: ${sideCalc(heightStep)};
  min-height: ${sideCalc(minHeightStep)};
  max-height: ${sideCalc(maxHeightStep)};
`;

export const BlockSpan = styled.span`
  ${blockCss};
`;

export default styled.div`
  ${blockCss};
`;
