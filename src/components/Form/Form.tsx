import React, { BaseSyntheticEvent, useState } from 'react';

import styles from './Form.module.css';
import { IUserInput } from '../../interfaces/user-input.interface';

const initialState: IUserInput = {
  currentSavings: 0,
  duration: 0,
  expectedReturn: 0,
  yearlyContribution: 0
}

export const Form: React.FC<{ calculateResults: (userInput: IUserInput) => void }> = (props) => {
  const [userInput, setUserInput] = useState(initialState);

  const resetFormHandler = () => {
    setUserInput(() => initialState);
    props.calculateResults(initialState);
  }

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log('value', event.target.value);
    console.log('userInput', userInput);
    props.calculateResults(userInput);
  }

  const changeHandler = (field: string, change: number) => {
    setUserInput((prevState) => ({ ...prevState, [field]: change }));
  }

  return (
    <form className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(event) => changeHandler('currentSavings', +event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(event) => changeHandler('yearlyContribution', +event.target.value)}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) => changeHandler('expectedReturn', +event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => changeHandler('duration', +event.target.value)}
          />
        </p>
      </div>
      <p className={styles['actions']}>
        <button type="reset" className={styles['buttonAlt']} onClick={resetFormHandler}>
          Reset
        </button>
        <button type="submit" className={styles['button']} onClick={submitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
}
