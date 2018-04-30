import {
  ContinentInterface,
  CountryInterface,
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface CountryFormStateProps {
  allContinents: ContinentInterface[];
  allTemperatures: TemperatureInterface[];
  country: CountryInterface;
}
