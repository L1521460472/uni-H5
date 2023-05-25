<template>
	<view class="content">
		<view class="header">
		    <view v-if='count == 1' class="header-box">
		      <view class="header-box-top">
		        <text class="box3"><text style="margin-right:2px">84006</text><text style="margin-right:2px">30002</text><text style="margin-right:2px">64123</text> <text style="margin-right:0px">84088</text></text>
		      </view>
		      <view class="header-box-bot">
		        <text style="font-size:21px;color:#69ccad;margin-top: 16px;font-family: '苹方-简';">药品追溯码验证通过</text>
		        <text style="color:#948e97;margin-top: 6px;">总扫码人数<text style="color:#ebb62f;"> 1 </text>人，且在有效期内</text>
		        <button style="border-radius: 20px;margin-top: 12px;" type="primary" size="mini" @click="toDetail">验证详情 > </button>
		      </view>
		    </view>
		    <view v-else class="header-boxs">
		      <view class="header-box-top">
		        <text class="box3"><text style="margin-right:1px">84006</text><text style="margin-right:1px">30002</text><text style="margin-right:1px">64123</text> <text style="margin-right:0px">84088</text></text>
		      </view>
		      <view class="header-box-bot">
		        <text style="font-size:20px;color:#ebb62f;margin-top: 16px;font-family: '苹方-简';">药品被多人验证</text>
		        <text style="color:#948e97;margin-top: 6px;">药品已被<text style="color:#ebb62f;">{{count}}</text>人扫码查询</text>
		        <button style="border-radius: 20px;margin-top: 12px;margin-left: 0;padding: 0 8px;" type="primary" size="mini" @click="toDetail"> 验证详情 > </button>
		      </view>
		    </view>
		  </view>
		
		  <view class="banner">
		    <view class="drug-info" @click="toDrugInfo">
		      <view class="drug-info-top">
		        <view class="drug-info-left">
		          <view class="drug-info-title">
		            <text style="font-size:22px;">{{drugInfo.productName}}</text>
		          </view>
		          <view class="drug-info-box">
		            <view style="color:#948e97;margin-bottom: 10px;">药品规格：{{drugInfo.drugSpecifications}}</view>
		            <view style="color:#948e97;display: flex;line-height: 22px;"> <view style="width: 120px;">生产厂家：</view> <view>{{drugInfo.manufacturer}}</view> </view>
		          </view>
		        </view>
		        <view class="drug-info-right">
		          <image :src="imageUrl" mode="aspectFit" />
		        </view>
		      </view>
		      <view class="drug-info-bom">
		        <button style="width:180px;font-size: 16px;border-radius: 20px;margin-top: 10px;letter-spacing: 2px;line-height: 1.8;" type="primary" plain="true" size="mini">药品追溯信息</button>
		      </view>
		    </view>
		  </view>
		
		  <view style="font-size: 30px;position: fixed;bottom:40px;left: 0;right: 0;margin: auto;border-radius: 30px;padding: 0;width: 60px;height: 60px;line-height: 60px;background-color: #1e6ffc;display: flex;align-items: center;justify-content: center;" @click="handleTap">
			  <uni-icons type="scan" style="color:#fff;font-size: 32px;" size="32" />
<!-- 		    <button
		      type="primary"
		      icon="scan"
		      style="font-size: 30px;position: fixed;bottom:40px;left: 0;right: 0;margin: auto;border-radius: 30px;padding: 0;width: 60px;height: 60px;line-height: 60px;"
		      @click="handleTap"
		      inline
		      className="circle"
		    >
		    </button> -->
		  </view>
	<!-- 	  <md-toast ref="toast" icon="fail" icon-svg :content="content" square :duration="1000">
			</md-toast> -->
	</view>
</template>

<script>
	import {
		getData,
	} from '@/api/index.js';
	import {Toast, Button, ActivityIndicator} from 'mand-mobile'
	export default {
		components: {
		    [Toast.component.name]: Toast.component,
		    [Button.name]: Button,
		    [ActivityIndicator.name]: ActivityIndicator,
		  },

		data() {
			return {
				titleBarHeight: 0,
				statusBarHeight: 0,
				code: '81006105551115275674',
				count: null,
				toastShow: false,
				isShow: false,
				content: '1',
				drugInfo: {},
				drugInfoDetail: {},
				imageUrl: '',
				title: 'Hello'
			}
		},
		onLoad(option) {
			console.log(option)
			this.loadData();
		},
		methods: {
			/**
			 * 加载数据
			 */
			async loadData() {
				getData(this.code).then(res => {
					this.count = res.data.scanNumber
					this.drugInfo = JSON.parse(res.data.product)
					this.imageUrl = 'https://code.ipcipc.cn/prod-api' + this.drugInfo.productImagesUrl
				})
			},
			// 验证详情
			  toDetail(){
			    console.log(123)
			    uni.navigateTo({
			      url: '/pages/detail/index?id=1'  // url详解请见【路由使用须知】
			    })
			  },
			  // 药品详情
			  toDrugInfo(){
			    console.log(123)
			    uni.navigateTo({
			      url: '/pages/durg/index?id=1'  // url详解请见【路由使用须知】
			    })
			  },
			  handleTap(e) {
			  // this.$refs.toast.show()
			  // this.isShow = true
			  uni.scanCode({
			  	success: function (res) {
			  		console.log('条码类型：' + res.scanType);
			  		console.log('条码内容：' + res.result);
			  	}
			  });
			 //  uni.scanCode({
				// scanType:['qrCode'],
				// success: function(resp) {
				//   console.log(resp.result)
				//   getData(resp.result).then(res => {
				//   	this.count = res.data.scanNumber
				//   	this.drugInfo = JSON.parse(res.data.product)
				//   	this.imageUrl = 'https://code.ipcipc.cn/prod-api' + this.drugInfo.productImagesUrl
				//   })
				// }
			 //  })
			},
			  handleCloseToast(e) {
			    this.toastShow = false
			  },
			  //点击手机标题栏触发的事件,需要在 index.json 配置 titlePenetrate:"YES"
			  onTitleBar(e) {
			    console.log(e)
			    // my.alert({
			    //   title: '点击了标题栏'
			    // });
			  },
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.custom-nav {
	  background-image: linear-gradient(to bottom, #1e6ffc, #1e6ffc);
	}
	
	.custom-titleBar {
	  display: flex;
	  align-items: center;
	  color: white;
	  font-size: 16px;
	  margin-left: 32px;
	}
	.image{
	  width: 32px;
	  height: 32px;
	  margin-right: 4px;
	}
	.header {
	  width: 100%;
	  height: 240px;
	  background-color: #1e6ffc;
	  padding: 10px;
	  padding-bottom: 20px;
	  box-sizing: border-box;
	}
	
	.header-box {
	  width: 100%;
	  height: 100%;
	  border-radius: 6px;
	  background: url('../../image/banner01.png') no-repeat;
	  background-size: 100%;
	}
	
	.header-boxs {
	  width: 100%;
	  height: 100%;
	  border-radius: 6px;
	  background: url('../../image/banner02.png') no-repeat;
	  background-size: 100%;
	}
	
	.header-box-top {
	  display: flex;
	  flex-direction: column;
	  height: 40%;
	  box-sizing: border-box;
	  padding-left: 16px;
	
	}
	
	.box1 {
	  width: 60%;
	  display: flex;
	  justify-content: space-between;
	  padding-left: 4px;
	  box-sizing: border-box;
	  margin-top: 14px;
	  margin-bottom: 2px;
	  letter-spacing: 11px;
	  font-size: 12px;
	}
	
	.box2 {
	  width: 60%;
	}
	
	.box2 {
	  display: block;
	  width: 60%;
	  height: 36px;
	}
	
	.box3 {
	  width: 60%;
	  display: flex;
	  justify-content: space-between;
	  padding-left: 0px;
	  font-size: 14px;
	  padding-right: 3px;
	  box-sizing: border-box;
	  margin-top: 65px;
	}
	
	.header-box-bot {
	  display: flex;
	  flex-direction: column;
	  box-sizing: border-box;
	  padding-left: 20px;
	  height: 60%;
	}
	
	.banner {
	  width: 100%;
	  height: 300px;
	  position: relative;
	  padding: 0 10px;
	  box-sizing: border-box;
	}
	
	.drug-info {
	  width: calc(100% - 20px);
	  height: 210px;
	  position: absolute;
	  top: -10px;
	  left: 0;
	  right: 0;
	  margin: auto;
	  background-color: #fff;
	  border-radius: 6px;
	  padding: 24px;
	  box-sizing: border-box;
	}
	
	.drug-info-top {
	  width: 100%;
	  height: 76%;
	  display: flex;
	}
	
	.drug-info-left {
	  width: 72%;
	  height: 100%;
	}
	
	.drug-info-right {
	  width: 28%;
	  height: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  margin-right: 5px;
	}
	
	.drug-info-title {
	  margin-bottom: 16px;
	  font-weight: bold;
	}
	
	.drug-info-box {
	  display: flex;
	  flex-direction: column;
	}
	
	.drug-info-bom {
	  width: 100%;
	  height: 24%;
	
	}
	
	/* .list button {
	  margin: 0 8px 8px 0;
	}
	
	.btn {
	  font-size: 22px;
	}
	
	.round {
	  border-radius: 50px;
	} */
	
	
	
	.ant-button-medium {
	  padding: 4px 12px 4px 12px;
	}
	
	.circle {
	  border-radius: 30px;
	  padding: 0;
	  width: 60px;
	  height: 60px;
	  line-height: 60px;
	}
</style>
