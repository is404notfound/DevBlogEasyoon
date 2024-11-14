// Button.stories.tsx
import React from 'react';
import Button from '@/components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['S', 'M', 'L']
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
  }
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'M',
  text: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  size: 'M',
  text: 'Secondary Button'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  size: 'M',
  text: 'Tertiary Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'primary',
  size: 'M',
  text: 'Disabled Button',
  disabled: true
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  type: 'primary',
  size: 'M',
  text: 'Start Icon Button',
  startIcon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2H10v-2z"/></svg>
};