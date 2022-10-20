import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('get login loading', () => {
    test('should retuen loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { loading: true },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should retuen err', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
