import styled from 'styled-components';

const subZIndex = 50;

const zIndex = ({ zIndex = 100 }) => `z-index: ${zIndex - subZIndex}`;

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.2);
  ${zIndex};
`;
