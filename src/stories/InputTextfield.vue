<template>
  <q-input outlined autofocus :dense="false" :placeholder="Placeholder" :readonly="Readonly" :disable="Disabled" v-model="modelValueStandard" clearable
  clear-icon="close">
  </q-input>
</template>
  
<script>
  import '../assets/scss/form.scss'
  import { reactive, computed, ref, watch } from 'vue';
  
  export default {
    name: 'qInput', 
    props: {
      Disabled: {
        type: Boolean,
        default: true,
      },
      Readonly: {
        type: Boolean,
        default: false,
      },
      Placeholder: {
        type: String,
        default: '내용입력'
      },

    },
  
    emits: ['click'],
  
    setup(props, { emit }) {
      props = reactive(props);
      const modelValueStandard = ref();
      return {
        //text field bind
        modelValueStandard,
        onClick() {
          emit('click');
        },

      };
    },
  };
  </script>
  