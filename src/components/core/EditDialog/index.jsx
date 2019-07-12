import * as React from 'react';

import Row from '../styled/Row';
import Button from '../styled/Button';

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

        {!isNew && (
          <Button color="var(--red-color)" onClick={onDelete}>
            Delete
          </Button>
        )}
      </Row>
      <Content>{children}</Content>
      <Row justifyContent="flex-end" alignItems="center">
        <Button color="var(--main-dk-color)" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onSave}>{isNew ? 'Create' : 'Edit'}</Button>
      </Row>
    </Styled>
  );
};

export default EditDialog;
