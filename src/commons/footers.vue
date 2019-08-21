<template>
	<div id="footers">
		<ul id="fs_ul">
			<router-link class="fs_ul_a" :to='{name:"index",params:{"data":"0"}}'>
				<van-icon name="wap-home" size=".2rem"/>
				<p>首页</p>
			</router-link>
			<router-link class="fs_ul_a" :to='{name:"",params:{"data":"1"}}'>
				<van-icon name="qr" size=".2rem"/>
				<p>分类</p>
			</router-link>
			<li class="fs_ul_a" >
				<van-icon name="orders-o" size=".2rem"/>
				<p>课程表</p>
			</li>
			<li class="fs_ul_a" >
				<van-icon name="user-o" size=".2rem"/>
				<p>我的</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"footers",
		props:["footerlist"],
		mounted:function(){
			let oFs_ul_a = document.getElementsByClassName("fs_ul_a");
			if(this.footerlist==0){
				oFs_ul_a[0].style.color="blue"
			}else if(this.footerlist==1){
				oFs_ul_a[1].style.color="blue"
			}
		},
	}
</script>

<style>
	#footers{
		width: 100%;
	}
	#fs_ul{
		width: 100%;
		height: .5rem;
		display: flex;
		list-style: none;
		font-size: .12rem;
		text-align: center;
	    padding-top: .06rem;
	}
	.fs_ul_a{
		display: block;
		width: 25%;
		color: black;
	}
</style>
