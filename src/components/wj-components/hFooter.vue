<template>
	<div class="m_footer">
		<p>Copyright © 2019 Tencent. All Rights Reserved.</p>
		<div class="back2Top" @click="up">
			<div class="top"></div>
			<div class="arrow-up arrow"></div>
			<div class="arrow-down arrow"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'hFooter',
		data:function(){
			return {
				
			}
		},
		methods:{
			up:function(){
				document.body.scrollTop=document.documentElement.scrollTop=0;
			}
		}
	}	
</script>

<style scoped="scoped">
	.m_footer{
	background-color: #444547;
    color: #777;
	height: 0.6rem;
	line-height: 0.6rem;    
	text-align: left;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
	}
	.m_footer p{
	text-align: center;
    font-size: 8px;
	}
	.back2Top{
	width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    background: #333;
	}
	
	.top {
    margin-left: 10px;
    width: 0.2rem;
    height: 0.15rem;
    border-bottom: 2px solid #fff;
}

.arrow-up {
    border-width: 10px;
    border-color: transparent transparent #fff;
    position: relative;
    top: -8px;
	}
	
	.arrow {
    margin-left: 10px;
    height: 0;
    width: 0;
    font-size: 0;
    line-height: 0;
    border-style: solid;
}
.arrow-down {
    border-width: 8px;
    position: relative;
    top: -22px;
    left: 2px;
    border-color: transparent transparent #333;
}
</style>
