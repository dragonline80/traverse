import QuasarTable from './QuasarTable.vue';

export default {
  title: 'Forms/QuasarTable',
  component: QuasarTable,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: { QuasarTable },
  setup() {
    return { args };
  },
  template: '<QuasarTable v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};