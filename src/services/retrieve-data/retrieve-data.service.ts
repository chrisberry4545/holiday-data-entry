import {
  API_URLS,
  CountryInterface,
  HolidayInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  AllDataInterface,
} from './../../models';

const backendBaseUrl = `process.env.BACKEND_URL`;
const backendDataUrl = `${backendBaseUrl}data`;
const backendCountryUrl = `${backendDataUrl}/country`;

const getJSONHeaders = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
});

export class RetrieveDataService {
  public getBackendData(): Promise<AllDataInterface> {
    return fetch(backendDataUrl).then((resp) => resp.json());
  }

  public saveHolidayData(
    holiday: HolidayInterface,
  ) {
    return fetch(backendDataUrl, {
      body: JSON.stringify(holiday),
      headers: getJSONHeaders(),
      method: 'PATCH',
    });
  }

  public createNewHoliday(holiday: HolidayInterface) {
    return fetch(backendDataUrl, {
      body: JSON.stringify(holiday),
      headers: getJSONHeaders(),
      method: 'POST',
    });
  }

  public saveCountryData(country: CountryInterface) {
    return fetch(backendCountryUrl, {
      body: JSON.stringify(country),
      headers: getJSONHeaders(),
      method: 'PATCH',
    });
  }

  public createNewCountry(country: CountryInterface) {
    return fetch(backendCountryUrl, {
      body: JSON.stringify(country),
      headers: getJSONHeaders(),
      method: 'POST',
    });
  }

  public getHolidayResults(
    userInput: UserInputInterface,
  ): Promise<HolidayInterface[]> {
    return fetch(`${backendBaseUrl}${API_URLS.HOLIDAY_RESULTS}`, {
      body: JSON.stringify(userInput),
      headers: getJSONHeaders(),
      method: 'POST',
    }).then((resp) => resp.json());
  }
}
