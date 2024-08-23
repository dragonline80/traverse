<template>
  <q-input outlined v-model="modelValue" class="form__inputfield--standard" :class="classes" :titlevalue="titlevalue" title="`${titlevalue} 입력`" :hasTitle="hasTitle" :required="required" :rules="type != 'textarea' ? [ val => !!val || '* Required', val => val.length < 2 || 'Please use maximum 1 character', ] : []" noErrorIcon :type="isPwd ? 'password' : type" :counter="maxlength.length > 0" :maxlength="maxlength">
    <template #before v-if="hasTitle">
      <span class="form__inputfield--title">{{ titlevalue }}</span>
    </template>
    <template #append>
      <q-btn v-if="modelValue && type != 'textarea'" flat icon="clear" @click.stop.prevent="modelValue = null, counter='0'" />
      <q-icon
        v-if="type=='password'"
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>
  
<script>
  import '../assets/scss/_form.scss'
  import { computed, reactive, ref } from 'vue';
  
  export default {
    name: 'qInput', 
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      titlevalue: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        defalut: false,
      },
      hasTitle: {
        type: Boolean,
        defalut: false,
      },
      type: {
        type: String,
        defalut: 'text',
      },
      maxlength: {
        type: String,
        defalut: ''
      },
      isPwd: {
        type: Boolean,
        defalut: false,
      },
    },
  
    // emits: ['click'],
  
    setup(props, { emit }) {
      props = reactive(props);
      const modelValue = ref(props.modelValue);
      const isPwd = ref(props.isPwd);
      const maxlength = ref(props.maxlength);
      return {
        modelValue,
        isPwd,
        maxlength,
        classes: computed(() => ({
          'form__inputfield--hastitle': props.hasTitle,
          'form__inputfield--required': props.required,
          'form__inputfield--maxlength': modelValue.value && modelValue.value.length == (maxlength.value || 0)
        })),
        // onClick() {
        //   emit('click');
        // },

      };
    },
  };
  </script>
  