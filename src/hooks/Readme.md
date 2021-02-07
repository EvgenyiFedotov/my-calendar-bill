# That should return custom hook

## Options:

1. Only data

```javascript
export default () => {
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    if (value === undefined) {
      fetch(url).then(({ data }) => setValue(data));
    }
  }, [value, setValue]);

  return [value, setValue];
};
```

2. Only methods

```javascript
export default value => {
  const buildSuperValue = React.useCallback(() => {
    // code
  }, [value]);
  return { buildSuperValue };
};
```

3. Data and methods

```javascript
// Single data
export default () => {
  const [value, setValue] = React.useState(1);

  const superMethod = React.useCallback(val => setValue(val), [setValue]);

  return [
    value,
    {
      setValue,
      superMethod
    }
  ];
};
```

```javascript
// Single data
export default (defValue1, defValue2 = 2) => {
  const [value1, setValue1] = React.useState(defValue1);
  const [value2, setValue2] = React.useState(defaValue2);

  const setValues = React.useCallback(
    (val1, val2) => {
      setValue1(val1);
      setValue2(val2);
    },
    [setValue1, setValue2]
  );

  return [
    value1,
    value2,
    {
      setValue1,
      setValue2
    }
  ];
};
```
