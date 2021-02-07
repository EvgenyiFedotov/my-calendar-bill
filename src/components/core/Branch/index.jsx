import * as React from 'react';

/**
 * Component `Branch`
 * @param {boolean} value
 */
const Branch = ({ value, children }) => {
  const arrChildren = React.Children.toArray(children);
  return value ? arrChildren[0] || null : arrChildren[1] || null;
};

export default Branch;
