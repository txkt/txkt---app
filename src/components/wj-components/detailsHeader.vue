<template>
	<div class="details_header">
		<van-icon name="wap-home" id="home5" />
		<div class="navigate-split"></div>
		<p class="download-wording">
			<img class="red-envelope" src="../../assets/wj-imgs/down.gif">
			用APP学习
		</p>
		
		<div class="download-btns">
			<span class="download-btn secondary-btn">下载</span>
			<span class="download-btn primary-btn">打开</span>
		</div>
	</div>
</template>
<script>
	export default {
		name:'detailsHeader',
		data:function(){
			return {
				
			}
		}
	}	
</script>


<style scoped="scoped">
	.details_header{
    padding: .12rem;
    font-size: .14rem;
	height: .52rem;
	width: 100%;
	color: black;
	background-color: white;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	    position: fixed;
    top: 0;
    left: 0;
    right: 0;
	z-index: 100;
	}
	#home5{
		font-size: .22rem;
		display: block;
	}
	.navigate-split{
		height: .18rem;
	    border: .01rem solid #ddd;
    margin-left: .06rem;
    margin-right: .06rem;
	}
	
	.download-wording{
		display: flex;
		align-items: center;
		width: 1.79rem;
	}
	.red-envelope {
    width: 18px;
    margin: 0 5px;
}
.download-btns{
	display: flex;
	align-content: center;
}
.secondary-btn{
	color: black;
	background: #edeff5;
	height: .3rem;
	font-size: .14rem;
	padding: .04rem .16rem;
	border-radius: .16rem;
	margin-left: .08rem;
	box-sizing: border-box;
}
.primary-btn{
	color: white;
	background: #23b8ff;
	height: .3rem;
	font-size: .14rem;
	padding: .04rem .16rem;
	border-radius: .16rem;
	margin-left: .08rem;
	box-sizing: border-box;
}
</style>
