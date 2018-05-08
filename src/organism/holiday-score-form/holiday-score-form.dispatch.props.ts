export interface HolidayScoreFormDispatchProps {
  toggleActivityCategory: (activityCategoryId: string) => void;
  chooseCostRange: (costRangeId: string) => void;
  chooseFlightTime: (flightTimeId: string) => void;
  chooseFoodImportance: (foodImportanceId: string) => void;
  chooseMonthNumber: (monthNumberId: string) => void;
  chooseTemperatureId: (temperatureId: string) => void;
}
