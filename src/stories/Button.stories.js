
import { fn } from '@storybook/test';
import qButton from './Button.vue';

export default {
  title: 'Button/Button',
  component: qButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: [ 'xs', 'sm', 'md', 'lg', 'xl' ] },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: () => {
      console.log('test')
    },
   },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
  },
};
// export const Flat = {
//   args:{
//     Flat: true,
//     label:'Button',
//   },
// };
export const Rounded = {
  args: {
    Rounded: true,
    label: 'Button',
  },
};
export const Outline = {
  args: {
    Outline: true,
    Flat: false,
    label: 'Button',
  },
};
// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };


