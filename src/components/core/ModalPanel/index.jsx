import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Styled from './styled';
import Background from './styled/Background';
import Content from './styled/Content';

const rootModalPanel = document.getElementById('root-modal-panel');

/**
 * @param {() => void} onClose
 * @param {number} [zIndex=100]
 */
const ModalPanel = ({ children, onClose, zIndex = 100, ...props }) =>
  ReactDOM.createPortal(
    <>
      <Styled {...props} {...{ zIndex }}>
        <Content>{children}</Content>
      </Styled>
      <Background onClick={onClose} {...{ zIndex }} />
    </>,
    rootModalPanel,
  );

export default ModalPanel;
