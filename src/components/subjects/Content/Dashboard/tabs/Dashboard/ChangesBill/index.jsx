import * as React from 'react';

import TablesContext from 'components/subjects/contexts/Tables/context';
import Branch from 'components/core/Branch';
import Column from 'components/core/styled/Column';
import { BlockRow } from 'components/core/styled/Block';
import LabelText from 'components/core/styled/LabelText';
import { dateToSQL } from 'helpers/date';
import {
  getChangesBillByDate,
  getSummChangesBill,
} from 'components/subjects/Content/Dashboard/heplers';
import Separator from 'components/core/styled/Separator';

/**
 *
 * @param {Date} [date]
 */
const ChangesBill = ({ date }) => {
  const {
    maps: {
      changesBill: [changesBill],
    },
  } = React.useContext(TablesContext);

  const items = React.useMemo(() => {
    if (changesBill) {
      if (date) {
        return getChangesBillByDate(changesBill, date).get(dateToSQL(date)) || new Map();
      } else {
        return changesBill;
      }
    }
  }, [date, changesBill]);

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
              {Array.from(items).map(([key, item]) => (
                <BlockRow key={key} justifyContent="space-between" alignItems="center">
                  <span>{item.title}</span>
                  <LabelText color={getBackgroundColor(item.count)}>{item.count}</LabelText>
                </BlockRow>
              ))}

              <Separator />

              <BlockRow key="changes-bill-summ" justifyContent="space-between" alignItems="center">
                <b>Summ</b>
                <LabelText color={getBackgroundColor(getSummChangesBill(changesBill))}>
                  {getSummChangesBill(changesBill)}
                </LabelText>
              </BlockRow>
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
