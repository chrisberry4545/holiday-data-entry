export interface HolidayFormDispatchProps {
  holidayNameChange: (
    holidayId: string,
    newName: string,
  ) => void;
  holidayMainImageChange: (
    holidayId: string,
    newMainImageUrl: string,
  ) => void;
  holidayDescriptionChanged: (
    holidayId: string,
    newHolidayDescription: string,
  ) => void;
  holidayCountryChange: (
    holidayId: string,
    newCountryId: string,
  ) => void;
  holidayFlightTimeChange: (
    holidayId: string,
    newFlightId: string,
  ) => void;
  holidayFlightCostChange: (
    holidayId: string,
    newFlightCost: number,
  ) => void;

  onDeleteActivity: (holidayId: string, activityId: string) => void;
  onAddActivity: (holidayId: string) => void;
  onDeleteHighlight: (holidayId: string, highlightId: string) => void;
  onAddHighlight: (holidayId: string) => void;

  onHolidayActivityChanged: (
    holidayId: string,
    activityIndex: number,
    newActivityId: string,
  ) => void;

  onHolidayHighlightTitleChanged: (
    holidayId: string,
    highlightId: string,
    newHighlightName: string,
  ) => void;
  onHolidayHighlightDescriptionChanged: (
    holidayId: string,
    highlightId: string,
    newHighlightDescription: string,
  ) => void;
  onHolidayHighlightImageUrlChanged: (
    holidayId: string,
    highlightId: string,
    newHighlightImageUrl: string,
  ) => void;
}
