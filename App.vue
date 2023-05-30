<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* #ifdef H5 */
	.uni-page-head{
		display: none;
	}
	/* #endif */
	
	page{
		background-color: #f9f9f9 !important;
		position: relative;
	}
	/*每个页面公共css */
	.content {
		background-color: #f9f9f9;
	}
</style>
