import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('get login err', () => {
    test('should retuen err', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };

        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
