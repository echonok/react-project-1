import React from 'react';

import styles from './NoData.module.css';

export const NoData: React.FC = () => {
  return (
    <div className={styles['no-results']}>
      No data yet
    </div>
  );
}
