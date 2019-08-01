import * as React from 'react';

import {
  getDatesMonths,
  DAY_WEEK_SHORT,
  MONTHS,
  isEqualMonth as getIsEqualMonth,
  isEqualDate,
  dateToSQL,
  isPrevDate as getIsPrevDate,
} from 'helpers/date';
import SelectedDateContext from 'components/subjects/contexts/SelectedDate/context';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import Block from 'components/core/styled/Block';
import ModalPanel from 'components/core/ModalPanel';
import Branch from 'components/core/Branch';
import DialogEditDate from 'components/subjects/Content/Dashboard/tabs/Dashboard/DialogEditDate';
import TablesContext from 'components/subjects/contexts/Tables/context';
import {
  getChangesBillByDate,
  getChangesBillByDirection,
} from 'components/subjects/Content/Dashboard/heplers';

import Day from './styled/Day';
import ChangeBillIndicatorWrapper from './styled/ChangeBillIndicatorWrapper';
import ChangeBillIndicator from './styled/ChangeBillIndicator';
import CheckBillIndicator from './styled/CheckBillIndicator';

const Calendar = () => {
  const [selectedDate, { prevMonth, nextMonth, setDate }] = React.useContext(SelectedDateContext);
  const {
    maps: {
      changesBill: [changesBill],
      checksBill: [checksBill],
    },
  } = React.useContext(TablesContext);

  const dates = React.useMemo(() => getDatesMonths(selectedDate), [selectedDate]);

  const yearSelectedDate = selectedDate.getFullYear();
  const monthSelectedDate = selectedDate.getMonth();
  const processChangesBill = React.useMemo(() => {
    const changesBillByDates = getChangesBillByDate(
      changesBill,
      new Date(yearSelectedDate, monthSelectedDate),
    );
    Array.from(changesBillByDates).forEach(([dateSQL, changesBillByDate]) =>
      changesBillByDates.set(dateSQL, getChangesBillByDirection(changesBillByDate)),
    );
    return changesBillByDates;
  }, [changesBill, yearSelectedDate, monthSelectedDate]);

  const [showModal, setShowModal] = React.useState(false);

  const firstCheckBillDate = React.useMemo(() => {
    if (checksBill) {
      const firstCheckBill = Array.from(checksBill)[0];
      if (firstCheckBill) return new Date(firstCheckBill[0]);
    }
  }, [checksBill]);

  const clickDate = React.useCallback(
    date => () => {
      if (getIsEqualMonth(selectedDate, date)) {
        setDate(new Date(date));
        setShowModal(true);
      }
    },
    [selectedDate, setDate, setShowModal],
  );

  return (
    <Column>
      <Branch value={showModal}>
        <ModalPanel onClose={() => setShowModal(false)}>
          <DialogEditDate date={selectedDate} onClose={() => setShowModal(false)} />
        </ModalPanel>
      </Branch>

      <Row>
        <Day onClick={prevMonth}>P</Day>
        <Block
          width={5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {MONTHS[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </Block>
        <Day onClick={nextMonth}>N</Day>
      </Row>

      <Row>
        {DAY_WEEK_SHORT.map(day => (
          <Day key={`key-${day}`} style={{ color: 'var(--text-second-color)' }}>
            {day}
          </Day>
        ))}
      </Row>

      {dates.map((week, indexWeek) => (
        <Row key={`week-${indexWeek}`}>
          {week.map((date, indexDate) => {
            const dateSQL = dateToSQL(date);
            const progressChangeBill = processChangesBill.get(dateSQL);
            const isPrevDate = firstCheckBillDate && getIsPrevDate(date, firstCheckBillDate);
            const colorDay = isPrevDate ? 'var(--text-disabled-color)' : undefined;

            const isEqualMonth = getIsEqualMonth(selectedDate, date);

            const checkBill = isEqualMonth && checksBill && checksBill.get(dateSQL);
            let colorIndicator;
            if (
              checkBill &&
              typeof checkBill.count === 'number' &&
              typeof checkBill.planCount === 'number'
            ) {
              if (checkBill.count < checkBill.planCount) {
                colorIndicator = 'var(--error-color)';
              } else if (checkBill.count > checkBill.planCount) {
                colorIndicator = 'var(--success-color)';
              } else {
                colorIndicator = 'var(--main-color)';
              }
            }

            return (
              <Day key={`day-${indexDate}`} onClick={clickDate(date)}>
                <CheckBillIndicator color={colorDay} backgroundColor={colorIndicator}>
                  {(() => {
                    let result = isEqualMonth ? date.getDate() : '';
                    if (isEqualDate(selectedDate, date)) result = <b>{result}</b>;
                    return result;
                  })()}
                </CheckBillIndicator>

                <Branch value={!isPrevDate && isEqualMonth}>
                  <ChangeBillIndicatorWrapper>
                    <Branch value={progressChangeBill && progressChangeBill.zero.size}>
                      <ChangeBillIndicator />
                    </Branch>
                    <Branch value={progressChangeBill && progressChangeBill.in.size}>
                      <ChangeBillIndicator color="var(--success-color)" />
                    </Branch>
                    <Branch value={progressChangeBill && progressChangeBill.out.size}>
                      <ChangeBillIndicator color="var(--error-color)" />
                    </Branch>
                  </ChangeBillIndicatorWrapper>
                </Branch>
              </Day>
            );
          })}
        </Row>
      ))}
    </Column>
  );
};

export default Calendar;
