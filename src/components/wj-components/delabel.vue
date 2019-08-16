<template>
	<div>
		<section class=" section label-info">
			<h2 class="section-tt">课程标签</h2>
			<div class="s-tag-list labels">
				<span class="tag-item">战略</span>
				<span class="tag-item">沟通</span>
				<span class="tag-item">销售</span>
				<span class="tag-item">财务</span>
				<span class="tag-item">职场心态</span>
			</div>
		</section>
		<section class="section label-info">
			<h2 class="section-tt">老师介绍</h2>
			<div class="teacher-list-wrapper">
				<ul class="teacher-list">
					<li class="teacher-item-wrapper">
						<img src="../../assets/wj-imgs/teacher1.jpg" class="teacher-avatar "/>
						<div class="teacher-desc">
							<p class="teacher-name">路骋</p>
							<p class="teacher-summary">老路识堂创始人，天使投资人；历任京东集团副总裁，聚美优品POP事业部总经理等；清华大学 – 麻省理工【MIT】国际MBA；
							《用得上的商学课》主讲，上线1年全网订阅60万份，总营收过6000万。</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="section label-info">
			<h2 class="section-tt">课程详情</h2>
			<div style="text-align: center;" class="dela">
				<p>100天，99元；</p>
				<p>每天1块钱，每天7分钟；</p>
				<p>每天1个用得上的商学知识点，</p>
				<p>每个知识点3种实战用法。</p>
				<p class="last">课程共计100期，每月更新20期</p>
				<img src="../../assets/wj-imgs/inteacher01.jpg" />
				<img src="../../assets/wj-imgs/inteacher.jpg" />
				<img src="../../assets/wj-imgs/inteacher03.jpg" />
				<img src="../../assets/wj-imgs/inteacher04.jpg" />
				<img src="../../assets/wj-imgs/inteacher05.jpg" />
				<img src="../../assets/wj-imgs/inteacher06.jpg" />
				<span class="detail-sign">* 课程提供者： <!-- -->北京老路说管理咨询有限公司</span>
			</div>
		</section>
		<section class="section comment-info">
			<h2 class="section-tt">学员评论(53)
				<router-link to="/comment">
				<a class="btn-viewall js-report-link">查看全部</a>
				</router-link>
			</h2>
			<ul class="comment-list">
				<li class="comment-item">
					<div class="comment-user">
						<img class="comment-avatar" src="../../assets/wj-imgs/personpic01.jpg">
						<div>
							<p class="comment-username">A****</p>
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
						<p class="comment-foot"><span class="comment-studytime">已上课16时39分时评论</span></p>
					</div>
				</li>
			</ul>
		</section>
		<router-link to="/company">
		<section class="section agency-info">
			<h2 class="section-tt">授课机构</h2>
			<a class="agency-card">
				<img class="agency-avatar" src="../../assets/wj-imgs/laolu.png">
				<div class="agency-desc">
					<p class="agency-name">北京老路说管理咨询有限公司</p>
					<ul class="agency-data">
						<li>好评度93%</li>
						<li class="slash"> &nbsp;| &nbsp; </li>
						<li>课程数<!-- -->2</li>
						<li class="slash"> &nbsp; | &nbsp; </li>
						<li>学生数<!-- -->1807</li>
					</ul>
				</div>
			</a>
		</section>
		</router-link>
		<section class="section recomend-courses">
			<h2 class="section-tt">老师推荐课程</h2>
			<a class="course-card-wrapper js-report-link" href="#">
				<div class="course-card-cover">
					<img src="../../assets/wj-imgs/picture00.jpg">
					<span class="course-card-tips">145人购买</span>
				</div>
				<div class="course-card-content">
					<h3 class="course-card-name">用得上的商学课 第2季 - 工作方法论</h3>
					<div class="course-card-price">
						<span class="price">¥99.00</span>
					</div>
				</div>
			</a>
		</section>
		<section class="section recomend-courses">
			<h2 class="section-tt">老师推荐课程</h2>
			<a class="course-card-wrapper js-report-link" href="#">
				<div class="course-card-cover">
					<img src="../../assets/wj-imgs/picture00.jpg">
					<span class="course-card-tips">145人购买</span>
				</div>
				<div class="course-card-content">
					<h3 class="course-card-name">用得上的商学课 第2季 - 工作方法论</h3>
					<div class="course-card-price">
						<span class="price">¥99.00</span>
					</div>
				</div>
			</a>
			<a class="course-card-wrapper js-report-link" href="#">
				<div class="course-card-cover">
					<img src="../../assets/wj-imgs/picture00.jpg">
					<span class="course-card-tips">145人购买</span>
				</div>
				<div class="course-card-content">
					<h3 class="course-card-name">用得上的商学课 第2季 - 工作方法论</h3>
					<div class="course-card-price">
						<span class="price">¥99.00</span>
					</div>
				</div>
			</a>
		</section>
		
		<div class="section topic-seo-mod">
			<div class="tab">
				<div class="tab-bar">
					<div class="tab-bar-item active">相关培训</div>
					<div class="tab-bar-item ">热门培训</div>
				</div>
				<div class="tab-content">
					<div class="tab-content-item active">
						<a href="#">注会<!-- -->培训</a>
						<a href="#">金融理财<!-- -->培训</a>
						<a href="/topic/boyinzhuchi">播音主持<!-- -->培训</a>
						<!-- <a href="/topic/mem">mem培训</a>
						<a href="/topic/shuidiangong">水电工培训</a>
						<a href="/topic/chujikuaiji">初级会计培训</a> -->
					</div>
					<!-- <div class="tab-content-item ">
						<a href="/topic/jianshenjiaolian">健身教练培训</a>
						<a href="/topic/dongmanjiaoyu">动漫教育培训</a>
						<a href="/topic/aoshu">奥数培训</a>
					</div> -->
				</div>
			</div>
		</div>
		<div class="detail__bottom--container">
			<button class="bottom-btn js-report-link buy undefined">立即购买</button>
		</div>
		</div>
</template>

<script>
</script>

<style  scoped="scoped">
	.section{
		padding: .16rem .16rem .28rem;
		    position: relative;
			    line-height: 1.5;
    color: #333;
	}
	.section-tt {
    font-size: .2rem;
    line-height: .28rem;
    margin-bottom: .16rem;
}

.s-tag-list {
    overflow: hidden;
}
.section:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    right: 0;
    height: 0;
    border-top: .005rem solid #ddd;
}
.tag-item {
    /* border-radius: .14286rem; */
	margin: 0 .08rem .1rem 0;
    padding: 0 .08rem;
	background: #eee;
	float: left;
	font-size: .14rem;
	line-height: .28rem;
}

.teacher-list-wrapper {
    height: .84rem;
    /* overflow: hidden; */
    /* position: relative; */
}
.teacher-list {
    white-space: nowrap;
   /* display: inline-block; */
    padding-right: .16rem;
	height: .82rem;
}
.teacher-item-wrapper:last-child {
    margin-right:.59rem;
}

.teacher-item-wrapper {
    height: .82rem;
	width: 3rem;
    display: flex;
    vertical-align: middle;
    padding: 0 .16rem;
    white-space: normal;
	box-sizing: border-box;
}
.teacher-avatar {
    width: .8rem;
    height: .8rem;
    margin-right: .08rem;
    border-radius: 50%;
}
.teacher-desc {
    -webkit-box-flex: 1;
    flex: 1;
}
.teacher-name {
    font-size: .16rem;
    max-width: 1.8rem;
	height: .24rem;
	line-height: .24rem;
}

.teacher-summary {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: .14rem;
    color: #777;
    height: .58rem;
    line-height: .19rem;
}

.dela p{
	font-size: .16rem;
	font-weight: 600;
}
.last{
	margin-top: .3rem;
	margin-bottom: .1rem;
}
.dela img{
	width: 100%;
	display: block;
}
.dela .detail-sign{
	font-size: .1rem;
	text-align: -moz-left;
}
.btn-viewall {
    float: right;
    font-size: .14rem;
    color: #000;
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
	font-size: .08rem;
	color: yellow;
	margin-right: .04rem;
}
.comment-foot {
    margin-top: .12rem;
    color: #777;
}

.agency-card {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.agency-avatar {
    width: .56rem;
    height: .56rem;
    padding: .06rem;
    border: .005rem solid #ddd;
    /* border-radius: .14286rem; */
    margin-right: .08rem;
}
.agency-desc{
	flex: 1;
}

.agency-name {
    font-size: .16rem;
    color: #000;
    margin-bottom: .04rem;
}
.agency-data {
    font-size: .14rem;
    color: #777;
    line-height: .18rem;
	display: flex;
}
.agency-data  li{
	display: inline;
}

.course-card-wrapper {
    clear: both;
    overflow: hidden;
    margin-bottom: .16rem;
    min-height: .72rem;
    display: block;
}

.course-card-wrapper .course-card-cover {
    width: 1.28rem;
    height: .72rem;
    float: left;
    position: relative;
}

.course-card-cover img {
    width: 100%;
}

.course-card-tips {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .16rem;
    font-size: .12rem;
    line-height: .16rem;
    text-indent: .005rem;
    color: #fff;
    background-color: rgba(0,0,0,.7);
}

.course-card-wrapper .course-card-content {
    margin-left: 1.4rem;
}

.course-card-wrapper .course-card-content .course-card-name {
    font-size:.16rem;
    color: #000;
    line-height: .24rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
}

.price {
    font-size: .14rem;
    color: #f4621f;
    line-height: .24rem;
}

.topic-seo-mod {
    padding-top: .16rem;
    margin-bottom: .2rem;
}

.topic-seo-mod .tab-bar {
    border-bottom: .01rem solid #eee;
    display: flex;
}

.tab-bar-item.active {
    border-bottom: .02rem solid #009eef;
    color: #009eef;
	font-size: .2rem;
}

.tab-bar-item {
    line-height: .41rem;
    padding: 0 .04rem;
    font-size:.2rem;
    max-width: .88rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right:.2rem;
    white-space: nowrap;
    text-align: center;
}
.tab-content a{
	display: block;
    border: .005rem solid #ddd;
    border-radius: .3rem;
    font-size: .14rem;
    padding: .06rem .14rem;
    margin-right: .06rem;
    margin-bottom: .08rem;
    color: #333;
	/* width: 1.14rem; */
	float: left;
	box-sizing: border-box;
}

.tab-content {
    padding: .12rem .04rem;
	height: .64rem;
	box-sizing: border-box;
}

.topic-seo-mod .tab-content-item {
    max-height: .4rem;
   /* overflow: hidden; */
}

.bottom-btn {
    display: block;
    width: 100%;
    height: .52rem;
    color: #fff;
    background: #23b8ff;
	font-size: .16rem;
    border: 0;
    padding: 0;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index:900;
}

/* .detail__bottom--container{
	position: fixed;
	left: 0;
	bottom: 0;
	z-index:900;
} */
</style>
