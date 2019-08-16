<template>
	<div id="login">
		<div id="l_top"></div>
		<ul class="l_ul">
			<input type="text" placeholder="QQ号码/手机/邮箱" v-model="linputCon">
			<input class="l_ul_two" type="password" placeholder="请输入你的QQ密码" v-model="linputContent">
			<div class="l_ul_btn" @click="lSubmit ">登 录</div>
			<li>
				<router-link class="l_li_a" v-for="(acon,asite) in acontent" :to="'/'+asite">{{acon}}</router-link>
			</li>
			<div id="l_ul_done" @click="deletes('linputCon')"></div>
			<div id="l_ul_dtwo" @click="deletes('linputContent')"></div>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"login",
		data:function(){
			return {
				acontent:{
					"Forgetword":"忘记密码?",
					"Signin":"注册新账号"
				},
				linputCon:"",
				linputContent:""
			}
		},
		watch:{
			linputCon:function(){
				if(this.linputCon != ""){
					l_ul_done.style.display="block"
				}else{
					l_ul_done.style.display="none"
				}
			},
			linputContent:function(){
				if(this.linputContent != ""){
					l_ul_dtwo.style.display="block"
				}else{
					l_ul_dtwo.style.display="none"
				}
			}
		},
		methods:{
			deletes:function(dada){
				if(dada == "linputCon"){
					this.linputCon = "";
				}else{
					this.linputContent = "";
				}
			},
			lSubmit:function(){
				if(this.linputCon != "" && this.linputContent != ""){
					let linputCon_s = {userName:this.linputCon,userPassword:this.linputContent};
					
					const baseUrl = "   /linputCon_s"
					fetch(baseUrl,{method: 'POST'})
					.then(function(res){
						return res.json();
					})
					.then(function(obj){
						console.log(obj)
					});
				}			
			}
		}
	}
</script>

<style>
	#login{
		width: 100%;
		padding-top: .3rem;
		background: #eee;
	    height: 6.36rem;
	}
	#l_top{
		width: 2.44rem;
		height: 1rem;
		background: url(../assets/img/logo.png) no-repeat center center ;
		margin: 0 auto .2rem;
		background-size:auto 100% ;
	}
	.l_ul{
		width:77.3%;;
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		position: relative;
	}
	.l_ul input{
		width: 100%;
		height: .44rem;
		border: 0;
		font-size: 16px;
		text-indent:.15rem;
		border-radius: 4px;
	}
	.l_ul_two{
		margin-top: .01rem;
	}
	.l_ul_btn{
		width: 100%;
		height: .44rem;
		background:#146fdf;
		border-radius: 4px;
		font-size: 16px;
		color: white;
		text-align: center;
		line-height: .44rem;
		margin-top: .15rem;
	}
	.l_ul li{
		width: 100%;
		list-style: none;
		display: flex;
		justify-content: space-between;
		margin-top: .2rem;
	}
	.l_li_a{
		font-size: 14px;
	    color: #246183;
	}
	#l_ul_done,
	#l_ul_dtwo{
		height: .44rem;
		width: 8%;
		background: url(../assets/img/android_logo_v1.png) no-repeat center;
		background-position: -114px 10px;
		position: absolute;
		display: none;
	}
	#l_ul_done{
		top: 0;
	    right: .13rem;
	}
	#l_ul_dtwo{
		top:.45rem ;
	    right: .13rem;
	}
</style>
