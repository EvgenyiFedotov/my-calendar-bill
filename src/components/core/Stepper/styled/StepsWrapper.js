import styled from 'styled-components';

const transform = ({ step = 0 }) => `transform: translateX(${step * -100}%)`;

export default styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;
  ${transform};
`;
