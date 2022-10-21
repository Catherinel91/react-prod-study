import { counterActions, counterReducer } from 'entities/Counter/model/slice/CounterSllice';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';

describe('getCounterSlice', () => {
    test('should return decr val', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('should return incr val', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('if empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
