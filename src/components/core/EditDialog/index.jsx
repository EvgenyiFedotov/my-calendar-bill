import * as React from 'react';

import Row from 'components/core/styled/Row';
import Button from 'components/core/styled/Button';

import Styled from './styled';
import Content from './styled/Content';

/**
 * Component `EditDialog`
 * @param {string} [title='']
 * @param {boolean} [isNew=false]
 * @param {() => {}} [onDelete=() => {}]
 * @param {() => {}} [onSave=() => {}]
 * @param {() => {}} [onCancel=() => {}]
 */
const EditDialog = ({
  title = '',
  isNew = false,
  children,
  onDelete = () => {},
  onSave = () => {},
  onCancel = () => {},
}) => {
  return (
    <Styled>
      <Row justifyContent="space-between" alignItems="center">
        <b>{title}</b>

        {!isNew && <Button onClick={onDelete}>Delete</Button>}
      </Row>
      <Content>{children}</Content>
      <Row justifyContent="flex-end" alignItems="center">
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>{isNew ? 'Create' : 'Edit'}</Button>
      </Row>
    </Styled>
  );
};

export default EditDialog;
