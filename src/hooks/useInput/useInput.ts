import { useCallback, useMemo, useState } from 'react';

import { UseInputReturnType } from './types';

const EMPTY_STRING = '';

export const useInput = (): UseInputReturnType => {
  const [inputValue, setInputValue] = useState(EMPTY_STRING);

  const handleInputValueChange = useCallback(
    (newValue: string) => setInputValue(newValue),
    [],
  );

  return useMemo(
    () => ({ inputValue, handleInputValueChange }),
    [inputValue, handleInputValueChange],
  );
};
