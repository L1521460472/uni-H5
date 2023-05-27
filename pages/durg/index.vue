<template>
	<view class="content">
		<view class="drugInfo">
			<uni-collapse v-if="drugList1.length > 0">
				<uni-collapse-item :title="drugList1[0].type" :open="true">
					<view class="content-box" v-for="(item1,idx1) in drugList1" :key="idx1">
						<view class="content-box-left">{{item1.k}}</view>
						<view class="content-box-right">{{item1.v}}</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
			
			<uni-collapse v-if="drugList2.length > 0">
				<uni-collapse-item :title="drugList2[0].type" :open="true">
					<view class="content-box" v-for="(item2,idx2) in drugList2" :key="idx2">
						<view class="content-box-left">{{item2.k}}</view>
						<view class="content-box-right">{{item2.v}}</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
			
			<uni-collapse v-if="drugList3.length > 0">
				<uni-collapse-item :title="drugList3[0].type" :open="true">
					<view class="content-box" v-for="(item3,idx3) in drugList3" :key="idx3">
						<view class="content-box-left">{{item3.k}}</view>
						<view class="content-box-right">{{item3.v}}</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
			
			<uni-collapse v-if="drugList4.length > 0">
				<uni-collapse-item :title="drugList4[0].type" :open="true">
					<view class="content-box" v-for="(item4,idx4) in drugList4" :key="idx4">
						<view class="content-box-left">{{item4.k}}</view>
						<view class="content-box-right">{{item4.v}}</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
			
			<uni-collapse v-if="drugList5.length > 0">
				<uni-collapse-item :title="drugList5[0].type" :open="true">
					<view class="content-box" v-for="(item5,idx5) in drugList5" :key="idx5">
						<view class="content-box-left">{{item5.k}}</view>
						<view class="content-box-right">{{item5.v}}</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		    </view>
	</view>
</template>

<script>
	import {
		getBarCodeData,
	} from '@/api/index.js';
	import { Field,DetailItem } from 'mand-mobile'
	import 'mand-mobile/lib/field/style/index.css'
	import 'mand-mobile/lib/detail-item/style/index.css'
	export default {
		component:{
			[Field.name]: Field,
			[DetailItem.name]: DetailItem
		},
		data() {
			return {
				titleBarHeight: 0,
				statusBarHeight: 0,
				code: '',
				randomLine: 0,
				productTypeOptions: [],
				drugList1: [],
				drugList2: [],
				drugList3: [],
				drugList4: [],
				drugList5: [],
				items : [
				  {
					title: '第一项',
					content: ''
				  }
				],
				title: 'Hello'
			}
		},
		onLoad(option) {
			this.code = option.id
			this.loadData();
		},
		methods: {
			/**
			 * 加载数据
			 */
			async loadData() {
				getBarCodeData(this.code).then(res => {
					var arr = JSON.parse(res.data.productAttrs);
					let brr = [];
					let crr = [];
					let drr = [];
					let err = [];
					let frr = [];
					arr.map((item,index)=>{
					  if(item.type == '基本信息'){
						brr.push(item)
						// that.setData({
						//   drugList1: [...that.drugList1,item],
						// });
					  }else if(item.type == '生产信息'){
						crr.push(item)
						// that.setData({
						//   drugList2: crr,
						// });
					  }else if(item.type == '类别属性'){
						drr.push(item)
						// that.setData({
						//   drugList3: [item],
						// });
					  }else if(item.type == '厂商信息'){
						err.push(item)
						// that.setData({
						//   drugList4: [item],
						// });
					  }else{
						frr.push(item)
						console.log(frr)
						// that.setData({
						//   drugList5: [item],
						// });
					  }
					})
					this.drugList1= brr
					this.drugList2= crr
					this.drugList3= drr
					this.drugList4= err
					this.drugList5= frr
				})
			},
		}
	}
</script>

<style>
.content{
	padding: 16px 12px;
}
.drugInfo {
  padding-bottom: 0px;
}

.item-content {
  /* padding: 12px; */
  font-size: 17px;
  color: #333;
  line-height: 24px;
}

.demo-title {
  padding: 14px 16px;
  color: #999;
}

.uni-collapse {
  padding: 0px 12px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 16px;
}
.uni-collapse /deep/ .uni-collapse-item__title.uni-collapse-item-border{
	border-bottom: none;
}
.uni-collapse /deep/ .uni-collapse-item__wrap-content.uni-collapse-item--border{
	border-bottom: none;
}

.ant-collapse-item-content-container {
  padding-right: 12px;
}

.ant-collapse-item {
  border-radius: 10px;
  overflow: hidden;
}

.ant-list-item:nth-child(2n+1) {
  background-color: #fbfbfb;
}

.ant-list-item {
  line-height: 18px;
  border: none !important;
}

.ant-collapse-item-content {
  padding: 0;
}

.ant-list-item-content-container {
  width: 100px;

}

.ant-list-item-content-main {
  font-size: 14px;
  color: #909090;
}

.ant-list-item-extra-brief {
  font-size: 14px;
  color: #333;
}

.ant-list-item-extra-container {
  width: calc(100% - 100px);
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  box-sizing: border-box;

}

.dyt-list {
  margin-top: 0;
}

.dyt-list .am-list-item-thumb {
  border-radius: 5px;
}

.dyt-list .am-list-briefX {
  color: #909090;
  font-size: 14px;
}

.ant-collapse-item-line {
  border-bottom: none;
}

.am-list-sticky {
  position: sticky;
  top: 0;
  z-index: 2;
}

.am-list-item .a-icon-success_no_circle {
  fill: #1677ff;
}

.am-list-item {
  margin: 0 10px;
}

.am-list-item:nth-child(2n+1) {
  background-color: #fbfbfb;
}

.am-list-item .a-shared-checkbox {
  border: 0;
}

.am-list-content {
  width: 110px;
  flex: 1.2;
}

.am-list-extra {
  justify-content: flex-start;
}

.list-title {
  width: 110px;
  white-space: pre-wrap;
}

.list-extra {
  width: 100%;
  text-align: left;
}
.content-box {
	display: flex;
	padding: 12px 15px;
	box-sizing: border-box;
}
.content-box:nth-child(2n+1) {
  background-color: #fbfbfb;
}
.content-box-left {
	width: 95px;
	padding-right: 20px;

}
.content-box-right {
	display: flex;
	align-items: center;
}
</style>
