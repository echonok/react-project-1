import React, { useState } from 'react';

import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Results } from './components/Results/Results';
import { IResult } from './interfaces/result.interface';
import { IUserInput } from './interfaces/user-input.interface';

const initialState: IResult[] = []

const App: React.FC = () => {
  const [results, setResults] = useState(initialState);

  const calculateHandler = (userInput: IUserInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData: IResult[] = []; // per-year results

    let currentSavings = userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const result: IResult = {
        year: i + 1,
        savingsEndOfYear: Number(currentSavings.toFixed(2)),
        yearlyInterest: Number(yearlyInterest.toFixed(2)),
        totalInterest: Number((currentSavings - userInput.currentSavings - yearlyContribution * (i + 1)).toFixed(2)),
        investedCapital: Number((userInput.currentSavings - yearlyContribution * (i + 1)).toFixed(2))
      }
      yearlyData.push(result);
    }

    // do something with yearlyData ...
    setResults(yearlyData);
  };

  return (
    <div>
      <Header/>
      <Form calculateResults={calculateHandler}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
