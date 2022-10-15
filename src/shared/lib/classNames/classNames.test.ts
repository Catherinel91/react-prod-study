/* eslint-disable max-len */
import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        const expected = 'class1 class2 class3';
        expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'class1 class2 class3 hovered scrollable';
        expect(classNames('class1', { hovered: true, scrollable: true }, ['class2', 'class3'])).toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'class1 class2 class3 hovered';
        expect(classNames('class1', { hovered: true, scrollable: false }, ['class2', 'class3'])).toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'class1 class2 class3 hovered';
        expect(classNames('class1', { hovered: true, scrollable: undefined }, ['class2', 'class3'])).toBe(expected);
    });
});
