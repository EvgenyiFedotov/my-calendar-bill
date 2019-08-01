import * as React from 'react';

import {
  getDatesMonths,
  DAY_WEEK_SHORT,
  MONTHS,
  isEqualMonth,
  isEqualDate,
  dateToSQL,
  isPrevDate as getIsPrevDate,
} from 'helpers/date';
import SelectedDateContext from 'components/subjects/contexts/SelectedDate/context';
import Day from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar/styled/Day';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import Block from 'components/core/styled/Block';
import ModalPanel from 'components/core/ModalPanel';
import Branch from 'components/core/Branch';
import DialogEditDate from 'components/subjects/Content/Dashboard/tabs/Dashboard/DialogEditDate';
import ChangeBillIndicatorWrapper from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar/styled/ChangeBillIndicatorWrapper';
import ChangeBillIndicator from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar/styled/ChangeBillIndicator';
import TablesContext from 'components/subjects/contexts/Tables/context';
import {
  getChangesBillByDate,
  getChangesBillByDirection,
} from 'components/subjects/Content/Dashboard/heplers';

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
      if (isEqualMonth(selectedDate, date)) {
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
            const progressChangeBill = processChangesBill.get(dateToSQL(date));
            const isPrevDate = firstCheckBillDate && getIsPrevDate(date, firstCheckBillDate);
            const colorDay = isPrevDate ? 'var(--text-disabled-color)' : undefined;

            return (
              <Day key={`day-${indexDate}`} color={colorDay} onClick={clickDate(date)}>
                {(() => {
                  let result = isEqualMonth(selectedDate, date) ? date.getDate() : '';
                  if (isEqualDate(selectedDate, date)) result = <b>{result}</b>;
                  return result;
                })()}

                <Branch value={!isPrevDate && isEqualMonth(selectedDate, date)}>
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
