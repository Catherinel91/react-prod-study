import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useStore } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReducersList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUserName } from '../../model/servises/loginByUserName/loginByUserName';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPawsord } from '../../model/selectors/getLoginPawsord/getLoginPawsord';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPawsord);
    const loading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUserName = useCallback((val) => {
        dispatch(loginActions.setUserName(val));
    }, [dispatch]);

    const onChangeUserPassword = useCallback((val) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <form className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('?????????? ??????????????????????')} />
                {error && <Text text={t('???? ?????????? ???????????????? ?????????? ?????? ????????????')} theme={TextTheme.ERROR} />}
                <Input value={username} onChange={onChangeUserName} autofocus placeholder={t('?????????????? username')} type="text" className="mb15" />
                <Input value={password} onChange={onChangeUserPassword} placeholder={t('?????????????? ????????????')} type="text" className="mb15" />
                <Button disabled={loading} onClick={onLoginClick}>{t('??????????')}</Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
