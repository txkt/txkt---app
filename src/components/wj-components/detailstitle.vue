<template>
	<div class="basicInfo">
		<h1>老路：用得上的商学课</h1>
		<div class="apply-info">
			<div class="basic-summary-data">
				<span class="price course-detail-price">
					<span class="coursedot">¥</span>
				99.00</span>	
				<span class="summary-item">购买人数 1660</span>
				<span class="summary-item">好评 93%</span>
			</div>
		</div>
		<div class="basic-summary-operation">
			<div type="primary" @click="heart">
			<div class="operation-item">
				<van-icon name="like-o"  ref="shou"/>
				<van-icon name="like"  ref="shou1" :style="{color:'red'}" style="display:none"/>
				<span class="operation-text">收藏</span>
			</div>
			</div>
			<div class="operation-item">
				<van-icon name="comment-o" />
				<span class="operation-text">咨询</span>
			</div>
			<div class="operation-split"></div>

			<div type="primary" @click="showPopup" style="display:flex">
			<div class="operation-item">
				<van-icon name="passed" />
				<span class="operation-text">支付保障</span>
			</div>
			<div class="operation-item">
				<van-icon name="passed" />
				<span class="operation-text">课前随时退</span>
			</div>
			</div>
		</div>
		<van-popup v-model="show" position="bottom" :style="{height:'2.6rem'}">
			<div class="bottom-modal-header">服务承诺</div>
			<div class="bottom-modal-body can-scroll">
				<ul class="right-items">
					<li class="right-item">
						<h5>支付保障</h5>
						<p>平台内付款由腾讯课堂承诺保障。</p>
					</li>
					<li class="right-item">
						<h5>课前随时退</h5>
						<p>含此标识的课程，课程开始前可无条件退款，随到随学课程除外，ios课点、京东支付暂不支持主动退款。</p>
					</li>
				</ul>
			</div>
		</van-popup>
		<van-popup v-model="show1" position="top" :style="{height:'.52rem'}" class="shoucang">
			<van-icon name="checked"  :style="{color:'green'}"/>
			添加收藏成功
		</van-popup>
	</div>
</template>

<script>
	export default {
		name:'detailstitle',
		data:function(){
			return {
				show: false,
				show1:false
			}
		},
		methods: {
    		showPopup() {
      			this.show = true;
			},
			heart(){
				this.$refs.shou.style.display="none";
				this.$refs.shou1.style.display="block";
				this.$refs.shou1.style.color="red";
				this.show1=true;
			}
 		 }
	}	
</script>

<style scoped="scoped">
	.basicInfo{
		padding: .16rem;
	}
	
	.basicInfo h1 {
    font-size: .2rem;
    color: #000;
    line-height: .28rem;
    font-weight: 400;
}

.apply-info{
	color: #777;
	font-size: 12px;
	line-height: 1.5;
}
.basic-summary-data{
	display: flex;
	justify-content: flex-start;
    -webkit-box-align: center;
	align-items: center;
	margin-top: 12px;
	height: .24rem;
}

.price {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: .16rem;
    font-size: .16rem;
    color: #f4621f;
}

.summary-item {
    margin-right: .12rem;
}
.basic-summary-operation{
	display: flex;
/* 	    flex-wrap: wrap;
    -webkit-box-pack: start;
	    justify-content: flex-start; */
		align-items: center;
		margin-top: 12px;
		font-size: 12px;
		color: #777;
		height: .18rem;
}
.operation-item{
	display: flex;
	margin-right: .12rem;
}
.van-icon{
	line-height: .18rem;
	padding: 0 .03rem;
}
.operation-split {
    height: .12rem;
    margin-right: .12rem;
    border-left: .02rem solid #bbb;
}
.bottom-modal-header {
    height: .48rem;
    text-align: center;
    position: relative;
    font-size: .16rem;
    line-height: .48rem;
    color: #000;
	border-bottom: .005rem solid #bbb;
}

.bottom-modal-body {
    height: 2.12rem;
    overflow-y: auto;
}

.right-items {
    padding: .16rem;
}

.right-item {
    margin-bottom: .2rem;
}

.right-item h5 {
    font-size: .16rem;
    color: #000;
    line-height: .24rem;
    font-weight: 400;
}
.right-item p {
    font-size: .14rem;
    color: #777;
    line-height: .24rem;
}
.shoucang{
	text-align: center;
	line-height: .52rem;
	height: .52rem;
	font-size: .2rem
}
</style>
