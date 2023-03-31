<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
		</view>
		<picker @change="bindPickerChange" v-model="index" :range="array">
			<view class="uni-input">{{array[index]}}</view>
		</picker>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			index: 1,
			array: ['湖南', '云南', '海南']
		}
	},
	onLoad(options) {
		console.log(options)
	},
	methods: {
		bindPickerChange(e) { 
			console.log(e)
			this.index = e.detail.value
			console.log(this.index)
		}

	}
}
</script>

<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: $uni-color-primary;
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
