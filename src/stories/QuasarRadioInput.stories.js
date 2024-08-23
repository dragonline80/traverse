import QuasarRadioInput from './QuasarRadioInput.vue';

export default {
  title: 'Forms/QuasarRadioInput',
  component: QuasarRadioInput,
  argTypes: {
    options: {
      control: 'array',
      description: 'List of options for the radio inputs',
    },
    modelValue: {
      control: 'text',
      description: 'The currently selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio inputs are disabled',
    },
  },
};

const Template = (args) => ({
  components: { QuasarRadioInput },
  setup() {
    return { args };
  },
  template: '<QuasarRadioInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  modelValue: 'option1',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Option A', value: 'optionA' },
    { label: 'Option B', value: 'optionB' },
  ],
  modelValue: 'optionA',
  disabled: true,
};
