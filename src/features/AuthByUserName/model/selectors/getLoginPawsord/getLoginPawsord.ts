import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginPawsord = (state: StateSchema) => state?.loginForm?.password || '';
