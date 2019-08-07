import * as React from 'react';
import { FiChevronDown, FiChevronUp, FiMinus } from 'react-icons/fi';

import Branch from 'components/core/Branch';
import { getSummChangesBill } from 'components/subjects/Content/Dashboard/heplers';
import Separator from 'components/core/styled/Separator';
import { Column, Row } from 'components/core/styled/Flex';

import Item from './styled/Item';

/**
 *
 * @param {Map} items
 * @param {[data, methods]} [item]
 */
const ChangesBill = ({ items, item = [] }) => {
  const [, changeBillMethods] = item;

  return (
    <Branch value={items}>
      <Branch value={items && items.size}>
        <Column>
          {items && (
            <>
              <Item key="changes-bill-summ" justifyContent="space-between" alignItems="center">
                <Row alignItems="center">
                  <Branch value={getSummChangesBill(items) > 0}>
                    <FiChevronUp stroke="var(--success-color)" strokeWidth={3} />
                    <Branch value={getSummChangesBill(items) < 0}>
                      <FiChevronDown stroke="var(--error-color)" strokeWidth={3} />
                      <FiMinus stroke="var(--main-color)" strokeWidth={3} />
                    </Branch>
                  </Branch>
                  <b>Summ</b>
                </Row>
                <b>{getSummChangesBill(items)}</b>
              </Item>

              <Separator />

              {Array.from(items).map(([key, item]) => (
                <Item
                  key={key}
                  justifyContent="space-between"
                  alignItems="center"
                  onClick={changeBillMethods && changeBillMethods.edit(key)}
                >
                  <Row alignItems="center">
                    <Branch value={item.count > 0}>
                      <FiChevronUp stroke="var(--success-color)" strokeWidth={3} />
                      <Branch value={item.count < 0}>
                        <FiChevronDown stroke="var(--error-color)" strokeWidth={3} />
                        <FiMinus stroke="var(--main-color)" strokeWidth={3} />
                      </Branch>
                    </Branch>
                    <span>{item.title}</span>
                  </Row>

                  <Row alignItems="center">
                    <span>{item.count}</span>
                  </Row>
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
