import { useCallback, useEffect, useState } from 'react';

import style from './EmployeePage.module.css';

import { EmployeeList } from 'components/EmployeePage/EmployeeList';
import { InputBlock } from 'components/InputBlock/InputBlock';
import { useInput } from 'hooks';
import { getDataType, ReturnComponentType } from 'types';
import { getData } from 'utils';

export const EmployeePage = (): ReturnComponentType => {
  const [arrayEmployees, setArrayEmployees] = useState<getDataType[]>([]);
  const { inputValue, handleInputValueChange } = useInput();

  const onClickDeletedUserEventHandle = useCallback(
    (id: number): void => {
      setArrayEmployees(arrayEmployees.filter(el => el.id !== id));
    },
    [arrayEmployees],
  );

  const onClickAddedUserEventHandle = useCallback((): void => {
    const randomId = new Date().getTime();
    if (!inputValue.length) return;
    setArrayEmployees([...arrayEmployees, { id: randomId, first_name: inputValue }]);
    handleInputValueChange('');
  }, [inputValue]);

  const onChangeInputHandle = useCallback(
    (value: string): void => handleInputValueChange(value),
    [inputValue],
  );

  useEffect(() => {
    (async () => {
      if (process.env.REACT_APP_BASE_URL) {
        const data = await getData(process.env.REACT_APP_BASE_URL);
        setArrayEmployees(data);
      }
    })();
  }, []);

  return (
    <div className={style.contentWrapperBlock}>
      <div className={style.contentWrapper_listBlockWrapper}>
        {arrayEmployees.map(({ id, first_name: firstName }) => (
          <EmployeeList
            key={id}
            employeeId={id}
            firstName={firstName}
            onClickDeletedUserEventHandle={onClickDeletedUserEventHandle}
          />
        ))}
      </div>
      <div>
        <InputBlock
          inputValue={inputValue}
          onClickAddedUserEventHandle={onClickAddedUserEventHandle}
          onChangeInputHandle={onChangeInputHandle}
        />
      </div>
    </div>
  );
};
