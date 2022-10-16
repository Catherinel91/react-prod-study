import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { Omit } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        value, onChange, className, type = 'text', placeholder, autofocus, ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <label className={classNames(cls.label, {}, [cls[className]])}>
            <input ref={inputRef} placeholder={placeholder} className={cls.input} value={value} onChange={onChangeHandler} type={type} {...otherProps} />
        </label>
    );
});
