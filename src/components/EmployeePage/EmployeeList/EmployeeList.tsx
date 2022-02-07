import { memo } from 'react';

import style from './EmployeeList.module.css';

import { EmployeeListType } from 'components/EmployeePage/EmployeeList';
import { ReturnComponentType } from 'types';

const NAME_DELETED_BUTTON_VALUE = 'X';
export const EmployeeList = memo(
  ({
    employeeId,
    firstName,
    onClickDeletedUserEventHandle,
  }: EmployeeListType): ReturnComponentType => {
    const onClickDeletedUserEvent = (id: number): void => {
      onClickDeletedUserEventHandle(id);
    };

    return (
      <ul className={style.ul} key={employeeId}>
        <li className={style.li}>{firstName}</li>
        <button
          style={{ width: '25px', height: '21px' }}
          onClick={() => onClickDeletedUserEvent(employeeId)}
          type="button"
        >
          {NAME_DELETED_BUTTON_VALUE}
        </button>
      </ul>
    );
  },
);
