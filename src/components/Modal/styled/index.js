import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: show 0.75s ease-in-out;
  pointer-events: none;

  @keyframes show {
    from {
      transform: translateY(100vw);
    }
    to {
      transform: translateY(0);
    }
  }
`;
