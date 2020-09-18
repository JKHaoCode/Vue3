<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <a-button type="primary">我的</a-button>
    <div class="icons-list">
      <YoutubeOutlined />
      <WechatOutlined />
    </div>
    <div>
      <p>{{state.a}}</p>
      <p>{{state.b}}</p>
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
} from 'vue';
import { Button } from 'ant-design-vue';
import { YoutubeOutlined, WechatOutlined } from '@ant-design/icons-vue';
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // Form,
    WechatOutlined,
    YoutubeOutlined,
    'a-button': Button,
  },
  setup() {
    // console.log(1111);
    const state = reactive({
      a: '',
      b: 1,
      c: 3,
    });
    onMounted(() => {
      console.log('onMounted');
      state.a = 'wode';
    });

    onBeforeMount(() => {
      console.log('onBeforeMount');
      state.b = 9;
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
    };
  },
};
</script>

<style lang="less" scoped>
  .icons-list ::v-deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
  }
</style>
