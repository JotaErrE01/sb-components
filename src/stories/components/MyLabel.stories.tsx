import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select', options: ['normal', 'h1'] },
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    fontColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args  } />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false, //true capitalizes all letters
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac',
}
