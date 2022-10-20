import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('get login loading', () => {
    test('should retuen loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'admin' },
        };

        expect(getLoginUserName(state as StateSchema)).toEqual('admin');
    });

    test('should retuen err', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
