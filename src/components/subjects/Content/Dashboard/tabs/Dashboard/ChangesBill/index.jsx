import * as React from 'react';

import TablesContext from 'components/subjects/contexts/Tables/context';
import Branch from 'components/core/Branch';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import LabelText from 'components/core/styled/LabelText';
import { isEqualDate } from 'helpers/date';

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

  const items = React.useMemo(
    () =>
      changesBill &&
      Array.from(changesBill).filter(([, item]) => {
        return date ? isEqualDate(date, new Date(item.date)) : true;
      }),
    [date, changesBill],
  );

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
      <Branch value={items && items.length}>
        <Column>
          {changesBill &&
            items.map(([key, item]) => (
              <Row key={key} justifyContent="space-between" alignItems="center">
                <span>{item.title}</span>
                <LabelText color={getBackgroundColor(item.count)}>{item.count}</LabelText>
              </Row>
            ))}
        </Column>

        <i>Changes bill list is empty</i>
      </Branch>

      <>Loading...</>
    </Branch>
  );
};

export default ChangesBill;
