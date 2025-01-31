import { fn, within, userEvent, expect } from '@storybook/test';
import qInput from './InputTextfield.vue';
import { QIcon, QBtn } from 'quasar';
import { readonly, ref, watch } from 'vue';

export default {
  title: 'Forms/InputTextfield',
  component: qInput,
  tags: ['autodocs'],
  
  // argTypes: {
  //   size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  //   backgroundColor: { control: 'color' },
  // },
  
  argTypes: {
    // javascript: {
    //     description: 'v-model="{변수}"',
    //     table: {
    //       type: { summary: 'const {변수} = ref(null)' },
    //     },
    //     control: {
    //       type: false,
    //     },
    //   },
      modelValue: {
        table:{
          disable: true,
        }
      },
      // isLabel: {
      //   table:{
      //     disable: true,
      //   }
      // },
      clearbutton: {
        description: '값 입력됐을 경우 노출 되는 삭제 버튼',
        table: {
          type: { summary: '일반 아이콘: <q-btn flat icon="{아이콘 이름}" @click.stop.prevent="modelValue = null"/>, 이미지 아이콘: <q-btn flat icon="img:{아이콘 경로}" @click.stop.prevent="modelValue = null"/>' },
        },
        control: {
          type: false,
        },
      },
      type: {
        description: 'password / email / search / tel / url / time / date / text / textarea / number / datetime-local'
      },
      autofocus: {
        description: '페이지가 로드될 때 자동으로 포커스(focus)가 해당 요소로 이동',
      },
    },
    // args: { onClick: fn()},
  };

export const Standard = {
  // parameters: {
  //   docs: {
  //     source: { type: 'code'},
  //   },
  // },
  parameters: {
    docs: {
      source: {code: `
<script setup>
  const modelValue = ref();
  const inputArg = ref([
    {
      hasTitle: true, 
      items: [
        {title: 'Default Type input text', disabled: false, readonly: false, required: false, autofocus: false}
      ],
      const isPwd = ref(false);
    }
  ]);
</script>
<template v-for="(inputItem, key) in inputArg" :key="key">
  <q-input class="form__inputfield--standard" 
  :class="{'form__inputfield--hastitle': inputItem.hasTitle, 'form__inputfield--required': inputItems.required}" outlined 
  v-model="modelValue" autofocus="false" placeholder="내용 입력" 
  :title="\${inputItems.title} 입력" :disable="inputItems.disabled" 
  :readonly="inputItems.readonly" :required="inputItems.required" 
  :autofocus="inputItems.autofocus" v-for="inputItems in inputItem.items" 
  :key="inputItems.title"
  :type="isPwd ? 'password' : 'text'"
  >
      <template #before v-if="inputItem.hasTitle">
        <span class="form__inputfield--title">{{ inputItems.title }}</span>
      </template>
      <template v-slot:append>
        <q-icon v-if="type=='password'" :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        <q-btn v-if="modelValue" icon="clear" @click.stop.prevent="modelValue = null" class="cursor-pointer" role="button" />
      </template>
  </q-input>
</template>
        `,
      },
    },
  },
   render: (args) => ({
    components: {
      qInput, QIcon, QBtn
    },
      setup() {
      const modelValue = ref();
      const titlevalue = ref(args.titlevalue);
      const required = ref(args.required);
      const hasTitle = ref(args.hasTitle);
      const type = ref(args.type);
      const isPwd = ref(args.isPwd);
      const maxlength = ref(args.maxlength);
      return { args, modelValue, titlevalue, required, hasTitle, type, isPwd, maxlength};

    },
    template: `
    <q-input outlined v-model="modelValue" :autofocus="args.autofocus" :disable="args.disable" :readonly="args.readonly" placeholder="내용 입력" :title="args.titlevalue + '입력'" :hasTitle="args.hasTitle" class="form__inputfield--standard" :required="args.required" :titlevalue="args.titlevalue" :type="args.isPwd ? 'password' : args.type" :counter="args.maxlength > 0" :maxlength="args.maxlength">
        <template #before v-if="hasTitle">
          <span class="form__inputfield--title">{{ titlevalue }}</span>
        </template>
        <template #append>
          <q-btn icon="clear" v-if="modelValue && type != 'textarea'" @click.stop.prevent="modelValue = null, maxlength = '0'" class="cursor-pointer" role="button" />
          <q-icon
              v-if="type == 'password'"
              :name="args.isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="args.isPwd = !args.isPwd"
            />
        </template>
    </q-input>
    `
    ,
  }),
  args:{
    readonly:false,
    disable:false,
    autofocus:false,
    titlevalue:'Default Type input text',
    hasTitle: false,
    required:false,
    type:'text',
    isPwd: false,
    maxlength: ''
  },
};

export const Validation = {
 args:{
    ...Standard.args,
    titlevalue: 'Default Type input text',
    rules:[ val => !!val || '* Required', val => val.length < 2 || 'Please use maximum 1 character', ],
    noErrorIcon:true
 },
};

export const Title = {
  args: {
    ...Standard.args,
    titlevalue: "Has Title",
    hasTitle: true,
  }
}

export const Textarea = {
  args: {
    ...Standard.args,
    titlevalue: "Textarea",
    hasTitle: true,
    type: "textarea",
    maxlength: "10",
  }
}
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
