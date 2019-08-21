<template>
	<div id="forgetword">
		<div id="f_top"></div>
		<ul class="f_ul">
			<input class="f_ul_one" type="text" @blur="fUl_two(0,fUlOne)" v-model="fUlOne" placeholder="用户名/手机号" >
			<span class="f_ul_span" v-show="f_ulSpanone">请填写用户名/手机号</span>
			<ul class="f_ul_ul">
				<input class="f_ul_pho" type="text"  @click="fdownlists" v-model="fUlPho">
				<input class="f_ul_two" type="text" @blur="fUl_two(1,fUlTwo)" v-model="fUlTwo" placeholder="请输入你绑定的手机号">
				<div class="f_ul_downbtn" @click="fdownlists"></div>
			</ul>
			<span class="f_ul_span" v-show="f_ulSpantwo">请输入正确的手机号格式</span>
			<div class="f_ul_codebtn" @click="f_ulCodebtn">发送验证码</div>
			<input class="f_ul_codedata" type="text"  @blur="fUl_two(2,fUlCodedata)" v-model="fUlCodedata" placeholder="验证码" >
			<span class="f_ul_span" v-show="f_ulSpanthree">验证码不正确</span>
			<input class="f_ul_three" type="password"  @blur="fUl_two(3,fUlThree)" v-model="fUlThree" placeholder="请输入新密码" >
			<span class="f_ul_span" v-show="f_ulSpanfour">请输入密码</span>
			<input class="f_ul_three" type="password"  @blur="fUl_two(4,fulFour)" v-model="fulFour" placeholder="请确认密码" >
			<span class="f_ul_span" v-show="f_ulSpanfive">两次密码不一致</span>
			<div class="f_ul_send" @click="f_ulSend">确认修改</div>
		</ul>
		<ul id="f_downlist">
			<li v-for="(list,index) in downlists" @mouseover="shows(index)">{{list}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"forgetword",
		data:function(){
			return {
				downlists:{
					"+86":"中国 +86",
					"+852":"中国香港特别行政区 +852",
					'+853':"中国香港特别行政区 +853",
					"+886":"中国台湾地区 +886"
				},
				fUlPho:"+18",
				fUlTwo:"",
				fUlOne:"",
				fUlCodedata:"",
				fUlThree:"",
				fulFour:"",
				f_ulSpanone:false,
				f_ulSpantwo:false,
				f_ulSpanthree:false,
				f_ulSpanfour:false,
				f_ulSpanfive:false
			}
		},
		methods:{
			fUl_two:function(dd,cc){
				let reg =/^1(5|3|8)\d{9}$/;
				if(dd == 1){
					if(reg.test(cc) == "false"){
						this.f_ulSpantwo=true
					}else if(cc == ""){
						this.f_ulSpantwo=true
					}else{
						this.f_ulSpantwo=false
					}
				}else if(dd == 0){
					if(cc == ""){
						this.f_ulSpanone=true
					}else{
						this.f_ulSpanone=false
					}
				}else if(dd == 3){
					if(cc == ""){
						this.f_ulSpanfour=true
					}else{
						this.f_ulSpanfour=false
					}
				}else if(dd == 4){
					if(cc != this.fUlThree){
						this.f_ulSpanfive=true
					}else{
						this.f_ulSpanfive=false
					}
				}
			},
			f_ulCodebtn:function(){
				let sendData = {QQid:this.fUlOne,phone:this.fUlTwo};
				// const baseUrl = "   /fulFours"//网址
					//获取cartinfo的接口地址
// 					fetch(baseUrl,{method: 'POST'})
// 					.then(function(res){
// 						return res.json();
// 					})
// 					.then(function(obj){
// 						console.log(obj)
// 					})
// 				if( == 0){
// 				}
			},
			f_ulSend:function(){
				let ofUlSpan = document.getElementsByClassName("f_ul_span");
				console.log(ofUlSpan[2].style.display)
				console.log(ofUlSpan[4].style.display)
				console.log(this.fulFour)
				if(ofUlSpan[2].style.display=="none"&&ofUlSpan[4].style.display=="none"&&this.fulFour!= ""){
					let fulFours = this.fulFour;
					console.log("1")
				// const baseUrl = "   /fulFours"//网址
					//获取cartinfo的接口地址
// 					fetch(baseUrl,{method: 'POST'})
// 					.then(function(res){
// 						return res.json();
// 					})
// 					.then(function(obj){
// 						console.log(obj)
// 					})

					// this.$router.push({name:Login,params:{}})//跳转登录页面

				}
			},
			fdownlists:function(){
				if(f_downlist.style.display == ""){
					f_downlist.style.display = "block"
				}else if(f_downlist.style.display == "none"){
					f_downlist.style.display = "block"
				}else{
					f_downlist.style.display = "none"
				}
			},
			shows:function(data){
				this.fUlPho = data;
				f_downlist.style.display = "none"
			}
		}
	}
</script>

<style>
	#forgetword{
		width: 100%;
		padding-top: .3rem;
		background: #eee;
	    height: 6.36rem;
	}
	#forgetword li{
		list-style: none;
	}
	#f_top{
		width: 2.44rem;
		height: 1rem;
		background: url(../assets/dyw-img/logo.png) no-repeat center center ;
		margin: 0 auto .2rem;
		background-size:auto 100% ;
	}
	.f_ul{
		width:77.3%;
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		position: relative;
		font-size: .16rem;
	}
	.f_ul_codebtn,.f_ul input{
		height: .44rem;
		border: 0;
		text-indent:.15rem;
		border-radius: 4px;
	}
	.f_ul_one,
	.f_ul_three{
		width: 100%;
		font-size: .16rem;
	}
	.f_ul_two,
	.f_ul_pho,
	.f_ul_codedata,
	.f_ul_codebtn{
		width: 66%;
		margin-top: .1rem;
		font-size: .16rem;
	}
	.f_ul_pho,
	.f_ul_codebtn{
		width: 30%;
		margin-right:4%;
		font-size: .16rem;
	}
	.f_ul_three{
		margin-top: .1rem;
		font-size: .16rem;
	}
	.f_ul_codebtn{
		text-indent: 0;
		text-align: center;
		background:#146fdf;
		color: white;
		line-height: .44rem;
	}
	.f_ul_send{
		width: 100%;
		height: .44rem;
		text-align: center;
		line-height: .44rem;
		color: white;
		background:#146fdf;
		border-radius: 4px;
		margin-top: .2rem;
	}
	.f_ul_downbtn{
		height: .44rem;
		width: 8%;
		background: url(../assets/dyw-img/down.png) no-repeat center center;
		position: absolute;
		top: .1rem;
		left: 20%;
	}
	#f_downlist{
		width:77.7%;
		margin: 0 auto;
		border-radius:4px;
		position: absolute;
	    top: 2.5rem;
		left: 11.2%;
		background: white;
		box-shadow: 0 0 8px 0 rgba(0,0,0,.15);
		display: none;
	}
	.f_ul_ul{
		position: relative;
	}
	#f_downlist li{
		width: 100%;
		height: .34rem;
		font-size:14px ;
		line-height: .34rem;
		text-indent: 2px;
	}
	.f_ul_span{
		display: inline-block;
		width: 100%;
		color: #ff5b5b;
		text-indent: .22rem;
		background: url(../assets/dyw-img/error@2x.png) no-repeat; 
		background-size: .18rem .18rem;
		margin-top: .06rem;
	}
</style>
