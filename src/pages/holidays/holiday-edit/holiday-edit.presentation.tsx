import * as React from 'react';

import {
  HolidayEditDispatchProps,
  HolidayEditStateProps,
} from './';

import {
  SelectBoxPresentation,
  TextBoxPresentation,
} from './../../../elements';

import {
  InputWithLabelPresentation,
} from './../../../molecules';

interface HolidayEditCombinedProps
  extends HolidayEditStateProps, HolidayEditDispatchProps {}

export const HolidayEditPresentation: React.SFC<
  HolidayEditCombinedProps
> = ({
  holiday, allActivities, allCountries, allFlights,
  printData, holidayNameChange, holidayMainImageChange,
  holidayCountryChange, holidayFlightTimeChange, holidayFlightCostChange,
  onAddActivity, onAddHighlight, onHolidayActivityChanged,
  onHolidayHighlightDescriptionChanged,
  onHolidayHighlightImageUrlChanged, onHolidayHighlightTitleChanged,
}) => {
  return holiday ? (
    <div>
      <h1>{ holiday.name } - edit</h1>

      <h3>Basic info</h3>
      <form>
        <InputWithLabelPresentation
          label={ 'Holiday name' }>
          <TextBoxPresentation value={ holiday.name }
            onChange={ (newValue) => (
              holidayNameChange(holiday._id, newValue)
            ) } />
        </InputWithLabelPresentation>

        <InputWithLabelPresentation
          label={ 'Main image' }>
          <TextBoxPresentation value={ holiday.mainImageUrl }
            onChange={ (newValue) => (
              holidayMainImageChange(holiday._id, newValue)
            ) }/>
        </InputWithLabelPresentation>
        <div>
          <img src={ holiday.mainImageUrl } />
        </div>

        <InputWithLabelPresentation
          label={ 'Country' }>
          <SelectBoxPresentation options={ allCountries.map((country) => ({
            label: country.name,
            value: country._id,
          })) } onChange={ (newValue: string) => holidayCountryChange(
            holiday._id, newValue,
          ) }/>
        </InputWithLabelPresentation>

        <h3>Flight info</h3>

        <InputWithLabelPresentation
          label={ 'Flight cost' }>
          <TextBoxPresentation value={ holiday.flight.cost }
            type='number'
            onChange={ (newValue) => (
              holidayFlightCostChange(holiday._id, parseInt(newValue, 10))
            ) }/>
        </InputWithLabelPresentation>

        <InputWithLabelPresentation
          label={ 'Flight time' }>
          <SelectBoxPresentation options={ allFlights.map((flight) => ({
            label: flight.name,
            value: flight._id,
          })) } onChange={ (newValue) => holidayFlightTimeChange(
            holiday._id, newValue,
          ) }/>
        </InputWithLabelPresentation>

        <h3>Activities</h3>

        { holiday.activities.map((activity, activityIndex) => (
          <InputWithLabelPresentation
            key={ activity._id }
            label={ 'Activity name' }>
            <SelectBoxPresentation options={
                allActivities.map((activityCategory) => ({
                  label: activityCategory.name,
                  value: activityCategory._id,
                }))
              }
              onChange={ (newValue) => (
                onHolidayActivityChanged(
                  holiday._id, activityIndex, newValue,
                )
              ) }/>
          </InputWithLabelPresentation>
        )) }

        <button type='button' onClick={ () => onAddActivity(holiday._id) }>
          Add activity
        </button>

        <h3>Highlights</h3>

        { holiday.highlights.map((highlight) => (
          <div key={ highlight._id }>
            <InputWithLabelPresentation
              label={ 'Highlight title' }>
              <TextBoxPresentation value={ highlight.title }
                onChange={ (newValue) => (
                  onHolidayHighlightTitleChanged(
                    holiday._id, highlight._id, newValue,
                  )
                ) }/>
            </InputWithLabelPresentation>

            <InputWithLabelPresentation
              label={ 'Highlight description' }>
              <TextBoxPresentation value={ highlight.description }
                onChange={ (newValue) => (
                  onHolidayHighlightDescriptionChanged(
                    holiday._id, highlight._id, newValue,
                  )
                ) }/>
            </InputWithLabelPresentation>

            <InputWithLabelPresentation
              label={ 'Highlight image url' }>
              <TextBoxPresentation value={ highlight.imageUrl }
                onChange={ (newValue) => (
                  onHolidayHighlightImageUrlChanged(
                    holiday._id, highlight._id, newValue,
                  )
                ) }/>
            </InputWithLabelPresentation>

            <img src={ highlight.imageUrl } />
          </div>
        )) }

        <button type='button' onClick={ () => onAddHighlight(holiday._id) }>
          Add highlight
        </button>
      </form>

      <button onClick={ printData }>
        Download data
      </button>
    </div>
  ) : <div>No holiday with this id</div>;
};
