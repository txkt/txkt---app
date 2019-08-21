<template>
	<div>
		<section class=" section label-info">
			<h2 class="section-tt">课程标签</h2>
			<div class="s-tag-list labels">
				<!-- <span class="tag-item">战略</span>
				<span class="tag-item">沟通</span>
				<span class="tag-item">销售</span>
				<span class="tag-item">财务</span>
				<span class="tag-item">职场心态</span> -->
				<span class="tag-item" v-for="item in data.labels">{{item}}</span>
			</div>
		</section>
		<section class="section label-info">
			<h2 class="section-tt">老师介绍</h2>
			<div class="teacher-list-wrapper">
				<ul class="teacher-list">
					<li class="teacher-item-wrapper">
						<img :src="data.teacher.tea_imgUrl" class="teacher-avatar "/>
						<div class="teacher-desc">
							<p class="teacher-name">{{data.teacher.tea_name}}</p>
							<p class="teacher-summary">{{data.teacher.tea_summary}}</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="section label-info">
			<h2 class="section-tt">课程详情</h2>
			<div style="text-align: center;" class="dela" ref="domore">
				<!-- <p>100天，99元；</p>
				<p>每天1块钱，每天7分钟；</p>
				<p>每天1个用得上的商学知识点，</p>
				<p>每个知识点3种实战用法。</p> --> 
				<p v-for="i in data.dela">{{i}}</p>
				<!-- <p class="last">课程共计100期，每月更新20期</p> -->
				<!-- <img src="../../assets/wj-imgs/inteacher01.jpg" />
				<img src="../../assets/wj-imgs/inteacher.jpg" />
				<img src="../../assets/wj-imgs/inteacher03.jpg" />
				<img src="../../assets/wj-imgs/inteacher04.jpg" />
				<img src="../../assets/wj-imgs/inteacher05.jpg" />
				<img src="../../assets/wj-imgs/inteacher06.jpg" /> -->

				<img  v-for="t in data.srcimg" :src="t">
				
			</div>
			<span class="detail-sign">* 课程提供者： <!-- -->{{data.sign}}</span>
		</section>
		<section class="section comment-info">
			<h2 class="section-tt">学员评论({{data.comment.num1}})
				<router-link to="/comment">
				<a class="btn-viewall js-report-link">查看全部</a>
				</router-link>
			</h2>
			<ul class="comment-list">
				<li class="comment-item">
					<div class="comment-user">
						<img class="comment-avatar" :src="data.comment.pimg">
						<div>
							<p class="comment-username">{{data.comment.username}}</p>
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
						<p class="comment-txt">{{data.comment.comtext}}</p>
						<p class="comment-foot"><span class="comment-studytime">{{data.comment.comfoot}}</span></p>
					</div>
				</li>
			</ul>
		</section>
		<router-link to="/company">
		<section class="section agency-info">
			<h2 class="section-tt">授课机构</h2>
			<a class="agency-card">
				<img class="agency-avatar" :src="data.agency.agencyimg">
				<div class="agency-desc">
					<p class="agency-name">{{data.agency.agencyname}}</p>
					<ul class="agency-data">
						<li>好评度{{data.agency.agencygood}}</li>
						<li class="slash"> &nbsp;| &nbsp; </li>
						<li>课程数<!-- -->{{data.agency.agencynum}}</li>
						<li class="slash"> &nbsp; | &nbsp; </li>
						<li>学生数<!-- -->{{data.agency.studentnum}}</li>
					</ul>
				</div>
			</a>
		</section>
		</router-link>
		<ul class="section recomend-courses" >
			<h2 class="section-tt">老师推荐课程</h2>
			<li class="course-card-wrapper js-report-link" href="#" v-for="i in data.recomend_courses"  >
				<div class="course-card-cover">
					<img :src="i.img1">
					<span class="course-card-tips">{{i.course_tips}}人购买</span>
				</div>
				<div class="course-card-content">
					<h3 class="course-card-name">{{i.course_name}}</h3>
					<div class="course-card-price">
						<span class="price">{{i.course_price}}</span>
					</div>
				</div>
			</li>
		</ul>
		<ul class="section recomend-courses">
			<h2 class="section-tt">机构热门课程</h2>
			<li class="course-card-wrapper js-report-link" href="#" v-for="tt in data.recomend" >
				<div class="course-card-cover">
					<img :src="tt.imgurl">
					<span class="course-card-tips">{{tt.course_tips}}人购买</span>
				</div>
				<div class="course-card-content">
					<h3 class="course-card-name">{{tt.course_name}}</h3>
					<div class="course-card-price">
						<span class="price">{{tt.course_price}}</span>
					</div>
				</div>
			</li>
			<!-- <a class="course-card-wrapper js-report-link" href="#">
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
			</a> -->
		</ul>
		
		<div class="section topic-seo-mod">
			<div class="tab">
				<div class="tab-bar">
					<div class="tab-bar-item active" ref="xiang" @click="xx">相关培训</div>
					<div class="tab-bar-item " @click="hot" ref="re">热门培训</div>
				</div>
				<div class="tab-content">
					<div class="tab-content-item" ref="zhu" v-show="tru">
						<a href="#">注会<!-- -->培训</a>
						<a href="#">金融理财<!-- -->培训</a>
						<a href="#">播音主持<!-- -->培训</a>
					</div>
					<div class="tab-content-item" ref="jian" style="display:none" v-show="fal">
						<a href="#">健身教练培训</a>
						<a href="#">动漫教育培训</a>
						<a href="#">奥数培训</a>
					</div>
				</div>
			</div>
		</div>
		<div class="detail__bottom--container">
			<button class="bottom-btn js-report-link buy undefined">立即购买</button>
		</div>
		</div>
</template>

<script>
	export default {
		name:'delabel',
		data:function(){
			return {
				data:"",
				tru:true,
				fal:false
			}
		},
		methods:{
			domore:function(){
				this.$refs.domore.style.maxHeight="";
			},
			hot:function(){
				// this.$refs.zhu.style.display="none";
				// this.$refs.jian.style.display="block";
				// this.$refs.re.style.borderBottom=".02rem solid #009eef";
				// this.$refs.re.style.color="#009eef";
				// this.$refs.re.style.fontSize=" .2rem";
				// this.$refs.xiang.style.borderBottom="none";
				// this.$refs.xiang.style.color="black";
				this.tru=true;
				this.fal=false
			},
			xx:function(){
				// this.$refs.jian.style.display="none";
				// this.$refs.zhu.style.display="block";
				// this.$refs.xiang.style.borderBottom=".02rem solid #009eef";
				// this.$refs.xiang.style.color="#009eef";
				// this.$refs.xiang.style.fontSize=" .2rem";
				// this.$refs.re.style.borderBottom="";
				// this.$refs.re.style.color="";
				// this.$refs.re.style.fontSize="";
				this.tru=false;
				this.fal=true
			}
		},
		props:{
			id:String
		},
		created:function(){
		fetch('http://localhost:3000/details')
		.then((res)=>{
			return res.json();
		})
		.then((datas)=>{
			for(var i in datas){
                    if(datas[i].details_id==this.id){
						this.data=datas[i]
                    }
			    }   
		})
	}	
	}	
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
.dela:last-child{
	margin-top: .3rem;
	margin-bottom: .1rem;
}
.dela img{
	width: 100%;
	display: block;
}
.detail-sign{
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
