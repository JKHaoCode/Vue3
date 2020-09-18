<template>
  <div class="form-about">
    <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" @submit="onSubmit">
      <a-form-item label="Activity name">
        <a-input v-model:value="form.name" />
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
import { defineComponent } from 'vue';
import {
  Form, Input, Radio, Checkbox, Switch, DatePicker, Select, Button,
} from 'ant-design-vue';

const { Item } = Form;
const { Group } = Radio;
const CheckGroup = Checkbox.Group;
const { Option } = Select;

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
      console.log(this.form.type);
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
