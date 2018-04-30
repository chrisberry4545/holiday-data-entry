import {
  StateInterface,
} from './../../models';

import { createSelector } from 'reselect';

export const selectRouteState = (state: StateInterface) => state.router;

export const selectLocation = createSelector(
  selectRouteState,
  (route) => route.location,
);

export const selectPathname = createSelector(
  selectLocation,
  (location) => location.pathname,
);

export const selectIdFromState = createSelector(
  selectPathname,
  (pathname) => pathname.substring(
    pathname.lastIndexOf('/') + 1, pathname.length,
  ),
);
