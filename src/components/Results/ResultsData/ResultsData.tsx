import React from 'react';

import styles from './ResultsData.module.css';
import { IResult } from '../../../interfaces/result.interface';

export const ResultsData: React.FC<{ results: IResult[] }> = (props) => {

  return (
    <table className={styles['result']}>
      <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      {props.results.map((result) => {
        return (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{result.savingsEndOfYear}</td>
            <td>{result.yearlyInterest}</td>
            <td>{result.totalInterest}</td>
            <td>{result.investedCapital}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}
