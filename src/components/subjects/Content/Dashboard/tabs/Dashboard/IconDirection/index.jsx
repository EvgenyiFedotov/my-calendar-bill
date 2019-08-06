import * as React from 'react';
import { FiChevronDown, FiChevronUp, FiMinus } from 'react-icons/fi';

import Branch from 'components/core/Branch';

/**
 * @param {number} [value = 0]
 */
const IconDirection = ({ value = 0, matchValue = 0 }) => {
  return (
    <Branch value={value > matchValue}>
      <FiChevronUp stroke="var(--success-color)" strokeWidth={3} />
      <Branch value={value < matchValue}>
        <FiChevronDown stroke="var(--error-color)" strokeWidth={3} />
        <FiMinus stroke="var(--main-color)" strokeWidth={3} />
      </Branch>
    </Branch>
  );
};

export default IconDirection;
