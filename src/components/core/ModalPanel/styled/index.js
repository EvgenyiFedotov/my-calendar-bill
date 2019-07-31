import styled from 'styled-components';

const zIndex = ({ zIndex = 100 }) => `z-index: ${zIndex}`;

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation: showModalPanel 0.3s ease-in-out;
  pointer-events: none;
  ${zIndex};

  @keyframes showModalPanel {
    from {
      transform: translateX(100vw);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
