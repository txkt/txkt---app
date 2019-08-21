<template>
	<div>
		<ul class="teacher-list">
            <li class="border-bottom">
                <div class="u-teacher-card">
                     <div class="u-teacher-card__img">
                         <img src="../../assets/wj-imgs/130.webp">
                    </div> 
                    <div class="u-teacher-card__right"> 
                        <h3 class="u-teacher-card__name">
                            <em class="u-teacher-card__word">安心</em>
                         </h3>
                         <p class="u-teacher-card__info">
                             <span class="u-teacher-card__info-item">课程1</span>
                             <span class="u-teacher-card__info-item">学生2</span>
                        </p> 
                       <p class="u-teacher-card__desc">80后准妈妈，曾任职于百度、京东等一线互联网公司，致力于让更多中老年人赶上移动互联网时代</p>
                    </div>
                </div>
            </li>
            <li class="border-bottom">
                <div class="u-teacher-card">
                     <div class="u-teacher-card__img">
                         <img src="../../assets/wj-imgs/teacher1.jpg">
                    </div> 
                    <div class="u-teacher-card__right"> 
                        <h3 class="u-teacher-card__name">
                            <em class="u-teacher-card__word">路骋</em>
                         </h3>
                         <p class="u-teacher-card__info">
                             <span class="u-teacher-card__info-item">课程2</span>
                             <span class="u-teacher-card__info-item">学生1807</span>
                        </p> 
                        <p class="u-teacher-card__desc">老路识堂创始人，天使投资人；<br>
                        历任京东集团副总裁，聚美优品POP事业部总经理等；<br>
                        清华大学 – 麻省理工【MIT】国际MBA；<br>
                        《用得上的商学课》主讲，上线1年全网订阅60万份，总营收过6000万。</p>  
                    </div>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.teacher-list {
    position: relative;
    padding-left: .1rem;
    background-color: #fff;
    /* min-height: 4rem; */
}
.border-bottom{
    position: relative;
}

.u-teacher-card {
    display: block;
    padding: .14rem 0;
    background-color: #fff;
}
.u-teacher-card__img {
    float: left;
    overflow: hidden;
    border-radius: .65rem;
    width: .65rem;
    height:.65rem;
}

.u-teacher-card__img img{
    width: 100%;
    height: 100%;
}

.u-teacher-card__right {
    margin-left: .75rem;
    padding-right: .1rem;
}

.u-teacher-card__name {
    font-size: 0;
    display: block;
}
.u-teacher-card__word {
    display: inline-block;
    overflow: hidden;
    margin-right: .04rem;
    margin-bottom: .09rem;
    max-width: 70%;
    font-size: .16rem;
    font-style: normal;
    line-height: .22rem;
    vertical-align: top;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #000;
}

.u-teacher-card__info {
    font-size: .14rem;
    line-height: .14rem;
    color: #000;
}

.u-teacher-card__info-item {
    display: inline-block;
    margin-right: .12rem;
    border-right: 1px solid #ddd;
    padding-right: .12rem;
    height: .14rem;
    font-size: .14rem;
    line-height: .14rem;
    color: #000;
}

.u-teacher-card__desc {
    margin-top: .08rem;
    max-height: .63rem;
    font-size: .14rem;
    line-height: .21rem;
    color: #777;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
}

.border-bottom:after {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    border-top: 1px solid #e1e1e1;
    content: ' ';
}
</style>