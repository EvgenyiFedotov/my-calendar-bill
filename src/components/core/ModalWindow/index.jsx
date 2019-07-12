import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Styled from './styled';
import Background from './styled/Background';
import Content from './styled/Content';

const rootModal = document.getElementById('root-modal');

/**
 * Component portal `Modal`
 * @param {() => void} onClose
 */
const Modal = ({ children, onClose }) =>
  ReactDOM.createPortal(
    <>
      <Styled>
        <Content>{children}</Content>
      </Styled>
      <Background onClick={onClose} />
    </>,
    rootModal,
  );

export default Modal;
