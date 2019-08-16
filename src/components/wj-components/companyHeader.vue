<template>
	<div class="companyHeader">
		<div class="bacimg">
        </div>
        <div class="header">
            <div class="header__cnt">
                <img class="header__logo" src="../../assets/wj-imgs/laolu.png">
                <div class="header__name__cont">
                    <h1 class="header__name">北京老路说管理咨询有限公司</h1>
                </div>
                <p class="header__intro">真的发生改变</p>
            </div>
            <ul class="header__comment-list">
                <li class="header__comment-item">好评度93%</li>
                <li class="header__comment-item">课程数2</li>
                <li class="header__comment-item">学生数1809</li>
             </ul>
        </div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
    .bacimg{
        height: 1.4rem;
        background: #fff url(../../assets/wj-imgs/blue.jpg) no-repeat 0 0;
        background-size: cover;
        width: 100%;
    }

    .header {
    height: 1.4rem;
    background: #f2f2f2;
        position: relative;
    z-index: 105;
}

.header__cnt {
    position: relative;
    padding: .12rem .06rem 0 .95rem;
}

.header__logo {
    display: block;
    position: absolute;
    top: -0.17rem;
    left: .12rem;
    width: .71rem;
    height: .71rem;
    background: #fff;
}
.header__name__cont {
    display: block;
    width: 100%;
    height: .2rem;
}

.header__name {
    display: inline-block;
    float: left;
    overflow: hidden;
    margin-right: .05rem;
    box-sizing: border-box;
    max-width: 100%;
    height: .2rem;
    font-size: .18rem;
    line-height: .2rem;
    vertical-align: top;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #000;
}

.header__intro {
    overflow: hidden;
    margin-top: .05rem;
    max-width: 100%;
    height: .18rem;
    font-size: .14rem;
    line-height: .18rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #777;
}

.header__comment-list {
    overflow: hidden;
    margin-top: .15rem;
    width: 100%;
}

.header__comment-item {
    float: left;
    position: relative;
    width: 33.33%;
    font-size: .14rem;
    line-height: .18rem;
    text-align: center;
    color: #777;
}

.header__comment-item:before {
    position: absolute;
    top: .02rem;
    left: 0;
    width: 1px;
    height: .14rem;
    background: #777;
    content: "";
}

.header__comment-item:first-child:before {
    display: none;
}
</style>
