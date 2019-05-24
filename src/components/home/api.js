import { getContentsData } from './data.js';

export const getContents = () => {
  return Promise.resolve(getContentsData());
};
