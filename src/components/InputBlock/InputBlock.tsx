import { ChangeEvent, memo } from 'react';

import { InputBlockType } from 'components/InputBlock/type';
import { ReturnComponentType } from 'types';

const NAME_ADDED_BUTTON_VALUE = 'Add';

export const InputBlock = memo(
  ({
    inputValue,
    onChangeInputHandle,
    onClickAddedUserEventHandle,
  }: InputBlockType): ReturnComponentType => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
      onChangeInputHandle(e.currentTarget.value);
    };

    const onClickAddedUserEvent = (): void => onClickAddedUserEventHandle();

    return (
      <>
        <input value={inputValue} onChange={onChangeInput} placeholder="new user" />
        <button onClick={onClickAddedUserEvent} type="button">
          {NAME_ADDED_BUTTON_VALUE}
        </button>
      </>
    );
  },
);
