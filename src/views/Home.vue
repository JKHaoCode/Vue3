<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <a-button type="primary" @click="changeButton">点击</a-button>
    <div class="icons-list">
      <YoutubeOutlined />
      <WechatOutlined />
    </div>
    <div>
      <p>{{state.a}}</p>
      <p>{{state.b}}</p>
      <p>{{timeNow.format("YYYY-MM-DD HH:mm:ss")}}</p>
      <p>{{state.user.username}} --- {{state.user.age}}</p>
    </div>

  </div>
</template>

<script lang="ts">
import {
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onErrorCaptured,
  reactive,
  defineComponent,
} from 'vue';
import { Button, message } from 'ant-design-vue';
import { fetch } from '@/utils/request';
import dayjs from 'dayjs';
import { YoutubeOutlined, WechatOutlined } from '@ant-design/icons-vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { dataUser } from './data.type';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    // Form,
    WechatOutlined,
    YoutubeOutlined,
    'a-button': Button,
  },
  setup(props) {
    console.log(props);
    const state = reactive({
      a: '',
      b: 1,
      c: 3,
      user: {},
    });

    const changeButton = (e: MouseEvent) => {
      e.preventDefault();
      // console.log(e);
      message.success('点击成功');
      state.b += 1;
    };

    onMounted(() => {
      console.log(state);
    });

    onBeforeMount(() => {
      // console.log('onBeforeMount');
      state.b = 9;
      fetch('https://yapi.hapyun.com/mock/287/api/v1/auth/user', { name: 'aaass' }).then((res: dataUser) => {
        console.log(res);
        state.user = res.data;
      });
    });

    onUpdated(() => {
      // console.log(old, newValue);
      console.log('onUpdated');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    return {
      aa: 5,
      state,
      changeButton,
      timeNow: dayjs(),
    };
  },
});
</script>

<style lang="less" scoped>
  .icons-list ::v-deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
  }
</style>
