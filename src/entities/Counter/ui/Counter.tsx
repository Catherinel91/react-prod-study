/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSllice';

export const Counter = () => {
  const counterVal = useSelector(getCounterValue);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterVal}</h1>
      <Button data-testid="incr-btn" onClick={increment}>increment</Button>
      <Button data-testid="decr-btn" onClick={decrement}>decrement</Button>
    </div>
  );
};
