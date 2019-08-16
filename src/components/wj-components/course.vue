<template>
	<ul class="course">
		<li class="section recomend-courses">
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
		</li>
        <li class="section recomend-courses">
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
		</li>
	</ul>
</template>

<script>
</script>

<style scoped="scoped">
	.section{
		padding: .15rem .16rem .15rem;
		    position: relative;
			    line-height: 1.5;
    color: #333;
	}

    .course-card-wrapper {
    clear: both;
    overflow: hidden;
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
</style>