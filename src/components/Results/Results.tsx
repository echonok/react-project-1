import React from 'react';

import { IResult } from '../../interfaces/result.interface';
import { NoData } from './NoData/NoData';
import { ResultsData } from './ResultsData/ResultsData';

export const Results: React.FC<{ results: IResult[] }> = (props) => {
  if (props.results.length === 0) {
    return <NoData/>
  }
  return <ResultsData results={props.results}/>
}
