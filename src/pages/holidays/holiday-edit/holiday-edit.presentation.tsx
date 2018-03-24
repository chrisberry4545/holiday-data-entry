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
    <div className='o-container'>
      <h1>{ holiday.name } - edit</h1>

      <form>
        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation
            label={ 'Holiday name' }>
            <TextBoxPresentation value={ holiday.name }
              onChange={ (newValue) => (
                holidayNameChange(holiday._id, newValue)
              ) } />
          </InputWithLabelPresentation>
        </div>

        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation
            label={ 'Main image' }>
            <TextBoxPresentation value={ holiday.mainImageUrl }
              onChange={ (newValue) => (
                holidayMainImageChange(holiday._id, newValue)
              ) }/>
          </InputWithLabelPresentation>
        </div>
        <div className='o-spacing-bottom'>
          <img src={ holiday.mainImageUrl } />
        </div>

        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation
            label={ 'Country' }>
            <SelectBoxPresentation options={ allCountries.map((country) => ({
              label: country.name,
              value: country._id,
            })) } onChange={ (newValue: string) => holidayCountryChange(
              holiday._id, newValue,
            ) }/>
          </InputWithLabelPresentation>
        </div>

        <h3>Flights</h3>

        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation
            label={ 'Flight cost' }>
            <TextBoxPresentation value={ holiday.flight.cost }
              type='number'
              onChange={ (newValue) => (
                holidayFlightCostChange(holiday._id, parseInt(newValue, 10))
              ) }/>
          </InputWithLabelPresentation>
        </div>

        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation
            label={ 'Flight time' }>
            <SelectBoxPresentation options={ allFlights.map((flight) => ({
              label: flight.name,
              value: flight._id,
            })) } onChange={ (newValue) => holidayFlightTimeChange(
              holiday._id, newValue,
            ) }/>
          </InputWithLabelPresentation>
        </div>

        <h3>Activities</h3>

        { holiday.activities.map((activity, activityIndex) => (
          <div className='o-spacing-bottom'>
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
          </div>
        )) }

        <button type='button' className='o-spacing-bottom'
          onClick={ () => onAddActivity(holiday._id) }>
          Add activity
        </button>

        <h3>Highlights</h3>

        { holiday.highlights.map((highlight) => (
          <div key={ highlight._id }>
            <div className='o-spacing-bottom'>
              <InputWithLabelPresentation
                label={ 'Highlight title' }>
                <TextBoxPresentation value={ highlight.title }
                  onChange={ (newValue) => (
                    onHolidayHighlightTitleChanged(
                      holiday._id, highlight._id, newValue,
                    )
                  ) }/>
              </InputWithLabelPresentation>
            </div>

            <div className='o-spacing-bottom'>
              <InputWithLabelPresentation
                label={ 'Highlight description' }>
                <TextBoxPresentation value={ highlight.description }
                  onChange={ (newValue) => (
                    onHolidayHighlightDescriptionChanged(
                      holiday._id, highlight._id, newValue,
                    )
                  ) }/>
              </InputWithLabelPresentation>
            </div>

            <div className='o-spacing-bottom'>
              <InputWithLabelPresentation
                label={ 'Highlight image url' }>
                <TextBoxPresentation value={ highlight.imageUrl }
                  onChange={ (newValue) => (
                    onHolidayHighlightImageUrlChanged(
                      holiday._id, highlight._id, newValue,
                    )
                  ) }/>
              </InputWithLabelPresentation>
            </div>

            <div className='o-spacing-bottom'>
              <img src={ highlight.imageUrl } />
            </div>
          </div>
        )) }

        <button type='button' className='o-spacing-bottom'
          onClick={ () => onAddHighlight(holiday._id) }>
          Add highlight
        </button>
      </form>

      <button onClick={ printData }>
        Download data
      </button>
    </div>
  ) : <div>No holiday with this id</div>;
};
