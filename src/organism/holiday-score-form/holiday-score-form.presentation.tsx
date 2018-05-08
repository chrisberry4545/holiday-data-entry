import * as React from 'react';

import {
  HolidayScoreFormDispatchProps,
  HolidayScoreFormStateProps,
} from './';

import {
  MultiSelectorPresentation,
  SingleSelectorPresentation,
} from './../../molecules';

interface HolidayScoreFormCombinedProps
  extends HolidayScoreFormStateProps, HolidayScoreFormDispatchProps {}

export const HolidayScoreFormPresentation: React.SFC<
HolidayScoreFormCombinedProps
> = ({
  possibleActivities,
  possibleCostRanges,
  possibleFlightTimes,
  possibleFoodImportantOptions,
  possibleTemperatures,

  selectedActivityTypeIds,
  selectedCostRangeId,
  selectedFlightTimeId,
  selectedFoodImportanceId,
  selectedMonthNumber,
  selectedTemperatureId,

  toggleActivityCategory,
  chooseCostRange,
  chooseFlightTime,
  chooseFoodImportance,
  chooseMonthNumber,
  chooseTemperatureId,
}) => {
  return (
    <div>
      <div className='o-spacing-bottom'>
        <h3>Activities</h3>
        <MultiSelectorPresentation
          choices={ possibleActivities.map((activity) => ({
            _id: activity._id,
            label: activity.name,
          })) }
          selectedIds={ selectedActivityTypeIds }
          onSelected={ (selectedId) => toggleActivityCategory(selectedId) }
          onDeselected={ (deselectedId) => (
            toggleActivityCategory(deselectedId))
          }
        />
      </div>

      <div className='o-spacing-bottom'>
        <h3>Cost ranges</h3>
        <SingleSelectorPresentation
          choices={ possibleCostRanges.map((costRange) => ({
            _id: costRange._id,
            label: costRange.name,
          })) }
          selectedId={ selectedCostRangeId }
          onSelected={ (costRangeId) => chooseCostRange(costRangeId) } />
      </div>

      <div className='o-spacing-bottom'>
        <h3>Flight times</h3>
        <SingleSelectorPresentation
          choices={ possibleFlightTimes.map((flighTime) => ({
            _id: flighTime._id,
            label: flighTime.name,
          })) }
          selectedId={ selectedFlightTimeId }
          onSelected={ (flightTimeId) => chooseFlightTime(flightTimeId) } />
      </div>

      <div className='o-spacing-bottom'>
        <h3>Food importance</h3>
        <SingleSelectorPresentation
          choices={
            possibleFoodImportantOptions.map((foodImportanceOption) => ({
              _id: foodImportanceOption._id,
              label: foodImportanceOption.name,
            }))
          }
          selectedId={ selectedFoodImportanceId }
          onSelected={ (foodImportanceId) => (
            chooseFoodImportance(foodImportanceId))
            } />
      </div>

      <div className='o-spacing-bottom'>
        <h3>Temperatues</h3>
        <SingleSelectorPresentation
          choices={
            possibleTemperatures.map((temperature) => ({
              _id: temperature._id,
              label: temperature.name,
            }))
          }
          selectedId={ selectedTemperatureId }
          onSelected={
            (temperatureId) => chooseTemperatureId(temperatureId) }
          />
      </div>

    </div>
  );
};
