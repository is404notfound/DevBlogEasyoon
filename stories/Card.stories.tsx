import React from 'react';
import Card from '@/components/Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    isBadge: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: 'Title',
  description: 'Description',
  imgSrc: 'https://via.placeholder.com/544x306',
  href: '#',
  buttonPath: '/button',
  isBadge: true,
  badge: 'New'
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Title',
  description: 'Description',
  href: '#',
  buttonPath: '/button',
  isBadge: true,
  badge: 'New'
};

export const NoBadge = Template.bind({});
NoBadge.args = {
  title: 'Title',
  description: 'Description',
  imgSrc: 'https://via.placeholder.com/544x306',
  href: '#',
  buttonPath: '/button',
  isBadge: false,
  badge: 'New'
};
