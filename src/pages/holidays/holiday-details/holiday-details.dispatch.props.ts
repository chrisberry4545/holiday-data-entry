import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayDetailsDispatchProps {
  goToEditHoliday: (holiday: HolidayInterface) => void;
}
