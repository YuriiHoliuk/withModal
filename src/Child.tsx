import { FC, useEffect, memo } from 'react';

export interface CountMeta {
  isDividableBy3: boolean;
  isDividableBy5: boolean;
}

interface Props {
  onDecrement(): void;
  onIncrement(): void;
  countMeta: CountMeta;
}

export const Child: FC<Props> = memo((props) => {
  console.log('Child');

  const {
    onDecrement,
    onIncrement,
    countMeta,
  } = props;

  useEffect(() => {
    console.log('Child useEffect');
  });

  return (
    <div>
      <button
        type="button"
        onClick={onDecrement}
      >
        ➖
      </button>
      <button
        type="button"
        onClick={onIncrement}
      >
        ➕
      </button>
      <h2>Child</h2>
      <div>
        <p>isDividableBy3: {countMeta.isDividableBy3 ? 'true' : 'false'}</p>
        <p>isDividableBy5: {countMeta.isDividableBy5 ? 'true' : 'false'}</p>
      </div>
    </div>
  );
});

Child.displayName = 'Child';
