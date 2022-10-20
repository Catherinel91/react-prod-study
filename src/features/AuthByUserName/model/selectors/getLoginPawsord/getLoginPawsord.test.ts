import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPawsord } from './getLoginPawsord';

describe('get login loading', () => {
    test('should retuen loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '123' },
        };

        expect(getLoginPawsord(state as StateSchema)).toEqual('123');
    });

    test('should retuen err', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPawsord(state as StateSchema)).toEqual('');
    });
});
