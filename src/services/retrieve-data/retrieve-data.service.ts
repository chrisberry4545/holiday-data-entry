import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  AllDataInterface,
} from './../../models';

const backendUrl = `process.env.BACKEND_URLdata`;

export class RetrieveDataService {
  public getBackendData(): Promise<AllDataInterface> {
    return fetch(backendUrl).then((resp) => resp.json());
  }

  public saveHolidayData(
    holiday: HolidayInterface,
  ) {
    return fetch(backendUrl, {
      body: JSON.stringify(holiday),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  }
}
