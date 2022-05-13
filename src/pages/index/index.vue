<template>
	<!-- 容器 -->
	<view class="content">
		<!-- 顶部信息 -->
		<view class="top">


			<view class="top-info">
				<view class="info-left">
					<view class="info-left-child">
						<view>
							<image src="../../static/images/组 54363@2x.png" alt="avatar">
						</view>
					</view>
					<view class="info-right-child">
						<view>张三三<text class="gender">男</text> <text class="vip">普通会员</text></view>
						<view class="fade">阳历：2008年5月25日 13点</view>
					</view>

				</view>
				<view class="info-right">
					<image src="../../static/images/组 54365@2x.png" alt="arrow">
				</view>




			</view>
			<view class="info-bottom">
				<view class="info-bottom-item">
					<view>1000元</view>
					<view class="fade">现金</view>
				</view>
				<view class="info-bottom-item">
					<view>1000分</view>
					<view class="fade">积分</view>
				</view>
				<view class="info-bottom-item">
					<view>100份</view>
					<view class="fade">测算报告</view>
				</view>


			</view>
			<view class="adv">
				<image src="../../static/images/组 54394@3x.png" mode="widthFix"></image>
			</view>



		</view>
		<!-- 中间菜单 -->
		<view class="menu">
			<view class="menu-item">
				<image src="../../static/images/组 54437@2x.png" mode=""></image>
				<view>签到</view>
			</view>
			<view class="menu-item">
				<image src="../../static/images/组 54438@2x.png" mode=""></image>
				<view>我的问答</view>
				<view class="circle">{{count}}</view>
			</view>
			<view class="menu-item">
				<image src="../../static/images/组 54439@2x.png" mode=""></image>
				<view>会员中心</view>
			</view>
			<view class="menu-item">
				<image src="../../static/images/组 54440@2x.png" mode=""></image>
				<view>设置</view>
			</view>

		</view>
		<!-- 底部菜单 -->
		<view class="bottom-menu">
			<view class="menu-list">
				<view class="list-item-left">
					<image src="../../static/images/组 54437@2x.png" mode=""></image>
					<text>档案管理</text>
				</view>
				<view class="list-item-right">
					<image src="../../static/images/1. Icons ／ Line ／  Arrow - Left Square@2x(1).png"></image>
				</view>
			</view>
			<view class="menu-list">
				<view class="list-item-left">
					<image src="../../static/images/组 54441@2x.png" mode=""></image>
					<text>消息</text>
				</view>
				<view class="list-item-right">
					<image src="../../static/images/1. Icons ／ Line ／  Arrow - Left Square@2x(1).png"></image>
				</view>
			</view>
			<view class="menu-list">
				<view class="list-item-left">
					<image src="../../static/images/组 54442@2x.png" mode=""></image>
					<text>邀请有礼</text>
				</view>
				<view class="list-item-right">
					<image src="../../static/images/1. Icons ／ Line ／  Arrow - Left Square@2x(1).png"></image>
				</view>
			</view>
			<view class="menu-list">
				<view class="list-item-left">
					<image src="../../static/images/组 54443@2x.png" mode=""></image>
					<text>意见反馈</text>
				</view>
				<view class="list-item-right">
					<image src="../../static/images/1. Icons ／ Line ／  Arrow - Left Square@2x(1).png"></image>
				</view>
			</view>
			<view class="menu-list">
				<view class="list-item-left">
					<image src="../../static/images/组 54444@2x.png" mode=""></image>
					<text>人工客服</text>
				</view>
				<view class="list-item-right">
					<image src="../../static/images/1. Icons ／ Line ／  Arrow - Left Square@2x(1).png"></image>
				</view>
			</view>

		</view>





		<!-- 底部tabbar組件 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true" height="100"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 问答右上角小标
				count: 2,
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
				// 当前底部tabbar
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
	// 容器
	.content {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		// 顶部内容容器
		.top {
			height: 420rpx;
			width: 100%;
			padding-top: 80rpx;
			background-color: #2a2a34;
			position: relative;
			// 顶部信息
			.top-info {

				color: #fff;
				display: flex;
				justify-content: space-between;
				// 顶部信息左部分
				.info-left {
					height: 100rpx;
					display: flex;
					justify-content: flex-start;
					
					.info-left-child {
						image {
							width: 100rpx;
							height: 100rpx;
							margin: 20rpx;
						}
					}
					// 顶部信息右部分
					.info-right-child {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
						// 浅色文字
						.fade {
							color: #8e8e96;
						}
						// 性别样式
						.gender {
							margin-left: 30rpx;
						}
						// 会员等级样式
						.vip {
							background-color: #5d5f5e;
							padding: 5rpx 20rpx;
							border-radius: 32rpx;
							margin-left: 30rpx;

						}
							
						view {
							margin-top: 24rpx;

						}
					}


				}
				// 顶部信息右侧arrow样式
				.info-right {
					height: 100rpx;
					line-height: 100rpx;

					image {
						width: 20rpx;
						height: 24rpx;
						margin-right: 20rpx;
					}
				}
			}
			// 现金/积分/测算报告样式
			.info-bottom {
				display: flex;
				justify-content: space-around;
				color: #fff;
				margin-top: 60rpx;
				text-align: center;

				.fade {
					color: #8e8e96;
				}
			}
			// 会员权益样式
			.adv {
				width: 100%;
				padding: 0 20rpx;
				height: 90rpx;
				display: block;
				position: absolute;
				bottom: -40rpx;

				image {
					width: 100%;
					height: 90rpx;
					max-width: 100%;
					object-fit: none;


				}


			}

		}
		
		// 中部菜单样式
		.menu {
			padding: 40rpx 20rpx;
			margin: 60rpx 20rpx 20rpx 20rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			text-align: center;
			border-radius: 24rpx;

			.menu-item {
				position: relative;

				image {
					width: 48rpx;
					height: 48rpx;
				}

				.circle {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
					top: -10rpx;
					right: -10rpx;
					font-size: 18rpx;
					background: #d44d4a;
					color: #fff;
					border-radius: 50%;
					text-align: center;
					line-height: 30rpx;
				}


			}
		}
		// 底部菜单列表样式
		.bottom-menu {
			background-color: #fff;
			margin: 20rpx;
			border-radius: 24rpx;

			.menu-list {
				margin: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx;

				.list-item-left {

					// padding: 40rpx;
					image {
						width: 48rpx;
						height: 48rpx;
						margin-right: 20rpx;
					}

					display: flex;
					justify-content: flex-start;
					align-items: center;

				}

				.list-item-right {
					image {
						width: 15rpx;
						height: 30rpx;
					}
				}

			}
		}


	}
</style>
