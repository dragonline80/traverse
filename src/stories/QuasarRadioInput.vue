<template>
    <div>
      <q-radio
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        v-model="selectedValue"
        :disable="disabled"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const selectedValue = ref(props.modelValue);
  
  watch(selectedValue, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  