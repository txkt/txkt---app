<template>
	<div>
		<div class="mod-comments-info clearfix">
			<div class="mod-comments-info__total">
			<span class="mod-comments-info__praise">好评度&nbsp;</span>
			<span class="mod-comments-info__rate">93%</span>
			</div>
		</div>
		<div class="mod-comments-classify">
			<div class="mod-comments-classify__item mod-comments-classify__all z-in-active">全部 ( 61 )</div>
			<div class="mod-comments-classify__item mod-comments-classify__good">好评 ( 57 )</div>
			<div class="mod-comments-classify__item mod-comments-classify__medium">中评 ( 1 )</div>
			<div class="mod-comments-classify__item mod-comments-classify__bad">差评 ( 3 )</div>
		</div>
		
		<section class="section comment-info">
			<ul class="comment-list">
				<li class="comments-list-item">
					<div class="comment-user">
						<img class="comment-avatar" src="../../assets/wj-imgs/personpic01.jpg">
						<div style="display: flex;">
							<div class="comments-list-item__name">A****</div>
							<span class="star-list">
								<van-icon name="star" />
								<van-icon name="star" />
								<van-icon name="star" />
								<van-icon name="star" />
								<van-icon name="star" />
							</span>
						</div>
					</div> 
					<div class="comment-content">
						<p class="comment-txt">实用，精致，用心之作。实货干货丰富 ，语言幽默。</p>
						<p class="comment-foot">
							<span class="comment-studytime">已上课16时39分时评论</span>
							<time class="comment-time">2019-07-17</time>
						</p>
					</div>
				</li>
				<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
  					<li v-for="item in list"  class="comments-list-item">
						  <!-- {{ item }} -->
						<div class="comment-user">
						<img class="comment-avatar" src="../../assets/wj-imgs/personpic01.jpg">
						<div style="display: flex;">
							<div class="comments-list-item__name">A****</div>
							<span class="star-list">
								<van-icon name="star" />
								<van-icon name="star" />
								<van-icon name="star" />
								<van-icon name="star" />
								<van-icon name="star" />
							</span>
						</div>
					</div> 
					<div class="comment-content">
						<p class="comment-txt">实用，精致，用心之作。实货干货丰富 ，语言幽默。</p>
						<p class="comment-foot">
							<span class="comment-studytime">已上课16时39分时评论</span>
							<time class="comment-time">2019-07-17</time>
						</p>
					</div>
					</li>
					</ul>
				</ul>
		</section>
	</div>
</template>

<script>
	export default {
		name:'goodCom',
		data:function(){
			return {
				item:1,
				// list:[1,2,3]
			}
		},
		methods: {
    		// loadMore() {
  			// 	this.loading = false;
			// 	setTimeout(() => {
			// 		let last = this.list[this.list.length - 1];
			// 		for (let i = 1; i <= 10; i++) {
			// 		this.list.push(last + i);
			// 		}
			// 		this.loading = false;
			// 	}, 2500);
			// 	}
 		 }
	}	
</script>

<style scoped="scoped">
	.mod-comments-info {
    position: relative;
    padding: .1rem 0 .1rem;
    line-height: .2rem;
    vertical-align: middle;
}

.mod-comments-info__total {
    padding-left: .15rem;
    font-size: .15rem;
    line-height: .2rem;
    text-align: left;
    color: #0a0a0a;
	height: .2rem;
}

.mod-comments-info__total span{
	display: block;
	float: left;
}

.mod-comments-classify {
    display: -webkit-box;
    padding: 0 .1rem;
}

.mod-comments-classify__item.z-in-active {
    color: #23b8ff;
    background: rgba(35,184,255,.1);
}
.section-tt {
    font-size: .2rem;
    line-height: .28rem;
    margin-bottom: .16rem;
}

.btn-viewall {
    float: right;
    font-size: .14rem;
    color: #000;
}
.mod-comments-classify__item {
    -webkit-box-flex: 1;
    width: 0;
    line-height: .3rem;
    margin: 4px;
    text-align: center;
    color: #000;
    border: 1px solid #23b8ff;
    border-radius: .18rem;
    font-size: .12rem;
}

.section{
		padding: .16rem .16rem .28rem;
		    position: relative;
			    line-height: 1.5;
    color: #333;
	}
	
	.comment-item {
	    position: relative;
	    font-size: .14rem;
	    /* line-height: 1.42857rem; */
	    color: #000;
	}
	.comment-user {
	    display: flex;
	    -webkit-box-align: center;
	    align-items: center;
	    margin-bottom: .08rem;
		
	}
	.comment-avatar {
	    width: .32rem;
	    height: .32rem;
	    border-radius: 50%;
	    margin-right: .09rem;
	}
	.comment-username {
	    line-height: .19rem;
		font-size: .14rem;
	}
	.star-list .van-icon{
		font-size: .15rem;
		color: #ffae05;
		margin-right: .04rem;
	}
	.comment-foot {
	       position: relative;
    height: .16rem;
    padding-bottom: .15rem;
    color: #bbb;
	}
	
	.comments-list-item__name {
    color: #000;
	margin-right: .1rem;
}
.comment-studytime{
	float: left;
}
.comment-time {
    float: right;
	display: block;
}
.comments-list-item {
    position: relative;
    padding-top: .15rem;
    font-size: .14rem;
    line-height: .16rem;
}
.comment-txt{
	padding: .05rem 0 .15rem;
    font-size: .16rem;
    line-height: .2rem;
    letter-spacing: 1px;
    word-wrap: break-word;
    color: #000;
}
.comment-list{
	margin-top: .18rem;
	min-height: .3rem;
}
</style>
