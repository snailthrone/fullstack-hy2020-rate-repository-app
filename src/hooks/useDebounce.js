import { useRef, useState } from 'react';

const useDebounce = debounceTime => {
  const [value, setValue] = useState(null);
  const debouncer = useRef();

  const updater = val => {
    window.clearTimeout(debouncer.current);

    debouncer.current = window.setTimeout(() => {
      setValue(val);
    }, debounceTime);
  };

  return [value, updater];
};

export default useDebounce;
