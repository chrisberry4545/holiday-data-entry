export interface CountryFormDispatchProps {
  onCountryContinentChanged: (
    countryId: string,
    newContinentId: string,
  ) => void;
  onCountryFoodScoreChanged: (
    countryId: string,
    newFoodScore: number,
  ) => void;
  onCountryLatChanged: (
    countryId: string,
    newLat: string,
  ) => void;
  onCountryLongChanged: (
    countryId: string,
    newLong: string,
  ) => void;
  onCountryMonthlyTemperatureChanged: (
    countryId: string,
    monthIndex: number,
    newTemperatureId: string,
  ) => void;
  onCountryNameChanged: (
    countryId: string,
    newName: string,
  ) => void;
}
