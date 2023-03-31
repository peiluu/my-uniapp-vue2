<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view>
      <text class="title">{{title}}</text>
      <input bindinput="bindReason" :type="text" v-model="title" />
      <button @click="bindReason">11111</button>
      <u-icon name="photo" color="#2979ff" size="28"></u-icon>
      <!-- <u-action-sheet :list="list" v-model="show"></u-action-sheet> -->
    </view>
  </view>
</template>

<script>
// import uActionSheet from "uView-ui/components/u-action-sheet/u-action-sheet.vue";
export default {
  components: {
    // uActionSheet
  },
  data() {
    return {
      title: "Hello",
      text: "text",
      show: true,
      list: [
        {
          text: "点赞",
          color: "blue",
          fontSize: 28
        },
        {
          text: "分享"
        },
        {
          text: "评论"
        }
      ]
    };
  },
  // bindReason() {
  // 	console.log(11111)
  //   debugger;
  // },
  onLoad() {
    // this.bindReason();
  },

  methods: {
    bindReason() {
      uni.navigateTo({
        url: `/pages/index/index?id=1&name=uniapp`
      })
      console.log(this.title);
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
