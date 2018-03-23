import {
  StateInterface,
} from './../../models';

export const getIdFromUrl = (
  url: string,
) => {
  return url.substring(url.lastIndexOf('/') + 1, url.length);
};

export const getIdFromState = (
  state: StateInterface,
) => {
  return getIdFromUrl(state.router.location.pathname);
};
