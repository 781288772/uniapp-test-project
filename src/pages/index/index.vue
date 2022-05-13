<template>
	<view class="content">
		<!-- 底部tabbar組件 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//tabbar数据
				list: [{
						iconPath: "../../static/images/组 54402@3x.png",
						selectedIconPath: "../../static/images/组 54402@3x.png",
						text: '首页',
						// count: 2,
						isDot: false,
						customIcon: false,
					},
					{
						iconPath: "../../static/images/组 54403@2x.png",
						selectedIconPath: "../../static/images/组 54403@2x.png",
						text: '记录',
						customIcon: false,
					},
					{
						iconPath: "../../static/images/组 54276@2x.png",
						selectedIconPath: "../../static/images/组 54276@2x.png",
						text: '答疑解惑',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "../../static/images/组 54404@2x.png",
						selectedIconPath: "../../static/images/组 54404@2x.png",
						text: '小工具',
						customIcon: false,
					},
					{
						iconPath: "../../static/images/组 54405@2x.png",
						selectedIconPath: "../../static/images/组 54405@2x.png",
						text: '我的',
						// count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				current: 4
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {}
</style>
