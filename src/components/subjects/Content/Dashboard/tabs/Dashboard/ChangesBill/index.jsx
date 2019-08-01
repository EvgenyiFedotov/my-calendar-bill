import * as React from 'react';

import Branch from 'components/core/Branch';
import Column from 'components/core/styled/Column';
import { BlockRow } from 'components/core/styled/Block';
import LabelText from 'components/core/styled/LabelText';
import { getSummChangesBill } from 'components/subjects/Content/Dashboard/heplers';
import Separator from 'components/core/styled/Separator';

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
              <BlockRow key="changes-bill-summ" justifyContent="space-between" alignItems="center">
                <span>Summ</span>
                <LabelText color={getBackgroundColor(getSummChangesBill(items))}>
                  {getSummChangesBill(items)}
                </LabelText>
              </BlockRow>

              <Separator />

              {Array.from(items).map(([key, item]) => (
                <BlockRow key={key} justifyContent="space-between" alignItems="center">
                  <span>{item.title}</span>
                  <LabelText color={getBackgroundColor(item.count)}>{item.count}</LabelText>
                </BlockRow>
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
