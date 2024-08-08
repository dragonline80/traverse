import { fn, within, userEvent, expect } from '@storybook/test';
import qInput from './InputTextfield.vue';
import { ref, watch } from 'vue';

export default {
  title: 'Forms/InputTextfield',
  component: qInput,
  tags: ['autodocs'],
  
  // argTypes: {
  //   size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  //   backgroundColor: { control: 'color' },
  // },
  argTypes: {
    javascript: {
        description: 'v-model="{변수}"',
        table: {
          type: { summary: 'const {변수} = ref(null)' },
        },
        control: {
          type: false,
        },
      },
    },
    args: { onClick: fn() },
    // parameters: {
    //   docs: {
    //     source: { type: 'auto' },
    //   },
    // },
  };

export const Primary = {
  argTypes:{
    table: {
      disable: true,      
    },
  },
  args:{
    autofocus:true,
    Disabled:false,
    Readonly:false,
    Placeholder: '내용입력',
  },
}

// export const Disabled = {
//   args:{
//     Disabled:true,
//   },
// };

// export const Readonly = {
//   args: {
//     Readonly: true,
//   },
// };

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

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
