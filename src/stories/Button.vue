
<template>
  <div class="list-item">
    <q-btn :outline="Outline" :rounded="Rounded" @click="onClick" :style="style" :size="size">{{ label }}</q-btn>
  </div>
</template>

<script>
import { color } from 'storybook/internal/theming';
import { reactive, computed, watch, ref } from 'vue';
export default {
  name: 'qButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    Rounded: {
      type: Boolean,
      default: false,
    },
    Outline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    return {
      // classes: computed(() => ({
      //   'button': true,
      //   'bg-primary': props.Primary,
      //   'button': !props.Primary,
      // })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.color,
      })),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>