export interface CountryFormDispatchProps {
  onCountryContinentChanged: (
    countryId: string,
    newContinentId: string,
  ) => void;
  onCountryFoodScoreChanged: (
    countryId: string,
    newFoodScore: number,
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
