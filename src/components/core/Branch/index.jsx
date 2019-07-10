/**
 * Component `Branch`
 * @param {boolean} value
 */
const Branch = ({ value, children }) => (value ? children : null);

export default Branch;
