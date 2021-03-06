import React from 'react';

import { TestField, TestItem } from '../../models';
import FormField from './FormField';

type GridProps = {
  testId: string;
  items: TestItem[];
  columns?: number;
};

const Grid: React.FC<GridProps> = ({ testId, items, columns }) => {
  return (
    <div className={`tests-grid${columns ? ` tests-grid--cols${columns}` : ''}`}>
      {items.map(({ id: itemId, fields }) => (
        <div key={`test:${testId}::item:${itemId}`} className="tests-grid_cell">
          {fields.map((field: TestField, m: number) => {
            const name = `test:${testId}::item:${itemId}::field:${m}`;
            return <FormField key={name} name={name} field={field} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
