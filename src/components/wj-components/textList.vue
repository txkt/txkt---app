<template>
	<div class="catalog-info" style="max-height:5.2rem;" ref="more">
		<ul>
			<li class="sub-chapter" @click="jingji">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" style="display:none" ref="down"/>
					<van-icon name="arrow-up" ref="up"/>
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">01 </span>
							微观经济 - 成本
						</div>
						<span class="icon-mark">试听</span>
					</div>
				</div>
				<ul class="task-items hide" ref="hide">
					<li class="task-item">
						<van-icon name="live" />
						<div class="task-content">
							<div class="task-title">
								<div class="task-name">机会成本 | 放弃的鱼，是选择熊掌的代价？</div>
								<span class="icon-mark">试听</span>
							</div>
								<div class="task-des">8分钟</div>
						</div>
					</li>
					<li class="task-item">
						<van-icon name="live" />
						<div class="task-content">
							<div class="task-title">
								<div class="task-name">比较优势 | 我做的比你好，就应该我做吗？</div>
							</div>
								<div class="task-des">9分钟</div>
						</div>
					</li>
					<li class="task-item">
						<van-icon name="live" />
						<div class="task-content">
							<div class="task-title">
								<div class="task-name">沉没成本 | 因为来都来了，所以将错就错？</div>
							</div>
								<div class="task-des">8分钟</div>
						</div>
					</li>
					<li class="task-item">
						<van-icon name="live" />
						<div class="task-content">
							<div class="task-title">
								<div class="task-name">边际成本 | 飞机起飞前的座位，只卖一元？</div>
							</div>
								<div class="task-des">9分钟</div>
						</div>
					</li>
					<li class="task-item">
						<van-icon name="live" />
						<div class="task-content">
							<div class="task-title">
								<div class="task-name">交易成本 | 马云开始的地方</div>
							</div>
								<div class="task-des">9分钟</div>
						</div>
					</li>
				</ul>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">02 </span>
							微观经济 - 价格
						</div>
						<span class="icon-mark">试听</span>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">03 </span>
							微观经济 - 博弈论
						</div>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">04</span>
							消费心理 - 心理
						</div>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">05</span>
							消费心理 - 效应
						</div>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">06</span>
							经济形态
						</div>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">07</span>
							宏观经济
						</div>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">08</span>
							互联网思维 - 上
						</div>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">09</span>
							互联网思维 - 下
						</div>
					</div>
				</div>
			</li>
			<li class="sub-chapter">
				<div class="chapter-header list-hide">
					<van-icon name="arrow-down" />
					<div class="sub-title">
						<div class="sub-name">
							<span class="tt-num">10</span>
							融资
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="collapse-btn">
			<p class="collapse-virtual"></p>
			<p class="collapse-tip" @click="more">查看全部</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'textList',
		data:function(){
			return {
				
			}
		},
		methods:{
			more:function(){
				this.$refs.more.style.maxHeight="";
			},
			jingji:function(){
				if(this.$refs.up.style.display=="block"){
					this.$refs.up.style.display="none";
				this.$refs.down.style.display="block";
				this.$refs.hide.style.display="none";
				}else{
					this.$refs.up.style.display="block";
				this.$refs.down.style.display="none";
				this.$refs.hide.style.display="block";
				}
				
			}
		}
	}	
</script>

<style scoped="scoped">
	.catalog-info {
    margin-bottom: .2rem;
	    position: relative;
    overflow: hidden;
	font-size: .16rem;
	    line-height: 1.5;
    color: #333;
}
.catalog-info:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    right: 0;
    height: 0;
    transform: scaleY(.5);
    border-top: .01rem solid #ddd;
}

 .sub-chapter {
    padding: 0;
    position: relative;
}
.sub-chapter:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    right: 0;
    height: 0;
    transform: scaleY(.5);
    border-top: .01rem solid #ddd;
}

.chapter-header {
    padding: .12rem .16rem .12rem .12rem;
    position: relative;
    color: #000;
}

.van-icon {
    color: #777;
    float: left;
    margin: .04rem;
	width: .16rem;
	height: .15rem;
}
.sub-title {
    display: flex;
    /* -webkit-box-align: baseline; */
    align-items: baseline;
}
.sub-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	font-size: .16rem;
}
.tt-num{
	display: inline;
}
.icon-mark{
	font-size: 12px;
	color: #23b8ff;
	text-align: center;
	margin-left: .05rem;
	width: .36rem;
	border: .005rem solid #23b8ff;
	display: inline-block;
	height: .19rem;
	vertical-align: middle;

}

.collapse-btn {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -.005rem;
}
.collapse-virtual {
    height: .3rem;
}

.collapse-tip {
    font-size: .14rem;
    color: #000;
    text-align: center;
    line-height: .2rem;
    padding: .2rem 0 .02rem;
    background-color: #fff;
}

.task-items {
    padding-bottom: .12rem;
}

.task-item {
    padding: .08rem .08rem .08rem .4rem;
    line-height: .24rem;
    color: #000;
}

.task-content {
    padding-left: .26rem;
}

.task-title {
    font-size: .16rem;
    -webkit-box-align: baseline;
    align-items: baseline;
}

.task-des {
    font-size: .14rem;
    color: #777;
    line-height: .19rem;
}
.task-name{
	display: inline;
}
</style>
