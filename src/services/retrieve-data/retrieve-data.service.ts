import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  AllDataInterface,
} from './../../models';

export class RetrieveDataService {
  public getBackendData(): Promise<AllDataInterface> {
    return fetch(
      `process.env.BACKEND_URLdata`,
    ).then((resp) => resp.json());
  }
}
