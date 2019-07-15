import * as React from 'react';

import { dateToShortMonth } from 'helpers/date';

import Styled from './styled';

/**
 * Component `Month`
 * @param {Date} date
 */
const Month = ({ date, ...props }) => <Styled {...props}>{dateToShortMonth(date)}</Styled>;

export default Month;
