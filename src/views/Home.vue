<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    {{count}}{{aa}}
    <a-button type="primary" v-on:click="changeText">我的</a-button>
    <div class="icons-list">
      <YoutubeOutlined />
      <WechatOutlined />
    </div>

  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onErrorCaptured,
} from 'vue';
import { Button } from 'ant-design-vue';
import { YoutubeOutlined, WechatOutlined } from '@ant-design/icons-vue';
// import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
    // Form,
    WechatOutlined,
    YoutubeOutlined,
    'a-button': Button,
  },
  setup() {
    console.log(1111);

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeMount(() => {
      console.log('onBeforeMount');
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
    };
  },
  data() {
    console.log(3333);
    return {
      count: 1,
    };
  },
  methods: {
    changeText(e: MouseEvent) {
      console.log(e);
      this.count += 1;
    },
  },
});
</script>

<style lang="less" scoped>
  .icons-list ::v-deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
  }
</style>
