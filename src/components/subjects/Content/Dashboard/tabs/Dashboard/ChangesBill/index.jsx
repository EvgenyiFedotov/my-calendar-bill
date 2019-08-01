import * as React from 'react';

import Branch from 'components/core/Branch';
import Column from 'components/core/styled/Column';
import LabelText from 'components/core/styled/LabelText';
import { getSummChangesBill } from 'components/subjects/Content/Dashboard/heplers';
import Separator from 'components/core/styled/Separator';

import Item from './styled/Item';

/**
 *
 * @param {Map} items
 */
const ChangesBill = ({ items }) => {
  const getBackgroundColor = React.useCallback(count => {
    if (count > 0) {
      return 'var(--success-color)';
    } else if (count < 0) {
      return 'var(--error-color)';
    }
    return undefined;
  }, []);

  return (
    <Branch value={items}>
      <Branch value={items && items.size}>
        <Column>
          {items && (
            <>
              <Item key="changes-bill-summ" justifyContent="space-between" alignItems="center">
                <span>Summ</span>
                <LabelText color={getBackgroundColor(getSummChangesBill(items))}>
                  {getSummChangesBill(items)}
                </LabelText>
              </Item>

              <Separator />

              {Array.from(items).map(([key, item]) => (
                <Item key={key} justifyContent="space-between" alignItems="center">
                  <span>{item.title}</span>
                  <LabelText color={getBackgroundColor(item.count)}>{item.count}</LabelText>
                </Item>
              ))}
            </>
          )}
        </Column>

        <i>Changes bill list is empty</i>
      </Branch>

      <>Loading...</>
    </Branch>
  );
};

export default ChangesBill;
