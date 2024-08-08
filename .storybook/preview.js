/** @type { import('@storybook/vue3').Preview } */
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
// quasar:
import 'quasar/dist/quasar.css';
import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar'

setup((app) => {
  app.use(Quasar, {});
});
// end

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;

