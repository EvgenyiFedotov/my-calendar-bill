import styled from 'styled-components';

const zIndex = ({ zIndex = 100 }) => `z-index: ${zIndex}`;

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: showModalWindow 0.3s ease-in-out;
  pointer-events: none;
  ${zIndex};

  @keyframes showModalWindow {
    from {
      transform: translateY(100vw);
    }
    to {
      transform: translateY(0);
    }
  }
`;
