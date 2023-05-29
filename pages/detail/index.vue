<template>
	<view class="content">
		<view  v-if='count == 1' class="detail-header">
		        <view class="detail-header-box">
		            <view class="detail-header-box1">{{code1}}  {{code2}}  {{code3}}  {{code4}}</view>
		            <view class="detail-header-box2">追溯码验证通过</view>
		        </view>
		    </view>
		    <view v-else class="detail-headers">
		        <view class="detail-header-box">
		            <view class="detail-header-box1">{{code1}}  {{code2}}  {{code3}}  {{code4}}</view>
		            <view class="detail-header-box2">药品被多人验证</view>
		        </view>
		    </view>
		    <view class="detail-banner">
		        <view class="detail-banner-box">
		            <view class="detail-banner-box1">
		                <view class="detail-banner-box3"> <uni-icons type="help-filled" style="color:#e5b450;font-size: 22px;" size="24" /> <text style="font-weight: bold;margin-left: 6px;letter-spacing: 2px;">总扫码人数 <text style="color:#e5b450;font-weight: 400;"> {{ verifyObj.scanCodePeopleNumber }} </text> 人</text></view>
		                <view class="detail-banner-box4">药品被多人验证药品被多人验证药品被多人验证药品被多人验证药品被多人验证</view>
		            </view>
		            <view class="detail-banner-box2">
		                <view class="detail-banner-box3"> <uni-icons type="checkbox-filled" style="color:#e5b450;font-size: 22px;" size="24"></uni-icons><text style="font-weight: bold;margin-left: 6px;">在有效期内</text></view>
		                <view class="detail-banner-box4">有效期至：{{verifyObj.periodValidityTime}}</view>
		            </view>
		        </view>
		    </view>
		    <view class="detail-info">
		        <view style="font-size: 20px;font-weight: bold;">验证明细</view>
				<div class="md-example-child md-example-child-steps md-example-child-steps-8">
				<md-steps
				      direction="vertical"
				      :steps="steps0"
				      :current="2"
				    >
					 <template slot="icon" slot-scope="props">
						<!-- <md-icon name="arrow-down"></md-icon> -->
						<i class="iconfont icon-xia"></i>
					  </template>
				      <div
				        class="custom-content"
				        slot="content"
				        slot-scope="{ index, step }"
				      >
				        <template v-if="index === 0">
				          <p class="name active" v-text="step.name"></p>
				          <view class="description-list">
				              <view class="description-list-left">生产厂家</view>
				              <view class="description-list-right">{{verifyObj.manufacturer}}</view>
				          </view>
				          <view class="description-list">
				              <view class="description-list-left">生产日期</view>
				              <view class="description-list-right">{{verifyObj.manufacturerTime}}</view>
				          </view>
				          <view class="description-list">
				              <view class="description-list-left">药品批号</view>
				              <view class="description-list-right">{{verifyObj.drugBatchNumber}}</view>
				          </view>
				        </template>
						<template v-if="index === 1">
						  <p class="name active" v-text="step.name"></p>
						  <view v-for="(itemName,index) in verifyObj.verifyBarCodeUseVos" :key="index">
						      <view class="description-list">
						          <view class="description-list-left">{{itemName.scanCodePeople}}</view>
						          <view class="description-list-right">总计扫码{{itemName.scanCodeNumber}}次</view>
						      </view>
						      <view class="description-list-item">
						          <view class="description-list-item-box" v-for="(items,idx) in itemName.verifyBarCodeUseDataVos" :key="idx">
						              <view class="description-list-left">{{items.address}}</view>
						              <view class="description-list-right">{{items.time}}</view>
						          </view>
						      </view>
						  </view>
						</template>
				        <template v-if="index === 2">
				          <p class="name active" v-text="step.name"></p>
						  <view class="description-list">
						      <view class="description-list-left">药品有效期至</view>
						      <view class="description-list-right">{{verifyObj.periodValidityTime}}</view>
						  </view>
				        </template>
				      </div>
				    </md-steps>
				</div>
		    </view>
	</view>
</template>

<script>
	import {
		getVerifyData,
	} from '@/api/index.js';
	import {Steps, Amount, Icon} from 'mand-mobile'
	import 'mand-mobile/lib/steps/style/index.css'
	export default {
		components: {
		    [Steps.name]: Steps,
		    [Icon.name]: Icon,
		  },
		data() {
			return {
				titleBarHeight: 0,
				statusBarHeight: 0,
				code: '',
				code1: '',
				code2: '',
				code3: '',
				code4: '',
				code5: '',
				count: 2,
				maxHeight1: '',
				verifyObj: {},
				items: [
				  {
					title: '生产信息',
					description: '描述信息',
					count: 1
				  },
				  {
					title: '使用信息',
					description: '描述信息',
					count: 2
				  },
				  {
					title: '药品效期',
					description: '描述信息',
					count: 3
				  }
				],
				iconList: [
				  'DownOutline',
				  'DownOutline',
				  'DownOutline'
				],
				steps0: [
				        {
				          name: '生产信息',
				          amount: '600.5',
				          text: '银行处理中，预计<span>30分钟</span>内到账，请留意短信信息。如有疑问，请联系客服。',
				        },
				        {
				          name: '使用信息',
				        },
						{
						  name: '药品效期',
						},
				      ],
			}
		},
		watch:{
			"maxHeight1":{
				handler(newValue,oldValue){
					// console.log(newValue)
					// this.maxHeight1.style.maxHeight = (this.maxHeight1.offsetHeight - 64) + 'px'
				}
			}
		},
		onLoad(option) {
			this.code = option.id
			this.code1 = option.id.substring(0,5)
			this.code2 = option.id.substring(5,10)
			this.code3 = option.id.substring(10,15)
			this.code4 = option.id.substring(15,20)
			this.loadData();
			// const str = document.querySelectorAll('vertical-bar')
			// str[0].style.maxHeight = str[0].o
			// str.map((item)=>{
			// 	item.offsetHeight = item.offsetHeight - 64
			// 	return item
			// })
		},
		mounted() {
			
			
		},
		methods: {
			/**
			 * 加载数据
			 */
			async loadData() {
				getVerifyData(this.code).then(res => {
					this.count = res.data.scanCodePeopleNumber
					this.verifyObj = res.data
					const str1 = document.querySelectorAll('.vertical-bar')[0]
					const str2 = document.querySelectorAll('.vertical-bar')[1]
					const str3 = document.querySelectorAll('.vertical-bar')[2]
					setTimeout(()=>{
						str1.style.maxHeight = (str1.offsetHeight - 64) + 'px'
						str2.style.maxHeight = (str2.offsetHeight - 64) + 'px'
					},250)
				})
			},
			// 验证详情
			  toDetail(){
			    console.log(123)
			    my.navigateTo({
			      url: '/pages/detail/index?id=1'  // url详解请见【路由使用须知】
			    })
			  },
			  // 药品详情
			  toDrugInfo(){
			    console.log(123)
			    my.navigateTo({
			      url: '/pages/drugInfo/index?id=1'  // url详解请见【路由使用须知】
			    })
			  },
			  handleCloseToast(e) {
			    this.setData({
			      toastShow: false
			    })
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
	.detail-header {
	  width: 100%;
	  height: 190px;
	  padding: 30px 16px;
	  box-sizing: border-box;
	  background: url('../../image/bj12.png') no-repeat;
	  background-size: 100%;
	}
	
	.detail-headers {
	  width: 100%;
	  height: 190px;
	  padding: 30px 16px;
	  box-sizing: border-box;
	  background: url('../../image/bj11.png') no-repeat;
	  background-size: 100%;
	}
	
	.detail-header-box1 {
	  color: #fff;
	  font-size: 16px;
	  margin: -1px 0px 10px 22px;
	
	}
	
	.detail-header-box2 {
	  color: #fff;
	  font-size: 25px;
	  letter-spacing: 1px;
	}
	
	.detail-banner {
	  width: 100%;
	  height: 120px;
	
	  position: relative;
	}
	
	.detail-banner-box {
	  position: absolute;
	  top: -60px;
	  left: 0;
	  right: 0;
	  margin: auto;
	  width: calc(100% - 40px);
	  height: 170px;
	  padding: 20px;
	  box-sizing: border-box;
	  background-color: #fff;
	  border-radius: 8px;
	}
	
	.detail-banner-box1 {
	  height: 62%;
	}
	
	.detail-banner-box2 {
	  height: 38%;
	}
	
	.detail-banner-box3 {
	  display: flex;
	  align-items: center;
	  line-height: 28px;
	}
	
	.detail-banner-box4 {
	  display: flex;
	  align-items: center;
	  margin-left: 30px;
	  margin-right: 20px;
	  margin-top: 4px;
	  font-size: 14px;
	  color: #909090;
	}
	
	.detail-info {
		width: 100%;
	  padding: 20px;
	  box-sizing: border-box;
	  background-color: #fff;
	  margin-top: 8px;
	}
	
	
	.ant-steps.ant-steps-vertical {
	  padding: 15px 8px;
	}
	
	/* .ant-list-item-line{
	    padding: 3px;
	} */
	
	.description-list {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  padding: 6px 0;
	}
	
	.description-list-left {
	  width: 120px;
	  font-size: 15px;
	  color: #909090;
	}
	
	.description-list-right {
	  font-size: 15px;
	  color: #333;
	}
	
	.description-list-item {
	  /* display: flex;
	    align-items: center;
	    justify-content: space-between; */
	  background-color: #f9f9f9;
	  padding: 8px 10px;
	  border-radius: 6px;
	  margin: 6px 0;
	}
	
	.description-list-item-box {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  line-height: 24px;
	  color: #909090;
	}
	
	.ant-steps-item-vertical .ant-steps-item-title {
	  font-size: 19px;
	  font-weight: bold;
	}
	
	.ant-steps-item-active .ant-steps-item-title {
	  color: #333;
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-xia:before {
	  content: "\e610" !important;
	}
	
	.ant-steps-item-finish::after {
	  background-color: #f6f5f8;
	}
	.md-steps.md-steps-vertical{
		padding: 10px 0;
	}
	.md-steps.md-steps-vertical /deep/ .step-wrapper .text-wrapper{
		left: 24px;
		right: 0px;
		padding-left: 10px ;
	}
	.detail-banner-box3 /deep/ .md-icon-checked{
		font-size: 16px;
	} 
	.md-steps.md-steps-vertical /deep/ .step-wrapper{
		margin: 0;
	}
	.md-steps /deep/ .bar.vertical-bar .bar-inner{
		background: none;
	}
	.md-example-child-steps-8 /deep/ .custom-content .active{
		font-size: 20px;
		color: #111A34;
	}
	
</style>