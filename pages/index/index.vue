<template>
	<view class="content">
		<view class="content-header">
			<uni-icons type="scan" size="30" style="color: #fff;margin-right:10px"></uni-icons>
			<text style="font-size: 22px; color: #fff;">扫码放心</text>
		</view>
		<view class="header">
		    <view v-if='count == 1' class="header-box">
		      <view class="header-box-top">
		        <view class="box3"><view style="margin-right:2px">{{code1}}</view><view style="margin-right:2px">{{code2}}</view><view style="margin-right:2px">{{code3}}</view> <view style="margin-right:0px">{{code4}}</view></view>
		      </view>
		      <view class="header-box-bot">
		        <text style="font-size:21px;color:#69ccad;margin-top: 16px;font-family: '苹方-简';">药品追溯码验证通过</text>
		        <text style="color:#948e97;margin-top: 6px;">总扫码人数<text style="color:#ebb62f;"> 1 </text>人，且在有效期内</text>
		        <button style="border-radius: 20px;margin-top: 12px;margin-left: 0;padding: 0 8px;" type="primary" size="mini" @click="toDetail">验证详情 > </button>
		      </view>
		    </view>
		    <view v-else class="header-boxs">
		      <view class="header-box-top">
		        <view class="box3"><view style="margin-right:2px">{{code1}}</view><view style="margin-right:2px">{{code2}}</view><view style="margin-right:2px">{{code3}}</view> <view style="margin-right:0px">{{code4}}</view></view>
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
		            <view style="color:#948e97;margin-bottom: 10px;display: flex; justify-content: space-between;"><view style="width: 90px;">药品规格：</view><view style="flex: 1;">{{drugInfo.drugSpecifications}}</view></view>
		            <view style="color:#948e97;display: flex; justify-content: space-between; line-height: 22px;"> <view style="width: 90px;">生产厂家：</view> <view style="flex: 1;">{{drugInfo.manufacturer}}</view> </view>
		          </view>
		        </view>
		        <view class="drug-info-right">
		          <image :src="imageUrl" mode="aspectFit" />
		        </view>
		      </view>
		      <view class="drug-info-bom">
		        <button style="width:150px;font-size: 16px;border-radius: 20px;margin-top: 10px;letter-spacing: 1px;line-height: 1.8;padding: 0;" type="primary" plain="true" size="mini">药品追溯信息</button>
				<button style="width:150px;font-size: 16px;border-radius: 20px;margin-top: 10px;letter-spacing: 1px;line-height: 1.8;padding: 0;" type="primary" plain="true" size="mini">添加到用药助理</button>
		      </view>
		    </view>
		  </view>
		  <view class="content-grid">
		  	<uni-grid :column="4" :highlight="true" :show-border="false">
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<view class="box-bj">
							<i class="iconfont icon-xinxiguanli" style="width: 24px;color: #fff; font-size: 24px;position: absolute;bottom: 0;left: 0;right: 0;margin: auto;"></i>
						</view>
						<text class="text">服用说明</text>
						<text class="text1">专业用药指导</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<view class="box-bj1">
							<i class="iconfont icon-yisheng" style="width: 28px;color: #fff; font-size: 28px;position: absolute;bottom: 0;left: 0;right: 0;margin: auto;"></i>
						</view>
						<text class="text">咨询医生</text>
						<text class="text1">7*24h极速接诊</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<view class="box-bj1">
							<i class="iconfont icon-songyaoshangmen" style="width: 28px;color: #fff; font-size: 28px;position: absolute;bottom: 0;left: 0;right: 0;margin: auto;"></i>
						</view>
						<text class="text">用药助理</text>
						<text class="text1">药品管理提醒</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<view class="box-bj1">
							<i class="iconfont icon-guahaojiuzhen" style="width: 28px;color: #fff; font-size: 28px;position: absolute;bottom: 0;left: 0;right: 0;margin: auto;"></i>
						</view>
						<text class="text">就医挂号</text>
						<text class="text1">多平台号源共享</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		  </view>
		  
		  <view class="content-box">
		  	<view class="content-box1">
		  		<image style="width: 100%; height: 100%; background-color: #eeeeee;" src="../../bj03.jpg"></image>
		  	</view>
		  </view>
		
		  <view style="font-size: 30px;position: fixed;bottom:30px;left: 0;right: 0;margin: auto;z-index: 999;border-radius: 30px;padding: 0;width: 60px;height: 60px;line-height: 60px;background-color: #1e6ffc;display: flex;align-items: center;justify-content: center;" @click="handleTap">
			  <uni-icons type="scan" style="color:#fff;font-size: 32px;" size="32" />
		  </view>
		  
		  <view class="content-fot">
		  	<uni-grid :column="3" :highlight="true" :show-border="false">
		  		<uni-grid-item>
		  			<view class="grid-item-box" style="background-color: #fff;">
		  				<i class="iconfont icon-lishixiao" style="color: rgb(119, 119, 119); font-size: 28px;"></i>
		  				<text class="text">扫码历史</text>
		  			</view>
		  		</uni-grid-item>
		  		<uni-grid-item>
		  			<view class="grid-item-box" style="background-color: #fff;">
		  				<uni-icons type="image" :size="30" color="#777" />
		  				<text class="text">再扫一盒</text>
		  			</view>
		  		</uni-grid-item>
		  		<uni-grid-item>
		  			<view class="grid-item-box" style="background-color: #fff;">
		  				<uni-icons type="person" :size="30" color="#777" />
		  				<text class="text">我的</text>
		  			</view>
		  		</uni-grid-item>
		  	</uni-grid>
		  </view>
		<view class="qrcode" v-if="isShow">
			<mumu-get-qrcode @success='qrcodeSucess' @error="qrcodeError" ></mumu-get-qrcode>
		</view>
	</view>
</template>

<script>
	import {
		getData,
	} from '@/api/index.js';
	import {Toast, Button, ActivityIndicator, Icon} from 'mand-mobile'
	import qrcode from '@/utils/qrcode.js'
	import jsQR from "jsqr"
	import mumuGetQrcode from '@/uni_modules/mumu-getQrcode/components/mumu-getQrcode/mumu-getQrcode.vue'
	export default {
		components: {
		    [Toast.component.name]: Toast.component,
		    [Button.name]: Button,
		    [ActivityIndicator.name]: ActivityIndicator,
			[Icon.name]: Icon,
			mumuGetQrcode
		  },

		data() {
			return {
				titleBarHeight: 0,
				statusBarHeight: 0,
				codes: '81006106285729560768',//81006106285729560768
				code1: '',
				code2: '',
				code3: '',
				code4: '',
				code5: '',
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
		// computed:{
		// 	code1(){
		// 		console.log(this.codes)
		// 	    return 	this.codes.substring(0,5)
		// 	},
		// 	code2(){
		// 	    return 	this.codes.substring(5,10)
		// 	},
		// 	code3(){
		// 	    return 	this.codes.substring(10,15)
		// 	},
		// 	code4(){
		// 	    return 	this.codes.substring(15,20)
		// 	},
		// },
		watch:{
			codes: {
				handler(oldValue,newValue){
					this.code1 = oldValue.substring(0,5)
					this.code2 = oldValue.substring(5,10)
					this.code3 = oldValue.substring(10,15)
					this.code4 = oldValue.substring(15,20)
					console.log(oldValue,newValue,this.code1,this.code2,this.code3,this.code4)
				},
			}
		},
		onLoad(option) {
			console.log(option)
			
			if(option.code){
				this.codes = option.code
			}
			this.loadData(option);
			
		},
		methods: {
			/**
			 * 加载数据
			 */
			async loadData() {
				getData(this.codes).then(res => {
					this.count = res.data.scanNumber
					this.drugInfo = JSON.parse(res.data.product)
					this.imageUrl = 'https://cnwmm.org/prod-api' + this.drugInfo.productImagesUrl
				})
			},
			// 验证详情
			  toDetail(){
			    console.log(123)
			    uni.navigateTo({
			      url: '/pages/detail/index?id=' + this.codes  // url详解请见【路由使用须知】
			    })
			  },
			  // 药品详情
			  toDrugInfo(){
			    console.log(123)
			    uni.navigateTo({
			      url: '/pages/durg/index?id=' + this.codes  // url详解请见【路由使用须知】
			    })
			  },
			  handleTap(e) {
				  this.isShow = true;
				  // uni.navigateTo({
				  //   url: '/pages/qrcode/index'  // url详解请见【路由使用须知】
				  // })
			 //  var that = this
			 //  uni.chooseImage({
				// sizeType: ['original'],
				// count: 1,
			 //  	success: function (res) {
				// 	const tempFilePaths = res.tempFilePaths[0]
				// 	qrcode.decode(tempFilePaths)
				// 	qrcode.callback = res1 =>{
				// 		if(res1 == 'error decoding QR Code'){
				// 			uni.showToast({
				// 				title: '识别二维码失败，请重新上传',
				// 				deration: 2000,
				// 				icon: none
				// 			})
				// 		}else{
				// 			that.codes = (res1.split('=')[1])
				// 			  getData(that.codes).then(res => {
				// 			  	that.count = res.data.scanNumber
				// 			  	that.drugInfo = JSON.parse(res.data.product)
				// 			  	that.imageUrl = 'https://code.ipcipc.cn/prod-api' + that.drugInfo.productImagesUrl
				// 			  })
				// 		}
				// 	}
			 //  	}
			 //  });
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
			  qrcodeSucess(data) {
				var that = this;
			  	that.codes = (data.split('=')[1])
			  	if(that.codes.length == 20){
			  		getData(that.codes).then(res => {
			  			that.count = res.data.scanNumber
			  			that.drugInfo = JSON.parse(res.data.product)
			  			that.imageUrl = 'https://cnwmm.org/prod-api' + that.drugInfo.productImagesUrl
			  		})
					that.isShow = false
				}else{
					uni.showModal({
						title: '成功',
						content: data,
						success: () => {
						  that.isShow = false
						}
					})
				}
			  },
			  qrcodeError(err) {
			    console.log(err)
			    uni.showModal({
					title: '摄像头授权失败',
					content: '摄像头授权失败，请检测当前浏览器是否有摄像头权限。',
					success: () => {
					  this.isShow = false
					}
			    })
			  }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* height: 100%; */
		padding-bottom: 80px;
		/* position: relative; */
	}
	.content-header{
		width: 100%;
		height: 40px;
		padding: 0 10px;
		padding-top: 10px;
		display: flex;
		align-items: center;
		font-size: 18px;
		font-weight: bold;
		background-color: #1e6ffc;
		box-sizing: border-box;
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
	  background: url('../../image/banner11.png') no-repeat;
	  background-size: 100%;
	}
	
	.header-boxs {
	  width: 100%;
	  height: 100%;
	  border-radius: 6px;
	  background: url('../../image/banner12.png') no-repeat;
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
	  height: 210px;
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
	  padding: 24px 16px;
	  box-sizing: border-box;
	}
	
	.drug-info-top {
	  width: 100%;
	  height: 76%;
	  display: flex;
	}
	
	.drug-info-left {
	  width: 74%;
	  height: 100%;
	}
	
	.drug-info-right {
	  width: 26%;
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
	  display: flex;
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
	  z-index: 999;
	}
	.content-box{
		width: 100%;
		height: 90px;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.content-box1{
		width: 100%;
		height: 90px;
		/* border-radius: 45px; */
		background-color: #cdc7fd;
		overflow: hidden;
	}
	.content-grid{
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		margin-bottom: 20px;
	}
	.image {
			width: 25px;
			height: 25px;
		}
	
		.text {
			font-size: 12px;
			margin-top: 0px;
		}
		.text1 {
			font-size: 12px;
			color: #8f8f94;
			/* margin-top: 5px; */
		}
	
		.example-body {
			/* #ifndef APP-NVUE */
			// display: block;
			/* #endif */
		}
	
		.grid-dynamic-box {
			margin-bottom: 15px;
		}
	
		.grid-item-box {
			flex: 1;
			// position: relative;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 15px 0;
		}
	
		.grid-item-box-row {
			flex: 1;
			// position: relative;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 15px 0;
		}
	
		.grid-dot {
			position: absolute;
			top: 5px;
			right: 15px;
		}
	
		.swiper {
			height: 420px;
		}
	
		/* #ifdef H5 */
		@media screen and (min-width: 768px) and (max-width: 1425px) {
			.swiper {
				height: 630px;
			}
		}
	
		@media screen and (min-width: 1425px) {
			.swiper {
				height: 830px;
			}
		}
	
		/* #endif */
		.content-fot{
			height: 64px;
			position: fixed;
			bottom:0px;
			left: 0;
			right: 0;
			margin: auto;
			
		}
		.content-fot /deep/ .uni-grid > .uni-grid-item{
			height: 64px !important;
		}
		.content-fot /deep/ .uni-grid > .uni-grid-item .grid-item-box{
			padding: 0;
		}
		.box-bj{
			position: relative;
			width: 50px;
			height: 36px;
			border-radius: 18px;
			background-color: rgba(5, 196, 143,.8);
		}
		.box-bj1{
			position: relative;
			width: 50px;
			height: 36px;
			border-radius: 18px;
			background-color: rgba(203, 202, 252,.8);
		}
		.qrcode{
			background-color: #fff;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: -70px;
			margin: auto;
			z-index: 1001;
		}
</style>
