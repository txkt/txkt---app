<template>
	<div class="full-screen-tip">
        <p>该机构暂时未编辑主页</p>
    </div>
</template>

<script>
</script>

<style scoped="scoped">
	.full-screen-tip {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: .14rem;
    display: block;
}

.full-screen-tip p{
        margin-top: -1rem;
    padding-top: 1.25rem;
    background: url(../../assets/wj-imgs/kong.png) no-repeat center top;
    background-size: 1.25rem 1.25rem;
    position: absolute;
    top: 75%;
    text-align: center;
    width: 100%;
    height: .2rem;
    line-height: .2rem;
    color: #c8c8c8;
    word-break: break-all;
}
</style>