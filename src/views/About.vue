<template>
  <div class="form-about">
    <h1 id="h1" ref="headline">Headline</h1>
    <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" @submit="onSubmit">
      <a-form-item label="Activity name">
        <a-input v-model:value="form.name" placeholder="please input" />
      </a-form-item>
      <a-form-item label="Activity zone">
        <a-select v-model:value="form.region" placeholder="please select your zone">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Activity time">
        <a-date-picker
          v-model:value="form.date1"
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%;"
        />
      </a-form-item>
      <a-form-item label="Instant delivery">
        <a-switch v-model:checked="form.delivery" />
      </a-form-item>
      <a-form-item label="Activity type">
        <a-checkbox-group v-model:checked="form.type">
          <a-checkbox value="1" name="type">
            Online
          </a-checkbox>
          <a-checkbox value="2" name="type">
            Promotion
          </a-checkbox>
          <a-checkbox value="3" name="type">
            Offline
          </a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="Resources">
        <a-radio-group v-model:value="form.resource">
          <a-radio value="1">
            Sponsor
          </a-radio>
          <a-radio value="2">
            Venue
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Activity form">
        <a-input v-model:value="form.desc" type="textarea" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">
          Create
        </a-button>
        <a-button style="margin-left: 10px;">
          Cancel
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // defineAsyncComponent,
} from 'vue';
import {
  Form, Input, Radio, Checkbox, Switch, DatePicker, Select, Button,
} from 'ant-design-vue';

const { Item } = Form;
const { Group } = Radio;
const CheckGroup = Checkbox.Group;
const { Option } = Select;

// interface Data {
//   [key: string]: unknown;
// }
//
// interface SetupContext {
//   attrs: Data;
//   slots: Slots;
//   emit: (event: string, ...args: unknown[]) => void;
// }

export default defineComponent({
  components: {
    'a-form': Form,
    'a-form-item': Item,
    'a-input': Input,
    'a-radio': Radio,
    'a-checkbox': Checkbox,
    'a-checkbox-group': CheckGroup,
    'a-switch': Switch,
    'a-date-picker': DatePicker,
    'a-select': Select,
    'a-button': Button,
    'a-radio-group': Group,
    'a-select-option': Option,
  },
  // setup(props: , context: SetupContext) {
  //   // const h1 = document.createElement('h1');
  //   // console.log(h1);
  //   console.log(props, context);
  //   const headline = ref<HTMLElement|null>(null);
  //   onMounted(() => {
  //     console.log(headline.value);
  //     // headline.value?.textContent ;
  //     (headline.value as HTMLElement).innerText = '123123123';
  //   });
  //
  //   onBeforeMount(() => {
  //
  //   });
  //
  //   // 返回是固定的 不能更改
  //   return {
  //     headline,
  //     // form: {
  //     //   name: '你的',
  //     //   region: undefined,
  //     //   date1: undefined,
  //     //   delivery: false,
  //     //   type: [],
  //     //   resource: '',
  //     //   desc: '',
  //     // },
  //   };
  // },
  beforeCreate(): void {
    console.log('beforeCreate');
  },

  created(): void {
    console.log('create');
  },

  beforeMount(): void {
    console.log('beforeMount');
  },

  mounted(): void {
    console.log('mounted');
  },

  beforeUpdate(): void {
    console.log('beforeUpdate');
  },

  updated(): void {
    console.log('Update');
  },

  beforeUnmount(): void {
    console.log('beforeUnmount');
  },

  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form.name);
    },
  },
});
</script>

<style lang="less" scoped>
  .form-about{
    text-align: center;
    width: 600px;
  }
</style>
