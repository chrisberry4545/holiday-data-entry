import * as React from 'react';

import {
  CountryFormDispatchProps,
  CountryFormStateProps,
} from './';

import {
  SelectBoxPresentation,
  TextAreaPresentation,
  TextBoxPresentation,
} from './../../elements';

import {
  InputWithLabelPresentation,
} from './../../molecules';

import {
  getDisplayMonthFromNumber,
} from './../../helpers';

interface CountryFormCombinedProps
  extends CountryFormStateProps, CountryFormDispatchProps {}

export const CountryFormPresentation: React.SFC<
  CountryFormCombinedProps
> = ({
  country,
  allContinents,
  allTemperatures,
  onCountryContinentChanged,
  onCountryFoodScoreChanged,
  onCountryMonthlyTemperatureChanged,
  onCountryNameChanged,
}) => {
  return country ? (
    <div>
      <section className='o-form-section'>
        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation label={ 'Name' }>
            <TextBoxPresentation value={ country.name }
              onChange={ (newName) => (
                onCountryNameChanged(country._id, newName)
                ) }/>
          </InputWithLabelPresentation>
        </div>

        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation label={ 'Continent' }>
              <SelectBoxPresentation options={
                allContinents.map((continent) => ({
                  label: continent.name,
                  value: continent._id,
                })) } onChange={ (newContinentId) => onCountryContinentChanged(
                  country._id, newContinentId,
                ) }
                selectedValue={ country.continent._id }
              />
          </InputWithLabelPresentation>
        </div>

        <div className='o-spacing-bottom'>
          <InputWithLabelPresentation label={ 'Food score' }>
            <TextBoxPresentation value={ country.foodScore } type='number'
              onChange={ (newFoodScore) => (
                onCountryFoodScoreChanged(
                  country._id, parseInt(newFoodScore, 10),
                )
                ) }/>
          </InputWithLabelPresentation>
        </div>

      </section>

      <section className='o-form-section'>
        <h3>Average monthly temperatures</h3>
        {
          Object.keys(country.monthlyTemperatures).map((monthIndex) => (
            <div className='o-spacing-bottom' key={ monthIndex }>
              <InputWithLabelPresentation
                label={
                  `${getDisplayMonthFromNumber(
                    parseInt(monthIndex, 10,
                  ))} temperature`
                }>
                <SelectBoxPresentation options={
                  allTemperatures.map((temperature) => ({
                    label: temperature.name,
                    value: temperature._id,
                  })) }
                  onChange={
                    (newTemperatureId) => onCountryMonthlyTemperatureChanged(
                      country._id, parseInt(monthIndex, 10), newTemperatureId,
                    )
                  }
                  selectedValue={ country.monthlyTemperatures[monthIndex]._id }
                />
              </InputWithLabelPresentation>
            </div>
          ))
        }
      </section>
    </div>
  ) : <div>No country found with this id</div>;
};
