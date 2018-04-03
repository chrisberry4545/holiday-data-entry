import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayListDispatchProps {
  addNewHoliday: () => void;
  goToHolidayDetails: (holiday: HolidayInterface) => void;
  goToHolidayEdit: (holiday: HolidayInterface) => void;
}
