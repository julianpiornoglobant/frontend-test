import { ChangeEvent, useEffect, useState } from 'react';

type Field =
  {
    type: string,
    init?: string
  }

export function useField({ type, init = '' }: Field) {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(init);
  }, [init]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return { value, onChange, type }
}
