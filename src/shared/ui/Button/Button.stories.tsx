import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BACKGROUND = Template.bind({});
BACKGROUND.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};

export const BACKGROUND_INVERTED = Template.bind({});
BACKGROUND_INVERTED.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
};

export const SizeButtonSquareM = Template.bind({});
SizeButtonSquareM.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: SizeButton.M,
    square: true,
};

export const SizeButtonSquareL = Template.bind({});
SizeButtonSquareL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: SizeButton.L,
    square: true,
};

export const SizeButtonSquareXL = Template.bind({});
SizeButtonSquareXL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: SizeButton.XL,
    square: true,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    disabled: true,
};
