import { getDataType } from 'types';

export const getData = async (url: string): Promise<getDataType[]> => {
  const res = await fetch(url);
  const json = await res.json();
  return json.data;
};
